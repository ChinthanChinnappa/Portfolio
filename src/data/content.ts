export const profile = {
  name: "CHINTHAN CHINNAPPA",
  role: "Backend Engineer",
  domains: "Distributed Systems · AI · Software Engineering",
  statement:
    "I build backend systems, data pipelines and intelligent software that turn complex problems into reliable systems.",
  location: "INDIA",
  statusLabel: "SYSTEM STATUS",
  statusValue: "ONLINE",
  email: "chinthanchinnappapt@gmail.com",
  github: "https://github.com/ChinthanChinnappa",
  linkedin: "https://www.linkedin.com/in/chinthanchinnappapt",
};

export const nav = [
  { id: "work", index: "01", label: "WORK" },
  { id: "systems", index: "02", label: "SYSTEMS" },
  { id: "experiments", index: "03", label: "EXPERIMENTS" },
  { id: "about", index: "04", label: "ABOUT" },
  { id: "contact", index: "05", label: "CONTACT" },
] as const;

export type Project = {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  year?: string;
  kind?: string;
  domain?: string;
  description: string;
  technologies: string[];
  architecture: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    id: "visentropy",
    index: "01",
    name: "VISENTROPY",
    subtitle: "Vision-Based Entropy for Secure Cryptographic Seeding",
    year: "2026",
    kind: "GROUP PROJECT",
    domain: "SECURITY / CRYPTOGRAPHY",
    description:
      "A visual-entropy system designed to derive additional randomness from video frames and combine it with operating-system randomness for cryptographic applications.",
    technologies: ["Python", "OpenCV", "SHA-256", "HMAC-SHA256 DRBG", "AES-256-GCM", "RSA-OAEP"],
    architecture: [
      "Capture video frames as an auxiliary entropy source",
      "Hash frame material with SHA-256",
      "Mix visual entropy with OS CSPRNG output",
      "Feed HMAC-SHA256 DRBG",
      "Protect payloads with AES-256-GCM and RSA-OAEP",
    ],
  },
  {
    id: "ingestion",
    index: "02",
    name: "FAULT-TOLERANT DATA INGESTION PIPELINE",
    subtitle: "Reliable intake, buffering and processing",
    description:
      "A backend data-ingestion pipeline designed around REST APIs, SQL, Kafka and Docker with failure handling and reliable processing.",
    technologies: ["Python", "REST APIs", "SQL", "Apache Kafka", "Docker"],
    architecture: [
      "REST intake for producers",
      "Kafka as the durable event buffer",
      "Workers with retry and failure isolation",
      "SQL as the system of record",
      "Dockerized services for repeatable deploys",
    ],
  },
  {
    id: "pos",
    index: "03",
    name: "RETAIL POS / FRAUD DETECTION",
    subtitle: "Transactions, inventory and anomaly signals",
    description: "A backend-oriented retail POS system with fraud-detection functionality.",
    technologies: ["Node.js", "Express", "MongoDB"],
    architecture: [
      "Express APIs for checkout and inventory",
      "MongoDB document store for transactions",
      "Fraud heuristics on basket and payment events",
      "Operational views for store activity",
    ],
    github: "https://github.com/ChinthanChinnappa/web-app-project",
  },
  {
    id: "neuronos",
    index: "04",
    name: "NEURONOS",
    subtitle: "AI-Powered Organizational Intelligence System",
    description:
      "An AI/data analytics platform designed to analyze structured datasets and provide intelligent insights through an interactive interface.",
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Machine Learning"],
    architecture: [
      "Structured dataset intake",
      "Pandas / NumPy transformation layer",
      "Model-assisted insight generation",
      "Streamlit interactive surface",
    ],
    github: "https://github.com/ChinthanChinnappa/NeuronOS",
  },
];

export const systems = {
  BACKEND: ["Java", "Python", "Node.js", "Spring Boot", "REST APIs", "Authentication & Authorization"],
  DATA: ["SQL", "MySQL", "MongoDB", "Kafka", "Pandas", "NumPy"],
  INFRASTRUCTURE: ["Docker", "Kubernetes", "AWS", "Git", "Postman"],
  "AI / ML": ["Scikit-learn", "Machine Learning", "Data Analysis", "Generative AI"],
};

export const engineering = ["INPUT", "DATA", "PROCESSING", "SYSTEM", "API", "USER"];

export const experiments = [
  { name: "LEETCODE", detail: "322+ problems solved" },
  { name: "CODE ALCHEMIST IDE", detail: "Personal engineering tooling" },
  { name: "AI AGENTS", detail: "Agent workflows and tool use" },
  { name: "DATA PIPELINE EXPERIMENTS", detail: "Streaming and batch intake studies" },
  { name: "SYSTEM DESIGN EXPERIMENTS", detail: "Architecture sketches and failure modes" },
  { name: "THREE.JS / WEBGL EXPERIMENTS", detail: "Interactive rendering studies" },
];

export const about = {
  text: "I'm a Computer Science engineer interested in the layer beneath applications — APIs, data, distributed systems and the infrastructure that makes software reliable.",
  education: "Computer Science & Engineering",
  school: "Mangalore Institute of Technology & Engineering",
  interests: [
    "Backend Systems",
    "Distributed Systems",
    "Data Engineering",
    "AI Systems",
    "System Design",
    "Developer Tooling",
  ],
};

export const achievements = [
  { event: "Division-Level Hockey Championship", note: "2×" },
  { event: "National-level Revels Hockey Tournament", note: "Participant" },
  { event: "Smart India Hackathon 2025", note: "Shortlist" },
  { event: "Samsung Solve for Tomorrow", note: "Participation" },
  { event: "BUG HUNT 2026", note: "Organizer" },
  { event: "AWS certifications", note: "Cloud" },
  { event: "NPTEL Data Mining", note: "Coursework" },
];
