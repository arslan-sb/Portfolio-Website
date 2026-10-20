// import React from "react";
import { github, linkedin } from "../../assets";
import { config } from "../../constants/config";
import { motion } from "framer-motion";

// Define social media links
const socialLinks = [
  {
    name: "GitHub",
    icon: github,
    url: "https://github.com/arslan-sb",
    isText: false,
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/arslanshaukatsb/",
    isText: false,
  },
  // {
  //   name: "Twitter",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
  //   url: "https://twitter.com/arslanshaukatsb",
  //   isText: false,
  // },
  // {
  //   name: "Kaggle",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg",
  //   url: "https://www.kaggle.com/arslanchaudhary",
  //   isText: false,
  // },
  {
    name: "Email",
    text: "@",
    url: `mailto:${config.html.email}`,
    isText: true,
  },
  {
    name: "CV",
    text: "CV",
    url: "/CV.pdf",
    isText: true,
  },
];

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden flex-col gap-4 sm:flex"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex justify-center items-center bg-tertiary hover:bg-secondary transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={link.name}
        >
          {link.isText ? (
            <span className="text-white text-xs font-bold">
              {link.text}
            </span>
          ) : (
            <img 
              src={link.icon} 
              alt={link.name} 
              className="w-5 h-5 object-contain"
            />
          )}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar; 