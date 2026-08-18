const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export const portfolio = {
  name: "Priyanshi Shah",
  initials: "PS",
  role: "Software & Data Platform Engineer",
  intro:
    "Software engineer focused on distributed systems, data platforms, and applied AI.",
  location: "Redmond, WA",
  email: "shah.priyanshii28@gmail.com",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/priyanshishah28",
    },
    {
      label: "GitHub",
      href: "https://github.com/priyanshiishah",
    },
  ],
  profileImage: assetPath("priyanshi-shah.jpg"),
  resumePath: assetPath("Priyanshi_Shah_Resume.pdf"),
  about: [
    "Hi, I’m Priyanshi, a software and data platform engineer who enjoys turning complex data and infrastructure problems into reliable software. I work across backend development, cloud systems, data engineering, and applied AI.",
    "Throughout my career, I’ve built distributed services, automated large-scale data pipelines, developed real-time analytics workflows, and integrated machine learning into production systems. My experience spans e-commerce, healthcare, crisis response, education, and enterprise applications.",
    "I’m most energized by work that combines thoughtful architecture with practical impact. I care about clear interfaces, observable systems, and solutions that are straightforward for teams to operate, maintain, and evolve.",
  ],
  highlights: [
    { value: "20TB+", label: "Data pipelines automated" },
    { value: "99.9%", label: "Platform reliability delivered" },
    { value: "470+", label: "SKUs monitored at scale" },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "SQL", "JavaScript", "Go"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "Microsoft Azure",
        "Snowflake",
        "Kubernetes",
        "Terraform",
        "CI/CD",
      ],
    },
    {
      category: "Data & Platforms",
      items: [
        "PostgreSQL",
        "SQL Server",
        "Oracle",
        "MongoDB",
        "FastAPI",
        "ETL",
      ],
    },
    {
      category: "AI & Analytics",
      items: [
        "PyTorch",
        "Scikit-learn",
        "LangChain",
        "RAG",
        "Power BI",
        "Tableau",
      ],
    },
  ],
  projects: [
    {
      index: "01",
      title: "Feature Prioritization Platform",
      description:
        "An ML-powered decision platform that analyzed more than 1.2 million user events to score feature impact, align product teams, and accelerate roadmap decisions.",
      impact: [
        "70% less manual analysis",
        "22% lift in feature adoption",
      ],
      stack: ["Python", "Power BI", "Azure Synapse", "A/B Testing"],
    },
    {
      index: "02",
      title: "Service Discovery System",
      description:
        "A resilient, multi-zone service discovery platform on AWS EKS, designed for faster detection, repeatable infrastructure, and dependable backend communication.",
      impact: [
        "50% faster service detection",
        "40% faster provisioning",
      ],
      stack: ["AWS EKS", "Consul", "Terraform", "Helm", "Ansible"],
    },
    {
      index: "03",
      title: "Vitalis BMI Calculator",
      description:
        "A responsive, edge-hosted health screening application that normalizes metric and imperial measurements, computes BMI and healthy-weight intervals, and maps results to standardized health-risk guidance entirely in the browser.",
      impact: [
        "6 BMI risk classifications",
        "2 measurement systems",
        "0 server round trips",
      ],
      stack: [
        "JavaScript",
        "Node.js",
        "Express",
        "Responsive CSS",
        "Cloudflare Pages",
      ],
      href: "https://vitalis-bmi-calculator.pages.dev",
    },
  ],
  experience: [
    {
      company: "Nestlé USA",
      logo: assetPath("logos/nestle.png"),
      role: "Software Engineer, Amazon Account",
      period: "Jun 2025 — Present",
      summary:
        "Architecting distributed catalog and telemetry systems for Amazon e-commerce operations, with predictive analytics supporting sales monitoring and forecasting.",
      tags: ["AWS Lambda", "SQL", "Power BI", "LLMs"],
    },
    {
      company: "Magnamus Inc.",
      logo: assetPath("logos/magnamus.png"),
      role: "Senior Data & Platform Engineer",
      period: "Jul 2024 — Jun 2025",
      summary:
        "Built cloud data and inference platforms, including large-scale ingestion, reliable experimentation pipelines, and real-time predictions for internal products.",
      tags: ["FastAPI", "PostgreSQL", "PyTorch", "AWS"],
    },
    {
      company: "MemorialCare LBMC",
      logo: assetPath("logos/memorialcare.png"),
      role: "Data Engineer",
      period: "Apr 2024 — Jun 2024",
      summary:
        "Re-architected healthcare data workflows and developed AI-driven alerting systems to improve compliance tracking and operational risk visibility.",
      tags: ["Azure Functions", "Python", "RAG", "Power Automate"],
    },
    {
      company: "Match4Action — CrowdDoing",
      logo: assetPath("logos/crowddoing.png"),
      role: "Software Engineer",
      period: "Jun 2023 — Mar 2024",
      summary:
        "Unified real-time emergency response pipelines and deployed NLP sentiment analysis for large-scale wildland fire data.",
      tags: ["Python", "SQL Server", "NLP", "AWS S3"],
    },
    {
      company: "California State University Long Beach",
      logo: assetPath("logos/csulb.svg"),
      role: "Software Engineer",
      period: "May 2022 — May 2023",
      summary:
        "Improved ERP data quality and student outreach by connecting web applications, Oracle platforms, and CRM systems.",
      tags: ["React", "Node.js", "SQL", "Oracle PaaS"],
    },
    {
      company: "Dhyey Consulting Services",
      logo: assetPath("logos/dhyey.png"),
      role: "Junior Application Developer",
      period: "Jun 2020 — Aug 2021",
      summary:
        "Developed application integrations and CI/CD pipelines to improve delivery speed and deployment consistency.",
      tags: ["REST APIs", "GitHub Actions", "CI/CD", "Agile"],
    },
  ],
  education: [
    {
      school: "California State University Long Beach",
      logo: assetPath("logos/csulb.svg"),
      degree: "Master of Science in Computer Science",
      period: "2021 — 2023",
      location: "Long Beach, California",
    },
    {
      school: "Gujarat Technological University",
      logo: assetPath("logos/gtu.png"),
      logoClassName: "scale-125",
      degree: "Bachelor of Technology in Computer Engineering",
      period: "2016 — 2020",
      location: "Ahmedabad, India",
    },
  ],
};
