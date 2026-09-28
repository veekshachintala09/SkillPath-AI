import { Roadmap, PersonalizationConfig } from '../types/roadmap';

export function createAlgorithmicRoadmap(skillName: string, config?: PersonalizationConfig): Roadmap {
  const cleanTitle = skillName.trim();
  const slug = cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const level = config?.currentLevel || 'Complete Beginner';
  const goal = config?.goal || 'Job & Career Readiness';
  const duration = config?.timeline || '3–6 months';

  return {
    id: `custom-${slug}-${Date.now()}`,
    title: `${cleanTitle} Roadmap`,
    slug: slug,
    subtitle: `Custom tailored path for ${level} aiming for ${goal}`,
    category: 'custom',
    icon: 'Sparkles',
    difficulty: level === 'Complete Beginner' ? 'Beginner → Advanced' : `${level} → Advanced`,
    estimatedDuration: duration,
    projectsCount: 6,
    careerPaths: [
      `${cleanTitle} Specialist`,
      `${cleanTitle} Practitioner`,
      `Consultant / Freelancer`,
      `Project Lead`,
    ],
    careerStages: [
      { title: 'Core Foundations', desc: `Master fundamental terminology, mental models & principles of ${cleanTitle}` },
      { title: 'Hands-on Practice', desc: 'Work through daily drills, small assignments, and guided exercises' },
      { title: 'First Mini-Projects', desc: 'Build 3 beginner projects to solidify muscle memory' },
      { title: 'Intermediate Techniques', desc: 'Learn industry workflows, modern tooling, and best practices' },
      { title: 'Portfolio Projects', desc: 'Construct 2-3 showcase pieces demonstrating real-world problem solving' },
      { title: 'Career & Launch', desc: 'Package your work, prepare interview stories, and pitch clients/employers' },
    ],
    levels: [
      {
        levelNumber: 0,
        levelTag: 'LEVEL 0 — Prerequisites & Mindset',
        title: `${cleanTitle} Foundations & Setup`,
        description: `Everything you need to know before starting: core mental models, vocabulary, and setting up your workspace for ${cleanTitle}.`,
        color: 'blue',
        topics: [
          {
            id: `topic-${slug}-0-1`,
            title: `What is ${cleanTitle} & Why it Matters`,
            subtitle: 'The big picture and core value proposition',
            difficulty: 'easy',
            estimatedHours: '2 hours',
            whatIsIt: `${cleanTitle} is a powerful discipline focused on solving problems, creating value, and streamlining processes in its field. Understanding its core essence keeps you focused on what truly matters.`,
            whyLearnIt: `Mastering ${cleanTitle} opens high-leverage career opportunities, boosts creative confidence, and equips you with in-demand problem-solving capability.`,
            codeExample: {
              language: 'text',
              code: `Principle 1: Master the absolute basics first
Principle 2: Practice actively every day (no passive reading)
Principle 3: Build small tangible deliverables early and often`,
              explanation: 'The proven framework for accelerated learning in any discipline.',
            },
            practiceExercises: [
              { id: 'ex-cust-1', task: `Write down 3 specific problems that ${cleanTitle} solves in the real world.`, hint: 'Think about who pays for this skill and why.' },
              { id: 'ex-cust-2', task: 'Set up your dedicated workspace or install the essential software for this discipline.', hint: 'Keep your tools simple and free of distractions.' },
            ],
            miniChallenge: {
              title: '30-Day Goal Contract',
              description: `Write a short 3-sentence commitment stating what milestone project in ${cleanTitle} you will complete in 30 days.`,
              tips: 'Be specific about what you will create or measure.',
            },
          },
          {
            id: `topic-${slug}-0-2`,
            title: 'Essential Vocabulary & Mental Models',
            subtitle: 'Decoding the jargon without the confusion',
            difficulty: 'easy',
            estimatedHours: '3 hours',
            whatIsIt: `Every specialized field has industry terms that sound intimidating. Breaking down this vocabulary into plain English demystifies the concepts and accelerates your progress.`,
            whyLearnIt: `When you speak the language of ${cleanTitle}, you can read documentation, follow expert tutorials, and communicate effortlessly with other practitioners.`,
            codeExample: {
              language: 'text',
              code: `Key Concept A -> Plain English translation
Key Concept B -> How it works in practice
Key Concept C -> Common beginner trap to avoid`,
              explanation: 'Always translate abstract jargon into concrete analogies you already understand.',
            },
            practiceExercises: [
              { id: 'ex-cust-3', task: 'Create a personal glossary of the top 5 most frequent terms in this discipline.', hint: 'Use your own words instead of copying textbook definitions.' },
              { id: 'ex-cust-4', task: 'Explain the core concept to a friend or colleague in under 60 seconds.', hint: 'If you can explain it simply, you understand it deeply.' },
            ],
            miniChallenge: {
              title: 'Concept Translation',
              description: `Find an advanced article or tutorial about ${cleanTitle} and summarize the main takeaway into 3 bullet points.`,
              tips: 'Focus on the "why" and "how".',
            },
          },
        ],
      },
      {
        levelNumber: 1,
        levelTag: 'LEVEL 1 — Core Fundamentals',
        title: 'Building Blocks & Daily Practice',
        description: `Learn the essential mechanics and hands-on techniques of ${cleanTitle}.`,
        color: 'green',
        project: {
          id: `proj-${slug}-1`,
          title: `${cleanTitle} Starter Case Study / Deliverable`,
          difficulty: 'beginner',
          description: `A guided beginner project that applies all core fundamentals into a cohesive, working result.`,
          whatYouWillBuild: `A complete starter deliverable demonstrating clean execution, correct terminology, and proper conventions.`,
          skillsRequired: ['Foundations', 'Core Techniques', 'Workflow Execution'],
          estimatedHours: '4–6 hours',
          starterSteps: [
            'Define requirements and scope',
            'Draft the initial prototype or outline',
            'Refine details using core rules',
            'Review against quality checklist',
          ],
        },
        topics: [
          {
            id: `topic-${slug}-1-1`,
            title: `Primary Methods & Execution Rules`,
            subtitle: 'Standard industry conventions and step-by-step process',
            difficulty: 'easy',
            estimatedHours: '4 hours',
            whatIsIt: `The proven step-by-step techniques that professionals use every day to achieve reliable, predictable results in ${cleanTitle}.`,
            whyLearnIt: `Skipping foundational methods leads to sloppy habits that are painful to unlearn later.`,
            codeExample: {
              language: 'text',
              code: `Step 1: Gather inputs and define constraints
Step 2: Apply standard baseline procedure
Step 3: Test and inspect for edge-case errors
Step 4: Document the outcome`,
              explanation: 'Consistent methodology produces consistent excellence.',
            },
            practiceExercises: [
              { id: 'ex-cust-5', task: 'Execute the primary procedure on a simple practice scenario.', hint: 'Follow each step without rushing.' },
              { id: 'ex-cust-6', task: 'Identify 2 common errors beginners make and describe how to avoid them.', hint: 'Check common pitfall forums and guides.' },
            ],
            miniChallenge: {
              title: 'Timed Quality Drill',
              description: `Set a 20-minute timer and complete a standard exercise in ${cleanTitle}, aiming for clean quality over speed.`,
              tips: 'Review your work against a rubric when the timer rings.',
            },
          },
        ],
      },
      {
        levelNumber: 2,
        levelTag: 'LEVEL 2 — Intermediate Workflows',
        title: 'Efficiency, Tooling & Real-World Patterns',
        description: `Move beyond the basics: learn how pros streamline their work, troubleshoot problems, and deliver high quality.`,
        color: 'yellow',
        project: {
          id: `proj-${slug}-2`,
          title: `Comprehensive ${cleanTitle} Application`,
          difficulty: 'intermediate',
          description: `A multi-faceted project solving a realistic real-world problem with modern industry patterns.`,
          whatYouWillBuild: `A complete, polished deliverable suitable for client presentation or portfolio review.`,
          skillsRequired: ['Intermediate Methods', 'Tooling', 'Quality Assurance'],
          estimatedHours: '8–12 hours',
          starterSteps: [
            'Research user or client needs',
            'Implement core solution architecture',
            'Incorporate feedback and polish edge cases',
            'Write documentation and summary',
          ],
        },
        topics: [
          {
            id: `topic-${slug}-2-1`,
            title: `Optimization & Quality Standards`,
            subtitle: 'Taking your work from functional to professional',
            difficulty: 'medium',
            estimatedHours: '4 hours',
            whatIsIt: `The difference between amateur work and professional craftsmanship lies in attention to detail, error handling, and robust execution.`,
            whyLearnIt: `Employers and clients pay top dollar for practitioners who deliver reliable, polished outcomes on time.`,
            codeExample: {
              language: 'text',
              code: `Before: Bare minimum functional output
After: Robust, validated, documented, and resilient output`,
              explanation: 'Add checks, polish visuals, and optimize performance.',
            },
            practiceExercises: [
              { id: 'ex-cust-7', task: 'Take a previous piece of work and refactor it for 50% better clarity or performance.', hint: 'Eliminate redundancy and simplify.' },
              { id: 'ex-cust-8', task: 'Run a mock peer review or checklist audit on your work.', hint: 'Grade yourself against industry benchmarks.' },
            ],
            miniChallenge: {
              title: 'Client Ready Presentation',
              description: `Create a 1-page executive brief or walkthrough showing your solution, the problem it solved, and the measurable outcome.`,
              tips: 'Focus on business or user impact.',
            },
          },
        ],
      },
      {
        levelNumber: 3,
        levelTag: 'LEVEL 3 — Advanced & Career Readiness',
        title: 'Mastery, Complex Scenarios & Portfolio',
        description: `Tackle edge cases, lead projects, and position yourself in the marketplace for jobs or freelance clients.`,
        color: 'purple',
        topics: [
          {
            id: `topic-${slug}-3-1`,
            title: 'Portfolio Development & Client Pitching',
            subtitle: 'Demonstrating proof of work and landing opportunities',
            difficulty: 'advanced',
            estimatedHours: '4 hours',
            whatIsIt: `Creating an undeniable portfolio of case studies showcasing how your ${cleanTitle} skills deliver tangible value.`,
            whyLearnIt: `Degrees and certificates are secondary; proof of work and problem-solving ability win jobs and contracts.`,
            codeExample: {
              language: 'markdown',
              code: `# Case Study: [Project Title]
- **The Challenge**: What problem existed?
- **The Strategy**: How ${cleanTitle} was applied.
- **The Outcome**: Measurable results and key takeaways.`,
              explanation: 'Frame your projects as problem-solution-impact narratives.',
            },
            practiceExercises: [
              { id: 'ex-cust-9', task: `Draft 3 bullet points for your resume highlighting your ${cleanTitle} accomplishments.`, hint: 'Use action verbs + metric (e.g., "Built X resulting in Y").' },
              { id: 'ex-cust-10', task: 'Prepare a 2-minute elevator pitch explaining your unique capability in this field.', hint: 'Who you help, how you help them, and why your approach works.' },
            ],
            miniChallenge: {
              title: 'Live Portfolio Showcase',
              description: 'Publish your best project with screenshots, descriptions, and a clear breakdown of the techniques used.',
              tips: 'Ask for feedback in developer or practitioner communities.',
            },
          },
        ],
      },
    ],
    projects: [
      {
        id: `cust-p1`,
        title: `${cleanTitle} Starter Drill Project`,
        difficulty: 'beginner',
        description: `A hands-on starter project to build muscle memory and verify comprehension of core concepts.`,
        whatYouWillBuild: `A self-contained deliverable built step-by-step from zero.`,
        skillsRequired: ['Foundations', 'Basic Setup', 'Execution'],
        estimatedHours: '4–6 hours',
        starterSteps: ['Plan structure', 'Execute base steps', 'Test and verify', 'Document outcome'],
      },
      {
        id: `cust-p2`,
        title: `Interactive ${cleanTitle} Solution`,
        difficulty: 'intermediate',
        description: `A comprehensive project addressing real-world user needs with modular architecture.`,
        whatYouWillBuild: `A fully functioning solution ready for practical everyday usage.`,
        skillsRequired: ['Intermediate Patterns', 'Data Management', 'Optimization'],
        estimatedHours: '8–12 hours',
        starterSteps: ['Gather user stories', 'Implement core features', 'Add validation', 'Polish presentation'],
      },
      {
        id: `cust-p3`,
        title: `Capstone Portfolio Showcase`,
        difficulty: 'advanced',
        description: `An end-to-end flagship project designed to stand out to hiring managers and potential clients.`,
        whatYouWillBuild: `A complete production-grade showcase with documentation, testing, and live demo.`,
        skillsRequired: ['Full Stack Competency', 'Edge Case Handling', 'Performance', 'Documentation'],
        estimatedHours: '16–24 hours',
        starterSteps: ['Architect system', 'Build end-to-end', 'Benchmark performance', 'Deploy and publish'],
      },
    ],
  };
}
