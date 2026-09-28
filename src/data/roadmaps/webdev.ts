import { Roadmap } from '../../types/roadmap';

export const webdevRoadmap: Roadmap = {
  id: 'web-development',
  title: 'Web Development Roadmap',
  slug: 'web-development',
  subtitle: 'From zero to building responsive modern full-stack web applications',
  category: 'web-dev',
  icon: 'Globe',
  difficulty: 'Beginner → Advanced',
  estimatedDuration: '4–6 months',
  projectsCount: 8,
  careerPaths: ['Frontend Developer', 'Full Stack Developer', 'React Developer', 'UI Engineer'],
  careerStages: [
    { title: 'HTML5 & CSS3 Basics', desc: 'Semantic tags, Flexbox, Grid, responsiveness and styling' },
    { title: 'JavaScript & DOM', desc: 'ES6+, asynchronous fetch, DOM events, and browser APIs' },
    { title: 'Modern React & Tailwind', desc: 'Components, hooks, state management and Tailwind CSS' },
    { title: 'Backend & Databases', desc: 'Node.js, Express, REST APIs, and MongoDB or PostgreSQL' },
    { title: 'Full Stack Integration', desc: 'Authentication, SSR/Next.js, deployment on Vercel/Cloud' },
    { title: 'Portfolio & Job Ready', desc: 'High-polish showcase projects with live links and GitHub' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — Web Foundations',
      title: 'How the Web Works & HTML5',
      description: 'Understand client-server architecture, DNS, HTTP requests, and semantic HTML5 structuring.',
      color: 'blue',
      topics: [
        {
          id: 'wd-l0-t1',
          title: 'How the Web Works',
          subtitle: 'Browsers, DNS, IP addresses and HTTP requests',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'When you type a URL into a browser, DNS resolves the domain name into an IP address. The browser sends an HTTP GET request to the server, and the server responds with HTML, CSS, and JavaScript files.',
          whyLearnIt: 'Knowing how requests travel through the internet helps you debug page loading issues, caching bugs, and CORS errors.',
          codeExample: {
            language: 'text',
            code: `User types: https://example.com
       ↓
DNS Lookup: example.com -> 93.184.216.34
       ↓
Browser sends: GET / HTTP/1.1
       ↓
Server responds: 200 OK + index.html`,
            explanation: 'The browser receives the text files and renders them into interactive visual elements.',
          },
          practiceExercises: [
            { id: 'wd-ex-0-1', task: 'Open Chrome DevTools (F12) -> Network tab, load any website, and inspect the HTTP status code.', hint: 'Look for 200 OK or 304 Not Modified.' },
            { id: 'wd-ex-0-2', task: 'What is the difference between HTTP and HTTPS?', hint: 'HTTPS encrypts data in transit using TLS/SSL certificates.' },
          ],
          miniChallenge: {
            title: 'Network Detective',
            description: 'Inspect the DevTools Network tab on your favorite site and identify the largest asset downloaded (image, font, or script bundle).',
            tips: 'Sort by "Size" column in the Network tab.',
          },
        },
        {
          id: 'wd-l0-t2',
          title: 'Semantic HTML5',
          subtitle: 'header, nav, main, article, section, footer, and accessibility',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'HTML (HyperText Markup Language) is the skeleton of every website. Semantic tags give clear meaning to screen readers and search engines rather than wrapping everything in generic <div> tags.',
          whyLearnIt: 'Semantic HTML boosts SEO ranking and makes your site accessible to visually impaired users with screen readers.',
          codeExample: {
            language: 'html',
            code: `<header>
  <nav><a href="#home">Home</a></nav>
</header>
<main>
  <article>
    <h1>Learning Modern Web Development</h1>
    <p>Semantic tags improve accessibility and SEO.</p>
  </article>
</main>
<footer><p>© 2026 SkillPath</p></footer>`,
            explanation: 'Each tag describes its role in the document structure.',
          },
          practiceExercises: [
            { id: 'wd-ex-0-3', task: 'Build an accessible form with labeled inputs for name, email, and a submit button.', hint: 'Use <label for="email"> and <input id="email">.' },
            { id: 'wd-ex-0-4', task: 'Why is the alt attribute required on <img> tags?', hint: 'For screen readers and as a fallback if the image fails to load.' },
          ],
          miniChallenge: {
            title: 'Personal Portfolio Skeleton',
            description: 'Create an index.html file structured with header, nav, hero section, skills list, project showcase, and contact form using only semantic HTML.',
            tips: 'Test opening the file directly in your browser.',
          },
        },
      ],
    },
    {
      levelNumber: 1,
      levelTag: 'LEVEL 1 — Modern CSS & Responsive Layouts',
      title: 'Flexbox, CSS Grid & Tailwind CSS',
      description: 'Master the box model, responsive media queries, modern CSS layout engines, and utility-first styling.',
      color: 'cyan',
      topics: [
        {
          id: 'wd-l1-t1',
          title: 'CSS Box Model, Flexbox & Grid',
          subtitle: 'Margin, border, padding, 1D flex layouts and 2D grid systems',
          difficulty: 'easy',
          estimatedHours: '4 hours',
          whatIsIt: 'Every HTML element is a box with content, padding, border, and margin. Flexbox manages 1-dimensional layouts (rows or columns); CSS Grid organizes 2-dimensional grid layouts.',
          whyLearnIt: 'Flexbox and Grid allow you to create fluid responsive designs that look flawless on smartphones, tablets, and 4K desktop screens.',
          codeExample: {
            language: 'css',
            code: `/* Flexbox centered container */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* 3-column responsive grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`,
            explanation: 'auto-fit minmax automatically wraps cards without needing custom media queries.',
          },
          practiceExercises: [
            { id: 'wd-ex-1-1', task: 'Center an element horizontally and vertically using Flexbox in 3 lines.', hint: 'display: flex; justify-content: center; align-items: center;' },
            { id: 'wd-ex-1-2', task: 'What does box-sizing: border-box do?', hint: 'Includes padding and border within the element’s total width/height.' },
          ],
          miniChallenge: {
            title: 'Pricing Card Grid',
            description: 'Build a 3-tier pricing card layout (Free, Pro, Enterprise) that sits side-by-side on desktop and stacks neatly into one column on mobile.',
            tips: 'Use display: grid with repeat(auto-fit, minmax(260px, 1fr)).',
          },
        },
      ],
    },
    {
      levelNumber: 2,
      levelTag: 'LEVEL 2 — JavaScript & DOM Interactivity',
      title: 'ES6+, Asynchronous Programming & Fetch API',
      description: 'Bring websites to life with event listeners, DOM manipulation, promises, async/await, and REST API consumption.',
      color: 'yellow',
      topics: [
        {
          id: 'wd-l2-t1',
          title: 'DOM Manipulation & Event Listeners',
          subtitle: 'Selecting elements, updating content, and handling user clicks',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'The DOM (Document Object Model) is the browser’s tree representation of HTML. JavaScript lets you dynamically add, remove, and style elements in response to clicks, typing, or scrolling.',
          whyLearnIt: 'Interactivity transforms static brochure websites into living web applications.',
          codeExample: {
            language: 'javascript',
            code: `const button = document.querySelector('#theme-btn');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  button.textContent = document.body.classList.contains('dark-theme') 
    ? '☀️ Light Mode' 
    : '🌙 Dark Mode';
});`,
            explanation: 'Listening to user interactions and toggling CSS classes dynamically.',
          },
          practiceExercises: [
            { id: 'wd-ex-2-1', task: 'Create a live character counter for a textarea input as the user types.', hint: 'Listen to the "input" event and read input.value.length.' },
            { id: 'wd-ex-2-2', task: 'Difference between event.preventDefault() and event.stopPropagation()?', hint: 'preventDefault stops browser defaults (e.g. form submit page reload); stopPropagation prevents event bubbling.' },
          ],
          miniChallenge: {
            title: 'Interactive Filterable Gallery',
            description: 'Build an image gallery with filter buttons (All, Nature, Tech). Clicking a button hides non-matching items without refreshing the page.',
            tips: 'Use data attributes: data-category="nature" and toggle class "hidden".',
          },
        },
        {
          id: 'wd-l2-t2',
          title: 'Async/Await & Fetching Real APIs',
          subtitle: 'Promises, HTTP requests, and handling JSON data',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'JavaScript is single-threaded. Async/await and Promises let you initiate long operations (like downloading weather data from a remote server) without freezing the user interface.',
          whyLearnIt: 'Modern apps load dynamic content via APIs (e.g. fetching news, user profiles, or live prices).',
          codeExample: {
            language: 'javascript',
            code: `async function loadWeather(city) {
  try {
    const res = await fetch(\`https://api.weather.com/v1?city=\${city}\`);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    console.log("Temperature:", data.temperature);
  } catch (err) {
    console.error("Fetch failed:", err.message);
  }
}`,
            explanation: 'async/await writes asynchronous code that reads cleanly like synchronous steps.',
          },
          practiceExercises: [
            { id: 'wd-ex-2-3', task: 'Fetch data from the free JSONPlaceholder API and render a list of 5 posts.', hint: 'fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")' },
            { id: 'wd-ex-2-4', task: 'Why should you check res.ok before calling res.json()?', hint: 'fetch does not reject on HTTP 404 or 500 error responses.' },
          ],
          miniChallenge: {
            title: 'Live Crypto Price Ticker',
            description: 'Build a small app that fetches current Bitcoin and Ethereum prices every 30 seconds from CoinGecko public API and updates the UI.',
            tips: 'Use setInterval and async fetch.',
          },
        },
      ],
    },
    {
      levelNumber: 3,
      levelTag: 'LEVEL 3 — React & Component Architecture',
      title: 'Components, Hooks, State & Routing',
      description: 'Build scalable Single-Page Applications (SPAs) with React, useState, useEffect, custom hooks, and Tailwind CSS.',
      color: 'purple',
      topics: [
        {
          id: 'wd-l3-t1',
          title: 'React Fundamentals: JSX, Props & useState',
          subtitle: 'Declarative component-driven user interfaces',
          difficulty: 'medium',
          estimatedHours: '5 hours',
          whatIsIt: 'React is the world’s most dominant frontend UI library. You break your interface into reusable components that automatically re-render whenever their state changes.',
          whyLearnIt: 'Over 70% of frontend developer job postings require React experience.',
          codeExample: {
            language: 'tsx',
            code: `import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button 
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 bg-blue-600 rounded-lg text-white"
    >
      Clicked {count} times
    </button>
  );
}`,
            explanation: 'When setCount updates count, React re-renders the component with the new value automatically.',
          },
          practiceExercises: [
            { id: 'wd-ex-3-1', task: 'Create a reusable UserCard component accepting name, avatar, and role props.', hint: 'Pass props like <UserCard name="Elena" role="Designer" />' },
            { id: 'wd-ex-3-2', task: 'Why should you never mutate state directly in React (e.g. state.items.push(x))?', hint: 'React detects changes via shallow equality of state references; direct mutation does not trigger a re-render.' },
          ],
          miniChallenge: {
            title: 'Interactive Kanban Board',
            description: 'Create a mini board with "Todo", "In Progress", and "Done" columns where tasks can be moved between states with buttons.',
            tips: 'Store tasks in state as array of objects with status property.',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'wd-p1',
      title: 'Responsive Designer Portfolio',
      difficulty: 'beginner',
      description: 'A mobile-first personal portfolio showcasing projects, interactive dark/light mode toggle, smooth scrolling, and an accessible contact form.',
      whatYouWillBuild: 'Semantic HTML5, modern CSS Grid/Flexbox, and vanilla JavaScript for theme persistence.',
      skillsRequired: ['HTML5', 'CSS3', 'Flexbox & Grid', 'JavaScript DOM'],
      estimatedHours: '6–8 hours',
      starterSteps: ['Wireframe mobile and desktop layouts', 'Structure semantic HTML', 'Style with CSS custom properties', 'Add theme toggle'],
    },
    {
      id: 'wd-p2',
      title: 'Full-Featured Weather & Air Quality Dashboard',
      difficulty: 'intermediate',
      description: 'A live weather application fetching forecasts, hourly temperature charts, air quality metrics, and geolocated city searches.',
      whatYouWillBuild: 'React Single Page App using OpenWeather API, Lucide icons, and Tailwind CSS.',
      skillsRequired: ['React', 'Tailwind CSS', 'Fetch / Axios', 'LocalStorage'],
      estimatedHours: '8–12 hours',
      starterSteps: ['Integrate weather API', 'Build city search autocomplete', 'Render 5-day forecast cards', 'Save recent cities in localStorage'],
    },
    {
      id: 'wd-p3',
      title: 'Full-Stack E-Commerce Store with Stripe',
      difficulty: 'advanced',
      description: 'An end-to-end shopping platform with product filtering, cart drawer, user authentication, and secure Stripe checkout flow.',
      whatYouWillBuild: 'Full-stack application with Next.js or React + Node/Express backend and database integration.',
      skillsRequired: ['React / Next.js', 'Node.js', 'Stripe API', 'Database'],
      estimatedHours: '20–30 hours',
      starterSteps: ['Build catalog and search filters', 'Create shopping cart state store', 'Setup server checkout endpoint', 'Verify payment webhooks'],
    },
  ],
};

export const cybersecurityRoadmap: Roadmap = {
  id: 'cybersecurity',
  title: 'Cybersecurity Roadmap',
  slug: 'cybersecurity',
  subtitle: 'From network defense & Linux fundamentals to ethical hacking and SOC analysis',
  category: 'cybersecurity',
  icon: 'Shield',
  difficulty: 'Beginner → Advanced',
  estimatedDuration: '4–7 months',
  projectsCount: 6,
  careerPaths: ['Security Analyst (SOC)', 'Penetration Tester (Ethical Hacker)', 'Network Security Engineer', 'Cloud Security Specialist'],
  careerStages: [
    { title: 'Computer Networking', desc: 'OSI model, TCP/IP, DNS, subnetting, Wireshark packet capture' },
    { title: 'Linux & Scripting', desc: 'Bash scripting, file permissions, system services, and Python' },
    { title: 'Security Fundamentals', desc: 'CIA triad, cryptography, hashing, firewalls, and IAM' },
    { title: 'Defensive Security (Blue Team)', desc: 'SIEM (Splunk), threat detection, incident response, SOC triage' },
    { title: 'Offensive Security (Red Team)', desc: 'Port scanning (Nmap), Burp Suite, Metasploit, web vulnerabilities' },
    { title: 'Certifications & Job', desc: 'CompTIA Security+, CEH, TryHackMe/HackTheBox portfolio' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — Networking & Linux Foundations',
      title: 'Networking & Command Line Mastery',
      description: 'Master how data moves across networks (OSI model, TCP/UDP) and become fluent in Linux terminal administration.',
      color: 'blue',
      topics: [
        {
          id: 'cs-l0-t1',
          title: 'The OSI Model & TCP/IP Protocol Suite',
          subtitle: 'The 7-layer framework of computer communication',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'The OSI (Open Systems Interconnection) model divides network communication into 7 distinct layers (Physical, Data Link, Network, Transport, Session, Presentation, Application).',
          whyLearnIt: 'Security analysts must know which layer an attack occurs on (e.g. SYN Flood attacks target Transport Layer 4; SQL Injection targets Application Layer 7).',
          codeExample: {
            language: 'text',
            code: `Layer 7: Application (HTTP, DNS, SSH)
Layer 4: Transport (TCP reliable / UDP fast)
Layer 3: Network (IP Routing, Routers)
Layer 2: Data Link (MAC Addresses, Switches)
Layer 1: Physical (Ethernet cables, Wi-Fi radio)`,
            explanation: 'Data packets are encapsulated with headers descending through layers and stripped upon arrival.',
          },
          practiceExercises: [
            { id: 'cs-ex-0-1', task: 'Difference between TCP (handshake) and UDP (connectionless)?', hint: 'TCP guarantees delivery via 3-way handshake; UDP streams fast without verification (used for video/gaming).' },
            { id: 'cs-ex-0-2', task: 'What port does HTTPS use by default? What port does SSH use?', hint: 'HTTPS = 443; SSH = 22.' },
          ],
          miniChallenge: {
            title: 'Wireshark Packet Capture',
            description: 'Install Wireshark, start capturing on your Wi-Fi interface, ping google.com, and filter for "icmp" packets to inspect the echo request and reply.',
            tips: 'Filter: icmp in the top Wireshark filter bar.',
          },
        },
        {
          id: 'cs-l0-t2',
          title: 'Linux Fundamentals & File Permissions',
          subtitle: 'chmod, chown, sudo, grep, and directory navigation',
          difficulty: 'easy',
          estimatedHours: '4 hours',
          whatIsIt: 'Linux powers 95%+ of servers, firewalls, and security tools (Kali Linux). You must navigate directories, inspect system logs (/var/log), and manage users and read/write/execute permissions.',
          whyLearnIt: 'Almost all security tools run on Linux, and servers under attack run on Linux.',
          codeExample: {
            language: 'bash',
            code: `# Check permissions:
ls -la /etc/shadow

# Set read/write only for owner (secure):
chmod 600 id_rsa

# Search logs for failed SSH logins:
grep "Failed password" /var/log/auth.log`,
            explanation: 'chmod 600 ensures private keys cannot be read by other users on the system.',
          },
          practiceExercises: [
            { id: 'cs-ex-0-3', task: 'Explain what permissions -rwxr-xr-- represent.', hint: 'Owner: read/write/execute (7); Group: read/execute (5); Others: read only (4).' },
            { id: 'cs-ex-0-4', task: 'How do you kill a rogue background process using terminal?', hint: 'Find PID with "ps aux | grep process" then run "kill -9 <PID>".' },
          ],
          miniChallenge: {
            title: 'Linux Server Audit Script',
            description: 'Write a small Bash script audit.sh that checks current logged-in users (who), listening network ports (ss -tuln), and available disk space (df -h).',
            tips: 'Make executable with chmod +x audit.sh.',
          },
        },
      ],
    },
    {
      levelNumber: 1,
      levelTag: 'LEVEL 1 — Security Principles & Cryptography',
      title: 'CIA Triad, Encryption & Authentication',
      description: 'Master Confidentiality, Integrity, Availability, symmetric vs asymmetric encryption, hashing algorithms, and public key infrastructure (PKI).',
      color: 'green',
      topics: [
        {
          id: 'cs-l1-t1',
          title: 'The CIA Triad & Threat Modeling',
          subtitle: 'Confidentiality, Integrity, Availability',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'The CIA Triad is the bedrock of information security:\n• Confidentiality: Only authorized eyes can see data.\n• Integrity: Data cannot be altered or tampered with in transit.\n• Availability: Systems must be reachable when needed.',
          whyLearnIt: 'Every security policy and tool is built to protect one or more pillars of the CIA triad.',
          codeExample: {
            language: 'text',
            code: `Threat -> Impact on CIA:
- Ransomware encrypting files -> Destroys Availability & Integrity
- Data Breach dumping passwords -> Destroys Confidentiality
- Man-in-the-Middle altering payments -> Destroys Integrity`,
            explanation: 'Classifying attacks by CIA pillar clarifies appropriate countermeasures.',
          },
          practiceExercises: [
            { id: 'cs-ex-1-1', task: 'Give a real-world example of an attack on Availability.', hint: 'DDoS (Distributed Denial of Service) flooding a bank website with junk traffic.' },
            { id: 'cs-ex-1-2', task: 'Difference between Encryption and Hashing?', hint: 'Encryption is two-way (can be decrypted with key); Hashing is one-way (cannot be reversed).' },
          ],
          miniChallenge: {
            title: 'Hash Verification',
            description: 'Use terminal "sha256sum" or an online tool to generate the SHA-256 hash of a text file. Change one single letter in the file and observe how the hash changes completely (Avalanche Effect).',
            tips: 'sha256sum notes.txt',
          },
        },
      ],
    },
    {
      levelNumber: 2,
      levelTag: 'LEVEL 2 — Defensive Security & Threat Analysis',
      title: 'Firewalls, SIEM (Splunk), and SOC Analysis',
      description: 'Analyze security telemetry, detect brute-force attacks, configure firewalls (UFW/iptables), and investigate malware indicators.',
      color: 'purple',
      topics: [
        {
          id: 'cs-l2-t1',
          title: 'SIEM & Security Operations Center (SOC) Triage',
          subtitle: 'Investigating security alerts in Splunk and Elastic SIEM',
          difficulty: 'medium',
          estimatedHours: '5 hours',
          whatIsIt: 'A SIEM (Security Information and Event Management) aggregates logs from servers, firewalls, and endpoints into one dashboard. SOC Analysts triage alerts to distinguish harmless noise from genuine active intrusions.',
          whyLearnIt: 'SOC Analyst Tier 1 is the most common entry-level job into the cybersecurity industry.',
          codeExample: {
            language: 'text',
            code: `Splunk Query Example:
index=security event_id=4625 action=failure
| stats count by user, src_ip
| where count > 10
// Detects brute force login attempts from specific IPs`,
            explanation: 'Searching aggregated logs to find IP addresses triggering abnormal failure spikes.',
          },
          practiceExercises: [
            { id: 'cs-ex-2-1', task: 'What is an Indicator of Compromise (IoC)?', hint: 'Forensic evidence of an intrusion (e.g. malicious IP, suspicious file hash, unknown registry key).' },
            { id: 'cs-ex-2-2', task: 'What is the purpose of the MITRE ATT&CK framework?', hint: 'A globally accessible knowledge base of adversary tactics and techniques.' },
          ],
          miniChallenge: {
            title: 'TryHackMe SOC Level 1 Room',
            description: 'Complete a free defensive room on TryHackMe or analyze a mock Apache web server log file to identify SQL Injection attack attempts.',
            tips: 'Search for "UNION SELECT" or "OR 1=1" patterns in HTTP access logs.',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'cs-p1',
      title: 'Automated Port Scanner & Vulnerability Banner Grabber',
      difficulty: 'beginner',
      description: 'A Python security tool that scans target IP ranges for open ports (21, 22, 80, 443), grabs service banners, and alerts on outdated services.',
      whatYouWillBuild: 'Python script utilizing socket library and multi-threading for fast scanning.',
      skillsRequired: ['Python', 'Sockets', 'TCP/IP', 'Networking'],
      estimatedHours: '4–6 hours',
      starterSteps: ['Import socket library', 'Connect to target port with timeout', 'Read returned service banner', 'Output summary table'],
    },
    {
      id: 'cs-p2',
      title: 'Home Lab SIEM & Intrusion Detection System',
      difficulty: 'intermediate',
      description: 'Setup a virtualized security home lab with Wazuh or Splunk SIEM, configure Sysmon logging on a target VM, and detect simulated brute force attacks.',
      whatYouWillBuild: 'Virtualized lab environment with active log pipelines and custom alert rules.',
      skillsRequired: ['VirtualBox / VMware', 'Linux', 'Wazuh / Splunk', 'Log Analysis'],
      estimatedHours: '12–16 hours',
      starterSteps: ['Deploy SIEM server VM', 'Install agent on client VM', 'Generate test authentication failures', 'Build detection alert dashboard'],
    },
  ],
};
