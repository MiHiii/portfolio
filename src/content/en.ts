import type { PortfolioContent } from './types';

export const en: PortfolioContent = {
  htmlLang: 'en',
  seo: {
    title: 'Pham Minh Hieu | Technical Bridge SE',
    description:
      'Technical Bridge SE specializing in Japanese financial systems, requirements communication, Java/Spring Boot investigation, PostgreSQL, testing, and Japanese-Vietnamese development coordination.',
    keywords: [
      'Technical Bridge SE',
      'Bridge System Engineer',
      'BrSE',
      'Japanese financial systems',
      'Java Spring Boot',
      'PostgreSQL',
      'Japanese Vietnamese software development',
    ],
  },
  profile: {
    name: 'Pham Minh Hieu',
    title: 'Technical Bridge SE',
    positioning:
      'Bridging Japanese clients and Vietnamese development teams with both communication and technical investigation skills.',
    supportingLine: 'Financial systems · Java/Spring Boot · PostgreSQL · Requirements · Testing',
    location: 'Hanoi, Vietnam',
    socials: [
      { name: 'GitHub', href: 'https://github.com/MiHiii', username: 'MiHiii' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/phaminhieuu', username: 'phaminhieuu' },
    ],
  },
  about: {
    heading: 'About Me',
    paragraph:
      "Technical Bridge SE with hands-on experience supporting Japanese financial systems — from specification clarification and requirements communication to implementation review, impact analysis, and regression testing. Rather than acting only as a translator, I read Java/Spring Boot source code and PostgreSQL schemas to independently spot gaps between specification and implementation, then coordinate fixes with both customers and developers. I also build full-stack applications and explore Go/MCP/AI-agent tooling on my own time. Having studied and lived in Japan, I bring practical understanding of the language and work culture, and I'm looking to grow further into upstream requirements and design work.",
  },
  experience: {
    heading: 'Work Experience',
    visitCompanyLabel: 'Visit Company Site',
    items: [
      {
        role: 'Technical Bridge SE',
        company: 'VINICORP · Viet Nhat General JSC',
        logo: '/vinicorp-logo.png',
        duration: 'May 2025 - Present',
        summary:
          'Technical Bridge SE supporting Japanese securities and investment projects from specification clarification through development-team coordination, implementation review, investigation, impact analysis, and testing.',
        highlights: [
          'Worked on approximately 300 functions in total through specification review and translation, requirements communication, testing, investigation, and client-specific customization.',
          'Translated more than 10,000 test cases from Vietnamese into Japanese.',
          'Facilitated online customer meetings to clarify requirements, coordinate issues, and report progress to Japanese stakeholders.',
          'Independently identified discrepancies across specifications, database definitions, business flows, and source code, then reviewed implementation and tracked corrective actions.',
          'Designed, implemented, and maintained JasperReports output end-to-end, and performed impact analysis and regression testing for complex approval and cancellation flows.',
        ],
        images: ['/vinicorp.jpg'],
      },
      {
        role: 'Creator',
        company: 'RIKI EDU TRADE JSC',
        companyHref: 'https://riki.edu.vn',
        logo: '/riki-logo.png',
        duration: 'Aug 2023 - Apr 2025',
        summary:
          'Produced and edited JLPT N1/N2/N3 learning content, designed UI/UX using Figma, and built landing pages for marketing campaigns.',
        highlights: [
          'Edited video content for JLPT N1, N2, and N3 courses.',
          'Designed UI/UX using Figma and built landing pages for marketing campaigns.',
        ],
        images: ['/riki.png'],
      },
    ],
  },
  education: {
    heading: 'Education',
    items: [
      {
        school: 'Foreign Trade University',
        major: 'Business Administration',
        duration: 'Aug 2026 - Present',
      },
      {
        school: 'FPT Polytechnic College',
        major: 'Information Technology',
        duration: 'Jul 2023 - Aug 2025',
        gpa: '3.6/4.0',
      },
      {
        school: 'Japanese Studies in Japan',
        major: 'CODO International Academy, CODO Tourism Vocational School, Kyushu Ryukoku Junior College',
        duration: 'Apr 2018 - Oct 2021',
      },
    ],
  },
  projects: {
    heading: 'Selected Projects',
    items: [
      {
        title: 'Custom MCP Host',
        meta: 'Personal project · 2026',
        description:
          'Go-based agentic loop connecting Gemini to MCP tools, plus a Bearer-authenticated HTTP/SSE gateway with filesystem-access policy and timeout/iteration/concurrency/result-size controls. Includes reusable role-based agents, skills, rules, and commands.',
        tech: ['Go', 'MCP', 'Gemini API', 'SSE'],
      },
      {
        title: 'Vinaside',
        meta: 'Team Lead, 4 members · 2025',
        description:
          'Full-stack accommodation booking platform covering property search/booking, property and staff administration, RBAC, real-time chat, VNPay payments, vouchers, dashboards, and email notifications.',
        tech: ['React', 'Vite', 'TypeScript', 'NestJS', 'MongoDB', 'Socket.IO', 'Redis', 'AWS S3'],
        links: [{ label: 'GitHub', href: 'https://github.com/MiHiii/vinaside-backend' }],
      },
      {
        title: 'Nem Mo E-commerce',
        meta: 'Team Lead, 4 members · 2024',
        description:
          'Online store with authentication, product/catalog management, shopping cart, VNPay payments, comments, and email notifications.',
        tech: ['PHP', 'JavaScript', 'HTML', 'MySQL'],
      },
    ],
  },
  skills: {
    heading: 'Skills',
    groups: [
      { label: 'Languages', items: ['TypeScript/JavaScript', 'Java', 'Go', 'PHP'] },
      {
        label: 'Frameworks',
        items: ['Spring Boot', 'Spring Batch', 'React', 'Next.js', 'NestJS', 'Node.js/Express'],
      },
      {
        label: 'Data & Cloud',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS S3', 'AWS EC2', 'AWS SSM'],
      },
      { label: 'Tools & Other', items: ['JasperReports', 'Git', 'Docker', 'Postman', 'MCP', 'AI-agent workflows'] },
    ],
  },
  certifications: {
    heading: 'Certifications',
    items: [{ name: 'JLPT N2', date: 'December 2019' }],
  },
  resume: {
    ctaLabel: 'View Resume',
    dialogTitle: 'Resume',
    viewLabel: 'View',
    downloadLabel: 'Download',
    documents: [
      {
        key: 'en-cv',
        label: 'English CV',
        href: '/resume/pham-minh-hieu-technical-brse-en.pdf',
        downloadName: 'Pham-Minh-Hieu-Technical-BrSE.pdf',
      },
    ],
  },
  ui: {
    languageSwitcherLabel: 'Choose language',
  },
};
