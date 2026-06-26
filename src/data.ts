import { UserProfile } from "./types";

export const PRESETS: Record<string, UserProfile> = {
  developer: {
    name: "Dev Narayanan",
    role: "Backend Developer & ML Engineer",
    tagline: "Developing innovative solutions with a passion for exploration.",
    bio: "I am a developer based in India. I enjoy programming and exploring technology. I've participated in 10+ hackathons & ideathons, and have a passion for building innovative solutions.",
    email: "devnarayananmp@outlook.com",
    phone: "7200176502",
    github: "github.com/devnarayanan0",
    linkedin: "linkedin.com/in/devnarayanan0",
    leetcode: "leetcode.com/devnarayanan0",
    twitter: "x.com/dev_narayanan0",
    calComUrl: "https://cal.com/devnarayanan0",
    education: [
      {
        institution: "Chennai Institute Of Technology",
        degree: "B.Tech in Information Technology",
        duration: "09/2024 – 09/2028",
        location: "Chennai, IN",
        details: "CGPA: 8.55 / 10"
      },
      {
        institution: "IIT Mandi",
        degree: "Minor In CSE & Advanced Technology",
        duration: "01/2025 – 01/2026",
        location: "Mandi, IN"
      }
    ],
    experience: [
      {
        company: "ARMB",
        role: "Backend Developer",
        duration: "04/2026 – Present",
        location: "Remote",
        bullets: [
          "Architected SkipIt, a service marketplace connecting Requesters and Providers with profile, address, and request-lifecycle modules, streamlining booking operations by 35%.",
          "Engineered 20+ RESTful APIs with Java, Spring Boot, PostgreSQL, and JWT auth; designed normalized schemas and RBAC, improving API performance by 30% and feature delivery by 25%."
        ]
      },
      {
        company: "Promantus Inc",
        role: "Machine Learning Engineer",
        duration: "04/2026 – 06/2026",
        location: "IITMRP",
        bullets: [
          "Built GenAI applications using LLMs, Multi-model Agents, and RAG architectures, backed by an optimized MLOps pipeline for efficient model deployment and shipment.",
          "Automated model retraining workflows, reducing retraining time and deployment turnaround by 14%."
        ]
      },
      {
        company: "Careerschool IT Solutions",
        role: "FullStack Developer",
        duration: "11/2025 – 12/2025",
        location: "Chennai, IN",
        bullets: [
          "Implemented a full-stack school website enabling the institution to process student applications fully online, increasing seamless application completion rates."
        ]
      }
    ],
    skills: [
      {
        categoryName: "Cloud & Devops",
        skills: ["Azure", "AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
      },
      {
        categoryName: "AI Engineering & ML",
        skills: ["LLMs", "LangChain", "VectorDB", "TensorFlow", "Keras", "Pandas", "Numpy"]
      },
      {
        categoryName: "Frameworks & Technologies",
        skills: ["Spring Boot", "Microservices", "REST APIs", "Express.js", "FastAPI", "PostgreSQL"]
      },
      {
        categoryName: "Programming Languages",
        skills: ["Java", "C++", "Python", "Go", "JavaScript", "TypeScript"]
      },
      {
        categoryName: "Systems & Concurrency",
        skills: ["Distributed Systems", "Multi-threading", "Concurrency", "System Design", "Debugging & Profiling"]
      },
      {
        categoryName: "CS Fundamentals",
        skills: ["Data Structures", "Computer Networks", "Operating Systems", "DBMS", "OOPs"]
      }
    ],
    projects: [
      {
        title: "DevSync",
        category: "Backend Engine",
        tagline: "High-performance multi-cloud state synchronization system.",
        description: [
          "Architected a multi-cloud sync platform integrating AWS S3 and Google Drive APIs with bi-directional sync, folder mapping, and version tracking for 10,000+ files.",
          "Built a Spring Boot sync engine with PostgreSQL state management, concurrent background workers, and conflict resolution, cutting manual file operations by 80% at 99.9% reliability."
        ],
        tags: ["Spring Boot", "React", "PostgreSQL", "Google Drive API", "AWS S3"],
        color: "#000000"
      },
      {
        title: "CHAR.A.I",
        category: "AI Engineering",
        tagline: "Sub-second RAG platform and automated communication agent.",
        description: [
          "Deployed a cloud-native RAG platform on Azure integrating Meta Llama, Pinecone Vector DB, and Sentence Transformers for sub-second semantic search across 5,000+ document chunks.",
          "Built an event-driven FastAPI backend with WhatsApp Cloud API, PostgreSQL, and Azure Monitor for real-time document assistance, handling 1,000+ queries with +35% response relevance."
        ],
        tags: ["FastAPI", "RAG", "WhatsApp Cloud API", "Meta Llama", "Pinecone", "PostgreSQL"],
        color: "#000000"
      }
    ],
    certificates: [
      { name: "Microsoft Certified: Azure Developer Associate (AZ-204)", issuer: "Microsoft" },
      { name: "Claude Certified Architect", issuer: "Anthropic" },
      { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
      { name: "Oracle Cloud Infrastructure 2025 Foundational Associate", issuer: "Oracle" },
      { name: "CyberOps Associate", issuer: "CISCO" }
    ],
    competitiveProgramming: [
      {
        platform: "Leetcode",
        username: "devnarayanan0",
        details: "Solved 700+ problems, consistently ranked in Top 8% globally with max rating 1835+"
      },
      {
        platform: "CodeChef",
        username: "devnarayanan0",
        details: "Achieved 2 STAR rating with 1400+, solving DSA problems across rated contests"
      }
    ],
    achievements: [
      {
        title: "Google Maps Platform Awards 2025",
        details: "Winner (1st in Sustainability) – built GEOSTORM, a calamity alert system using location intelligence.",
        date: "09/2025"
      },
      {
        title: "InnovAItion : DAIICT",
        details: "Finalist (Fintech track) – engineered fintech analytics models for real-time anomaly detection.",
        date: "01/2026"
      },
      {
        title: "Hackwise 2026 : IIM–Indore",
        details: "Finalist, ranked in the Top 10 out of 2,500 teams across India.",
        date: "12/2025"
      },
      {
        title: "AWS Emerging Talent Community",
        details: "Active member, contributing to cloud computing development and multi-cloud learning architectures.",
        date: "Ongoing"
      }
    ]
  }
};
