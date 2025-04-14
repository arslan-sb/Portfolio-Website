import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  // javascript,
  // typescript,
  // html,
  // css,
  reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  git,
  // figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
  python,
  django,
  fastapi,
  pytorch,
  tensorflow,
  sql,
  flask,
  sklearn,
  huggingface,
  sybrid,
  daxno,
  ceai,
  stockgenie,
  croprec,
  resumeanalyzer,
  globaltalk,
  airbnbanalysis,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: creator,
  },
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
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
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Scikit-learn",
    icon: sklearn,
  },
  {
    name: "Hugging Face",
    icon: huggingface,
  },
];

const experiences: TExperience[] = [
  {
    title: "Data Science Intern",
    companyName: "Sybrid Pvt LTD",
    icon: sybrid,
    iconBg: "#383E56",
    date: "May 2024 - October 2024",
    points: [
      "Developed the frontend for Sybrid HRBot using React.js and connected it with Django for internal employee query resolution.",
      "Designed and implemented the frontend for KissanBot and created a dummy backend using Flask for testing.",
      "Built a Django application to secure internal company data and enable audio annotation by interns.",
      "Developed AgriVoice Tool in Django for creating a labeled audio dataset for Kissan Bot.",
      "Annotated the CS North dataset for further processing and analysis.",
      "Tested stable diffusion-based ToonCrafter model on images to generate animated video frames."
    ],
  },
  {
    title: "Software Engineering Intern",
    companyName: "Daxno Technologies",
    icon: daxno,
    iconBg: "#E6DEDD",
    date: "June 2023 - November 2023",
    points: [
      "Assisted in research, development, and prototyping of product ideas.",
      "Contributed to software architecture design, feature testing, and optimization of early-stage software products.",
    ],
  },
  {
    title: "Freelance Programmer (Level 2 Seller)",
    companyName: "Fiverr",
    icon: "https://www.citypng.com/public/uploads/preview/hd-fiverr-logo-transparent-background-701751694713868csfsamlgnd.png?v=2025040710", // Placeholder icon until Fiverr icon is added
    iconBg: "#383E56", // Fiverr's brand green color
    date: "June 2022 - June 2023",
    points: [
      "Developed JavaScript, Python, C and C++ projects for over 70 clients.",
      "Provided efficient and tailored solutions while meeting deadlines.",
    ],
  },
  {
    title: "Machine Learning Intern",
    companyName: "Center of Excellence in Artificial Intelligence",
    icon: ceai,
    iconBg: "#383E56",
    date: "September 2022 - May 2023",
    points: [
      "Developed and implemented an audio classification model for a government organization.",
      "Contributed to enhanced data analysis capabilities and performed model optimization.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  // Add your professors' testimonials
  {
    testimonial:
      "During his undergraduate studies, Arslan proved himself to be a talented and dedicated student. His academic achievements speak highly of his commitment.",
    name: "Prof. Dr. Arif ur Rehman",
    designation: "Professor",
    company: "Bahria University",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKodT8NgCwEnFRC02GnO4IhYAIXymCWz2DQQ&s", // Replace with actual image or appropriate placeholder
  },
  {
    testimonial:
      "Arslan is intelligent, reliable, and committed. His academic achievements and active involvement speak highly of his dedication to computer science.",
    name: "Saima Jawad",
    designation: "Senior Associate Professor",
    company: "Bahria University",
    image: "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-picture-coming-creative-vector-png-image_40968940.jpg",
  },
  {
    testimonial:
      "Arslan is capable of working independently and has a gentle personality. He is keen to solve problems and is a hard worker.",
    name: "Dr Muhammad Murtaza Khan",
    designation: "Chief Innovation Officer",
    company: "Sybrid Pvt LTD",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEKnwGAXG1-Aw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699861905014?e=2147483647&v=beta&t=nPnig4CL4SgYQkcq40lgQPWp6HZJz18DJmpjHGscsd0",
  },
  {
    testimonial:
      "His attention to detail and problem-solving skills during the development of our machine learning models was exceptional.",
    name: "Research Director",
    designation: "Director",
    company: "Center of Excellence in AI",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  
];

const projects: TProject[] = [
  {
    name: "StockGenie",
    description:
      "AI-powered stock trading web application with financial sentiment analysis (FinBERT) and automated trading features. Built with React, Django, PostgreSQL, Redis, and Celery.",
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
        name: "redis",
        color: "orange-text-gradient",
      },
    ],
    image: stockgenie,
    sourceCodeLink: "https://github.com/arslan-sb/stockgenie",
  },
  {
    name: "Crop Recommendation System",
    description:
      "Machine learning-based system offering personalized crop recommendations based on soil and climate data. Implemented decision trees and random forest algorithms with a Streamlit interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: croprec,
    sourceCodeLink: "https://github.com/arslan-sb/crop-recommendation",
  },
  {
    name: "Resume Analyzer",
    description:
      "NLP-powered application for analyzing CVs using cosine similarity and ML for information extraction. Identifies top candidates based on employer requirements.",
    tags: [
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ml",
        color: "pink-text-gradient",
      },
    ],
    image: resumeanalyzer,
    sourceCodeLink: "https://github.com/arslan-sb/resume-analyzer",
  },
  {
    name: "Global Talk",
    description:
      "Real-time multilingual chat application using Flutter and Python. Integrates Firebase for messaging, Google TTS for speech synthesis, and an NLP-based translation model.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: globaltalk,
    sourceCodeLink: "https://github.com/arslan-sb/global-talk",
  },
  {
    name: "Airbnb Data Analysis",
    description:
      "Performed extensive data cleaning and exploratory analysis on Airbnb listings dataset. Applied ML techniques to predict rental prices based on location, amenities, and seasonal trends.",
    tags: [
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: "data-science",
        color: "green-text-gradient",
      },
      {
        name: "visualization",
        color: "pink-text-gradient",
      },
    ],
    image: airbnbanalysis,
    sourceCodeLink: "https://github.com/arslan-sb/airbnb-analysis",
  },
];

export { services, technologies, experiences, testimonials, projects };
