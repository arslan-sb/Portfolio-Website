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
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Arslan Shaukat — Portfolio",
    fullName: "Arslan Shaukat",
    email: "arslanshaukat009@gmail.com",
  },
  hero: {
    name: "Arslan Shaukat",
    p: ["I develop AI solutions and", "backend systems for robust applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
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
      content: `I'm a skilled backend and AI developer with expertise in Python, Django, FastAPI, 
      and machine learning frameworks like PyTorch and TensorFlow. I specialize in building 
      robust backend systems and AI solutions that solve real-world problems. With experience 
      in image and data processing, NLP, and full-stack development, I can create efficient, scalable 
      solutions tailored to your specific needs. Let's collaborate to bring innovative ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My projects",
      h2: "Portfolio.",
      content: `The following projects showcase my skills in backend development, AI, and 
      machine learning. Each project demonstrates my ability to solve complex problems, 
      work with cutting-edge technologies, and deliver robust, efficient solutions. From 
      AI-powered applications to scalable backend systems, my work reflects both technical 
      expertise and practical implementation.`,
    },
  },
};
