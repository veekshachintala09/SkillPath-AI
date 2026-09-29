/**
 * Robust n8n AI Agent client that supports:
 * 1. Server-side proxy (/api/n8n-agent/chat) when available (Express backend)
 * 2. Automatic client-side direct fallback to n8n Cloud Webhook when deployed on static hosts (Vercel, Netlify, Cloud Run without proxy, etc.)
 */

export const DEFAULT_N8N_WEBHOOK =
  'https://veeksha09.app.n8n.cloud/webhook/5c0b5dc9-97a6-493d-b0a3-1d508d6129b9/chat';

export interface SendN8nMessageParams {
  message: string;
  sessionId?: string;
  webhookUrl?: string;
}

export interface N8nAgentResponse {
  success: boolean;
  output: string;
  source: 'proxy' | 'direct-webhook' | 'error';
  latencyMs: number;
  raw?: any;
  error?: string;
}

export async function sendN8nMessage({
  message,
  sessionId = `session-${Date.now().toString(36)}`,
  webhookUrl = DEFAULT_N8N_WEBHOOK,
}: SendN8nMessageParams): Promise<N8nAgentResponse> {
  const startTime = Date.now();
  const cleanWebhook = (webhookUrl || DEFAULT_N8N_WEBHOOK).trim();

  // Step 1: Try proxy endpoint first
  try {
    const proxyController = new AbortController();
    const proxyTimeout = setTimeout(() => proxyController.abort(), 12000);

    const proxyRes = await fetch('/api/n8n-agent/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        message,
        sessionId,
        webhookUrl: cleanWebhook,
      }),
      signal: proxyController.signal,
    });

    clearTimeout(proxyTimeout);

    // If server responded with JSON (proxy succeeded)
    const contentType = proxyRes.headers.get('content-type') || '';
    if (proxyRes.ok && contentType.includes('application/json')) {
      const data = await proxyRes.json();
      if (data && (data.output || data.success)) {
        return {
          success: true,
          output: data.output || 'Received response from n8n AI Agent.',
          source: 'proxy',
          latencyMs: Date.now() - startTime,
          raw: data.raw || data,
        };
      }
    }
  } catch (proxyErr) {
    console.warn('Proxy route unavailable or timed out, trying direct n8n webhook fallback...', proxyErr);
  }

  // Step 2: Direct fallback to n8n Cloud Webhook (critical for Vercel & static deployments)
  try {
    const directPayload = {
      action: 'sendMessage',
      sessionId: String(sessionId),
      chatInput: String(message),
      message: String(message),
    };

    const directController = new AbortController();
    const directTimeout = setTimeout(() => directController.abort(), 25000);

    const directRes = await fetch(cleanWebhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
      },
      body: JSON.stringify(directPayload),
      signal: directController.signal,
    });

    clearTimeout(directTimeout);

    const textData = await directRes.text();
    let parsed: any = null;
    try {
      parsed = JSON.parse(textData);
    } catch {
      parsed = { output: textData };
    }

    const output =
      parsed?.output ??
      parsed?.text ??
      parsed?.message ??
      parsed?.response ??
      (typeof parsed === 'string' ? parsed : textData);

    return {
      success: directRes.ok,
      output: output || 'Connected to n8n Agent.',
      source: 'direct-webhook',
      latencyMs: Date.now() - startTime,
      raw: parsed,
    };
  } catch (directErr: any) {
    return {
      success: false,
      output: `Could not connect to n8n AI Agent at "${cleanWebhook}". Please verify that your n8n workflow is toggled to Active.`,
      error: directErr?.message || String(directErr),
      source: 'error',
      latencyMs: Date.now() - startTime,
    };
  }
}
