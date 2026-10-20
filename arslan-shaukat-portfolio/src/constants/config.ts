type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
    badge: string;
    cv: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    education: TSection;
    tech: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Arslan Shaukat — Portfolio",
    fullName: "Arslan Shaukat",
    email: "muhammad_arslan.shaukat@mailbox.tu-dresden.de",
  },
  hero: {
    name: "Arslan Shaukat",
    p: [
      "I build backend systems and AI applications",
      "that hold up once real users depend on them.",
    ],
    badge:
      "MSc Computer Science @ TU Dresden · Open to Werkstudent roles, internships & thesis collaborations",
    cv: "/CV.pdf",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    content:
      "Based in Dresden and available now: up to 20 h/week during the semester, full-time in semester breaks. Student residence permit (§ 16b AufenthG), no sponsorship needed.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I build full-stack applications and then run them. For eighteen months
      I owned the production platforms of a medical alumni association, working week to
      week with their administration team to turn how the organisation actually operates
      into software, from the PostgreSQL schema up to the AWS infrastructure underneath.
      Before that I built a RAG assistant and secure data tooling in Sybrid's innovation
      division, and at hackathons I build LLM systems on MCP servers and vector stores,
      not only API calls. I'm now studying for an MSc in Computer Science at TU Dresden, with a
      focus on machine learning, high performance computing and system architecture.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    education: {
      p: "Where I studied",
      h2: "Education.",
    },
    tech: {
      p: "What I work with",
      h2: "Skills.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Selected work",
      h2: "Projects.",
      content: `A selection of things I've built recently, from agentic LLM backends and
      offline speech pipelines to an operating system that boots on bare metal. Each card
      links to the source code or a live demo.`,
    },
  },
};
