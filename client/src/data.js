// Portfolio Data — Replace with your real information

export const personal = {
  name: "Alex Johnson",
  title: "Full Stack Developer",
  tagline: "Building scalable web apps for modern businesses",
  about: `I'm a passionate Full Stack Developer with 4+ years of experience crafting end-to-end web applications. I specialize in the React + Node.js + MongoDB ecosystem and love turning complex problems into elegant, performant solutions.

I thrive at the intersection of great design and solid engineering — writing code that's not only functional but maintainable and joyful to work with. When I'm not coding, I contribute to open-source projects and mentor junior developers.`,
  goal: "Currently seeking senior full-stack roles where I can lead product development, drive technical decisions, and help teams ship great software.",
  email: "alex.johnson@email.com",
  linkedin: "https://linkedin.com/in/alexjohnson",
  github: "https://github.com/alexjohnson",
  location: "San Francisco, CA",
  resumeUrl: "#", // Replace with actual resume URL
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux / Zustand", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 75 },
      { name: "Python", level: 70 },
    ],
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 70 },
      { name: "AWS (EC2, S3)", level: 72 },
      { name: "Docker", level: 78 },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "CI/CD Pipelines", level: 78 },
      { name: "Jest / Testing Library", level: 80 },
      { name: "Agile / Scrum", level: 90 },
      { name: "Figma", level: 65 },
    ],
  },
];

export const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Nexus Technologies",
    period: "Jan 2023 – Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Lead a 5-person engineering team building a SaaS analytics platform serving 50,000+ users.",
    responsibilities: [
      "Architected a micro-frontend system reducing build time by 40%",
      "Designed and implemented a real-time data pipeline with WebSockets and Redis Pub/Sub",
      "Mentored 3 junior developers, conducting bi-weekly code reviews",
      "Drove adoption of TypeScript across the entire frontend codebase",
      "Reduced API response time from 800ms to 120ms via query optimization",
    ],
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "AWS", "Docker"],
  },
  {
    role: "Full Stack Developer",
    company: "BrightWave Digital",
    period: "Mar 2021 – Dec 2022",
    location: "Remote",
    type: "Full-time",
    description:
      "Built and maintained client-facing e-commerce and marketing platforms for mid-market brands.",
    responsibilities: [
      "Delivered 12+ client projects on time with zero critical production bugs",
      "Built a custom CMS with drag-and-drop page builder using React DnD",
      "Integrated Stripe, PayPal, and Shopify APIs for payment processing",
      "Improved Core Web Vitals scores by 35% through performance audits",
      "Implemented comprehensive test suites achieving 85% code coverage",
    ],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Vercel"],
  },
  {
    role: "Junior Web Developer",
    company: "PixelCraft Studio",
    period: "Jul 2020 – Feb 2021",
    location: "Austin, TX",
    type: "Full-time",
    description:
      "Developed responsive websites and web applications for small businesses and startups.",
    responsibilities: [
      "Built 20+ responsive websites using React and vanilla JavaScript",
      "Collaborated with designers to implement pixel-perfect UI from Figma mockups",
      "Introduced Git workflow and pull request practices to the team",
      "Maintained and optimized legacy PHP/WordPress sites",
    ],
    tech: ["React", "JavaScript", "CSS3", "PHP", "WordPress", "MySQL"],
  },
];

export const projects = [
  {
    id: 1,
    title: "TaskFlow — Project Management SaaS",
    description:
      "A full-featured project management platform with real-time collaboration, kanban boards, sprint planning, and team analytics. Supports 500+ concurrent users.",
    longDesc:
      "Built a production-grade SaaS with multi-tenant architecture, real-time updates via Socket.io, JWT authentication with refresh tokens, and a responsive React dashboard.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Redis", "AWS S3"],
    liveUrl: "https://taskflow-demo.vercel.app",
    repoUrl: "https://github.com/alexjohnson/taskflow",
    featured: true,
    category: "SaaS",
    stats: "500+ users · 4.8★ rating",
  },
  {
    id: 2,
    title: "ShopSphere — E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product catalog, cart, Stripe payments, order management, and an admin dashboard with real-time sales analytics.",
    longDesc:
      "Integrated Stripe Elements for secure payments, implemented optimistic UI updates, and built a comprehensive admin panel with Chart.js data visualization.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
    liveUrl: "https://shopsphere-demo.vercel.app",
    repoUrl: "https://github.com/alexjohnson/shopsphere",
    featured: true,
    category: "E-Commerce",
    stats: "$50K+ in test transactions",
  },
  {
    id: 3,
    title: "DevPulse — Developer Dashboard",
    description:
      "A personalized developer productivity dashboard aggregating GitHub activity, Jira tickets, CI/CD pipeline status, and team standup notes in one place.",
    longDesc:
      "Designed a widget-based dashboard with drag-and-drop layout customization, OAuth 2.0 integration with GitHub and Jira, and automated standup digest emails.",
    tech: ["React", "Redux", "Node.js", "OAuth 2.0", "GitHub API", "SendGrid"],
    liveUrl: "https://devpulse-demo.vercel.app",
    repoUrl: "https://github.com/alexjohnson/devpulse",
    featured: false,
    category: "Developer Tool",
    stats: "Used by 3 engineering teams",
  },
  {
    id: 4,
    title: "RecipeVault — Recipe Discovery App",
    description:
      "A beautiful recipe discovery and meal planning app with AI-powered recommendations, nutritional info, shopping list generation, and social sharing.",
    longDesc:
      "Built with React Native for web + mobile, integrated OpenAI API for recipe suggestions, and used Cloudinary for image optimization.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API", "Cloudinary", "Framer Motion"],
    liveUrl: "https://recipevault-demo.vercel.app",
    repoUrl: "https://github.com/alexjohnson/recipevault",
    featured: false,
    category: "Consumer App",
    stats: "2K+ recipes · AI-powered",
  },
];
