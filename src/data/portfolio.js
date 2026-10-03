const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export const portfolio = {
  name: "Priyanshi Shah",
  initials: "PS",
  role: "Software Engineer",
  intro:
    "Software engineer building distributed systems, cloud platforms, and agentic applications.",
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
    "Hi, I’m Priyanshi, a software engineer who enjoys turning complex data and infrastructure problems into reliable software. I work across backend development, distributed systems, cloud infrastructure, and applied AI.",
    "I’ve built services processing more than 20TB of marketing data, production analytics and LLM workflows, and event-driven systems for e-commerce, healthcare, and education.",
    "I’m most energized by work that combines thoughtful architecture with practical impact. I care about clear interfaces, observable systems, and solutions that are straightforward for teams to operate, maintain, and evolve.",
  ],
  highlights: [
    { value: "470+", label: "SKUs supported" },
    { value: "20TB+", label: "Marketing data processed" },
    { value: "99.9%", label: "Reliability SLO maintained" },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "SQL", "JavaScript", "Go"],
    },
    {
      category: "Backend & Distributed Systems",
      items: [
        "FastAPI",
        "REST APIs",
        "Microservices",
        "Redis",
        "SQS",
        "Event-Driven Architecture",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "AWS Lambda, S3, EKS",
        "Microsoft Azure",
        "Kubernetes",
        "Terraform",
        "AWS CDK",
        "Ansible",
        "Git",
        "CI/CD",
      ],
    },
    {
      category: "Databases",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "Oracle",
        "MongoDB",
        "Snowflake",
      ],
    },
    {
      category: "Observability",
      items: [
        "CloudWatch",
        "Azure Monitor",
        "Distributed Monitoring",
        "Alerting",
        "Log Analytics",
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "LLM Agents",
        "Harness Engineering",
        "MCP",
        "LangChain",
        "PyTorch",
        "RAG",
      ],
    },
  ],
  projects: [
    {
      title: "Agentic Commerce Intelligence",
      description:
        "An agentic platform coordinating multi-step commerce investigations across more than four products. Stateful planning, persistent memory, and dynamic execution automate routine workflows, with RBAC, guardrails, tracing, and agent evaluations across more than five independent scenarios.",
      impact: [
        "75% of workflows automated",
        "90% task success",
        "98% execution reliability",
        "12% less investigation time",
      ],
      stack: ["AWS", "SQS", "Redis", "LLM Agents", "MCP"],
    },
    {
      title: "Feature Prioritization Platform",
      description:
        "Built Python services processing more than 1.2 million user events to score feature impact and automate product prioritization, with improved A/B testing pipelines supporting data-driven decisions across three product teams.",
      impact: [
        "22% increase in feature adoption",
        "1.2M+ user events analyzed",
      ],
      stack: ["Python", "Data Pipelines", "A/B Testing"],
    },
    {
      title: "Service Discovery System",
      description:
        "Built Consul-based service discovery on AWS EKS with multi-zone redundancy, then deployed Kubernetes services and an Nginx reverse proxy for resilient service-to-service communication. Automated multi-AZ infrastructure provisioning with Terraform, AWS CDK, and Ansible.",
      impact: [
        "50% faster service resolution",
        "40% faster infrastructure provisioning",
      ],
      stack: [
        "AWS EKS",
        "Consul",
        "Kubernetes",
        "Helm",
        "Nginx",
        "Terraform",
        "AWS CDK",
        "Ansible",
      ],
      image: assetPath("service-discovery-architecture.png"),
      imageAlt:
        "AWS service discovery architecture with Terraform and Ansible provisioning, Consul, a load balancer, private backend services, and S3 storage",
    },
    {
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
      href: "https://bmi.priyanshii.com",
    },
  ],
  experience: [
    {
      company: "Nestlé USA",
      logo: assetPath("logos/nestle.png"),
      role: "Software Engineer, Amazon Account",
      period: "Jun 2025 to Present",
      summary:
        "Architected catalog microservices for 470+ SKUs, improving PDP retention by 19%; built pricing and seller-activity detection that reduced 12% of Buy Box losses; and delivered telemetry and LLM analytics driving 10% YoY growth and 27% better e-commerce forecasting. Crafted omnichannel security dashboards with Zero Trust LLM attribution.",
      tags: [
        "AWS Lambda",
        "SQL",
        "Stackline",
        "Vendor Central",
        "LLMs",
        "Zero Trust",
      ],
    },
    {
      company: "Magnamus Inc.",
      logo: assetPath("logos/magnamus.png"),
      role: "Software Development Engineer",
      period: "Jul 2024 to Jun 2025",
      summary:
        "Optimized distributed AI agent data pipelines on AWS Lambda to cut latency by 21%; established FastAPI and PostgreSQL services ingesting 20TB+ of marketing data while reducing manual processing by 40%; and redesigned fault-tolerant pipelines with CloudWatch monitoring and observability to maintain a 99.9% reliability SLO. Refactored backend APIs with PyTorch pipelines for real-time predictions across 5+ internal products.",
      tags: ["FastAPI", "PostgreSQL", "AWS Lambda", "PyTorch", "CloudWatch"],
    },
    {
      company: "MemorialCare LBMC",
      logo: assetPath("logos/memorialcare.png"),
      role: "Software Developer",
      period: "Apr 2024 to Jun 2024",
      summary:
        "Constructed event-driven workflows using Azure Functions, cutting global compliance-processing time by 15%; produced resilient asynchronous RAG/LLM pipelines handling millions of patient records; and designed data-centric alerting for operational risk detection, recovery, and 25% better incident visibility.",
      tags: ["Azure Functions", "Python", "RAG", "LLMs", "Event-Driven Systems"],
    },
    {
      company: "California State University Long Beach",
      logo: assetPath("logos/csulb.svg"),
      role: "Software Engineer",
      period: "May 2022 to Mar 2024",
      summary:
        "Adapted React, Node.js, and SQL services to automate ERP workflows and reduce data inconsistencies by 20%; linked Oracle PaaS APIs with CRM systems to automate student data synchronization and improve outreach by 30%; and tailored Python real-time operations data pipelines for emergency-response planning and monitoring.",
      tags: ["React", "Node.js", "SQL", "Oracle PaaS"],
    },
  ],
  education: [
    {
      school: "California State University Long Beach",
      logo: assetPath("logos/csulb.svg"),
      degree: "Master of Science in Computer Science",
      period: "Aug 2021 to May 2023",
      location: "Long Beach, California",
    },
    {
      school: "Gujarat Technological University",
      logo: assetPath("logos/gtu.png"),
      logoClassName: "scale-125",
      degree: "Bachelor of Technology in Computer Engineering",
      period: "Jul 2016 to Aug 2020",
      location: "Ahmedabad, India",
    },
  ],
};
