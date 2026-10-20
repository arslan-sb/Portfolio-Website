import { motion } from "framer-motion";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies, skillGroups } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.tech} />

      <div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="bg-tertiary rounded-2xl p-5"
          >
            <h3 className="text-[18px] font-bold text-white">{group.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-black-200 text-secondary rounded-lg px-2 py-1 text-[13px]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
