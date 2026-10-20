import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { education } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Education = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-12 grid gap-7 md:grid-cols-2">
        {education.map((entry, index) => (
          <motion.div
            key={entry.school}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className="green-pink-gradient rounded-[20px] p-[1px]"
          >
            <div className="bg-tertiary h-full rounded-[20px] p-6">
              <p className="text-secondary text-[14px]">{entry.date}</p>
              <h3 className="mt-2 text-[22px] font-bold text-white">
                {entry.degree}
              </h3>
              <p className="text-[16px] font-semibold text-[#915EFF]">
                {entry.school} · {entry.location}
              </p>
              <ul className="ml-5 mt-4 list-disc space-y-2">
                {entry.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-white-100 pl-1 text-[14px] tracking-wider"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
