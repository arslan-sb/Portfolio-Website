import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`pointer-events-none absolute inset-0 top-[120px] z-10 mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <p className="text-secondary mt-4 max-w-2xl text-[14px] sm:text-[16px]">
            {config.hero.badge}
          </p>
          <div className="pointer-events-auto mt-6 flex flex-wrap gap-4">
            <a
              href={config.hero.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#915EFF] px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border-secondary rounded-xl border px-6 py-3 font-bold text-white transition-colors hover:bg-tertiary"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
