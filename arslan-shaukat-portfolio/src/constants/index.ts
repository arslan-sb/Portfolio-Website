import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TEducation,
  TSkillGroup,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  nextjs,
  aws,
  postgresql,
  git,
  docker,
  python,
  django,
  fastapi,
  pytorch,
  huggingface,
  sybrid,
  daxno,
  ceai,
  rmcaana,
  fiverr,
  stockgeniecover,
  foursight,
  kahawa,
  kissanvoice,
  osconstruction,
  ocrcaptcha,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Backend Engineering",
    icon: backend,
  },
  {
    title: "AI & LLM Systems",
    icon: creator,
  },
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Cloud & DevOps",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Hugging Face",
    icon: huggingface,
  },
  {
    name: "Git",
    icon: git,
  },
];

const skillGroups: TSkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript / JavaScript", "Java", "C / C++", "SQL", "x86 Assembly"],
  },
  {
    title: "Backend & Web",
    skills: ["Django", "FastAPI", "Flask", "Spring Boot", "Node.js", "REST APIs", "React", "Next.js"],
  },
  {
    title: "Data & Messaging",
    skills: ["PostgreSQL", "MySQL", "Redis", "Celery", "Kafka", "Pandas"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, Lambda, S3, RDS, SES)", "Docker", "CI/CD", "Linux", "Git / GitHub"],
  },
  {
    title: "AI & LLM Systems",
    skills: ["RAG pipelines", "LLM agents", "MCP servers", "ChromaDB", "Whisper", "Hugging Face", "Claude Code"],
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "scikit-learn", "OpenCV", "CUDA", "FinBERT"],
  },
  {
    title: "Testing",
    skills: ["Pytest", "Unittest", "K6", "JMeter"],
  },
  {
    title: "Spoken Languages",
    skills: ["English (C1)", "German (A2, working toward B1)", "Urdu / Punjabi (native)"],
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer",
    companyName: "RMCAANA Inc. · Remote",
    icon: rmcaana,
    iconBg: "#1a1a2e",
    date: "Dec 2024 - May 2026",
    points: [
      "Membership Platform: Built the association's membership system as microservices on AWS, with a React front end over Django and Flask REST services backed by PostgreSQL on RDS. Automating registration and renewal grew active membership by 60% (250 → 400).",
      "Observership Portal: Built the Next.js 14 and PostgreSQL backend that carries applicants from application to placement, with conditional email routing via AWS SES and document storage on S3 replacing manual handling.",
      "Cloud & Delivery: Ran the estate on AWS (EC2, Lambda, S3, RDS, SES) with CI/CD pipelines, and migrated the legacy WordPress site to AWS to cut hosting costs and load times.",
      "Reliability: Wrote Pytest suites for the registration, renewal and payment paths and load tested with K6 and JMeter ahead of the annual renewal window; tuned PostgreSQL indexes and queries as records grew.",
    ],
  },
  {
    title: "Data Science Intern",
    companyName: "Sybrid Pvt Ltd (Lakson Group) · Islamabad",
    icon: sybrid,
    iconBg: "#383E56",
    date: "May 2024 - Oct 2024",
    points: [
      "Conversational AI: Built Sybrid HRBot on Django and React with a RAG pipeline over the internal policy corpus, so staff could ask plain-language questions instead of searching PDFs. Developed the frontend for KissanBot, later launched as a commercial agricultural assistant.",
      "AudioStream: Built a secure Django + HLS.js streaming platform so the team could listen to and transcribe confidential recordings for the AgriVoice dataset without ever downloading the raw files.",
      "Generative AI: Created Django tooling for dataset labelling and benchmarked Stable Diffusion (ToonCrafter) for storybook-to-animation workflows before the team committed to it.",
    ],
  },
  {
    title: "Freelance Web Developer (Level 2 Seller)",
    companyName: "Fiverr · Remote",
    icon: fiverr,
    iconBg: "#383E56",
    date: "Jul 2022 - Jun 2024",
    points: [
      "Reached Level 2 seller status delivering Python, JavaScript, C and C++ projects for international clients.",
      "Every engagement started from an unclear brief, so the work was as much scoping, estimating and surfacing risks early as writing code.",
    ],
  },
  {
    title: "Machine Learning Intern",
    companyName: "Center of Excellence in Artificial Intelligence · Islamabad",
    icon: ceai,
    iconBg: "#383E56",
    date: "Sep 2022 - May 2023",
    points: [
      "Developed and implemented an audio classification model for a government organization.",
      "Worked on model development, experimentation and optimization alongside academic staff in the university research group.",
    ],
  },
  {
    title: "Application Developer",
    companyName: "Daxno Technologies · Rawalpindi",
    icon: daxno,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Assisted in research, development, and prototyping of product ideas.",
      "Contributed to software architecture design, feature testing, and optimization of early-stage software products.",
    ],
  },
];

const education: TEducation[] = [
  {
    degree: "M.Sc. Computer Science",
    school: "Technische Universität Dresden",
    location: "Dresden, Germany",
    date: "Apr 2026 - Mar 2028 (expected)",
    details: [
      "Focus: Machine Learning, High Performance Computing, System Architecture",
      "Coursework includes Operating System Construction and Machine Learning for Robotics",
    ],
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Bahria University",
    location: "Islamabad, Pakistan",
    date: "Mar 2021 - Feb 2025",
    details: [
      "CGPA 3.38 / 4.0 (German grade 1.9)",
      "Focus: Artificial Intelligence, NLP, Digital Image Processing",
      "1st Place, Speed Programming Competition 2022",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "During his undergraduate studies, Arslan proved himself to be a talented and dedicated student. His academic achievements speak highly of his commitment.",
    name: "Prof. Dr. Arif ur Rehman",
    designation: "Professor",
    company: "Bahria University",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKodT8NgCwEnFRC02GnO4IhYAIXymCWz2DQQ&s",
  },
  {
    testimonial:
      "Arslan is intelligent, reliable, and committed. His academic achievements and active involvement speak highly of his dedication to computer science.",
    name: "Saima Jawad",
    designation: "Senior Associate Professor",
    company: "Bahria University",
  },
  {
    testimonial:
      "Arslan is capable of working independently and has a gentle personality. He is keen to solve problems and is a hard worker.",
    name: "Dr Muhammad Murtaza Khan",
    designation: "Chief Innovation Officer",
    company: "Sybrid Pvt LTD",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEKnwGAXG1-Aw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699861905014?e=2147483647&v=beta&t=nPnig4CL4SgYQkcq40lgQPWp6HZJz18DJmpjHGscsd0",
  },
];

const projects: TProject[] = [
  {
    name: "Kahawa",
    award: "World Bank Small AI Hackathon 2026",
    description:
      "Offline Swahili voice reports for farmers. Whisper speech recognition and a Qwen 2.5 extractor run on CPU, with a confidence-gated fail-safe that routes unclear reports to a human reviewer.",
    tags: [
      {
        name: "whisper",
        color: "blue-text-gradient",
      },
      {
        name: "qwen2.5",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
    image: kahawa,
    liveLink: "https://kahawa.site",
  },
  {
    name: "4sight",
    award: "Runner-up · Infineon Venture Hack 2026",
    description:
      "Python backend for an agentic risk platform. Jira Cloud data feeds a dependency graph (NetworkX) modelling how risk propagates between tasks; FastMCP servers expose it as tools to a DeepSeek LLM agent, with ChromaDB retrieval over project history.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mcp",
        color: "green-text-gradient",
      },
      {
        name: "llm-agents",
        color: "pink-text-gradient",
      },
      {
        name: "chromadb",
        color: "orange-text-gradient",
      },
    ],
    image: foursight,
    sourceCodeLink: "https://github.com/arslan-sb/4sight",
  },
  {
    name: "Kissan Voice",
    description:
      "Event-driven Spring Boot backend that captures and manages voice-recording data end to end, with a transactional outbox for reliable event delivery and a resilient CRM integration using retries, circuit breakers and dead-letter queues.",
    tags: [
      {
        name: "java21",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "kafka",
        color: "pink-text-gradient",
      },
      {
        name: "aws-s3",
        color: "orange-text-gradient",
      },
    ],
    image: kissanvoice,
    sourceCodeLink: "https://github.com/arslan-sb/Kissan-Voicee",
  },
  {
    name: "OS Construction",
    description:
      "A 64-bit operating system that boots on real hardware, written in freestanding C++ and x86-64 assembly at TU Dresden: PS/2 and CGA drivers, PIC interrupt dispatch with prologue/epilogue halves, a hand-written context switch, preemptive scheduling and semaphores.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "x86-64",
        color: "green-text-gradient",
      },
      {
        name: "bare-metal",
        color: "pink-text-gradient",
      },
    ],
    image: osconstruction,
    sourceCodeLink: "https://github.com/arslan-sb/Operating-System-Construction",
  },
  {
    name: "StockGenie",
    award: "Bachelor Thesis",
    description:
      "Full-stack trading platform: a Django and PostgreSQL backend ingests live market data concurrently through Redis and Celery, with LSTM price forecasting, FinBERT news sentiment per stock, and strategy backtesting.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "finbert",
        color: "pink-text-gradient",
      },
      {
        name: "celery",
        color: "orange-text-gradient",
      },
    ],
    image: stockgeniecover,
    sourceCodeLink: "https://github.com/arslan-sb/StockGeniee",
  },
  {
    name: "OCR-Captcha",
    description:
      "CAPTCHA text recognition in PyTorch using a CRNN trained with CTC loss on a custom dataset, benchmarked against a Tesseract OCR baseline.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "computer-vision",
        color: "green-text-gradient",
      },
      {
        name: "ocr",
        color: "pink-text-gradient",
      },
    ],
    image: ocrcaptcha,
    sourceCodeLink: "https://github.com/arslan-sb/OCR-Captcha",
  },
];

export {
  services,
  technologies,
  skillGroups,
  experiences,
  education,
  testimonials,
  projects,
};
