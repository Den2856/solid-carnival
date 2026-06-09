import { motion } from "motion/react";

export default function Hero({ title }: { title?: string }) {

  title = title || "ZEST";

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: {
      y: "100%",
      opacity: 0,
      filter: "blur(6px)",
    },
    show: {
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="start" className="relative h-[96.5vh] rounded-[15px] overflow-hidden">
      <img
        src="./hero.png"
        alt="Zest lemon drink"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="mt-8 flex max-w-4xl flex-col items-center text-center">
          <motion.h1
            className="text-white text-[72px] leading-none font-black uppercase sm:text-[110px] md:text-[150px]"
            variants={container}
            initial="hidden"
            animate="show"
            aria-label={title}
          >
            {title.split("").map((char, index) => (
              <span key={index} className="inline-block overflow-hidden align-top">
                <motion.span
                  className="inline-block"
                  variants={letter} 
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-3xl text-center text-[16px] font-semibold text-white sm:text-[22px] md:text-[28px]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Crafting bold lemon flavors with a fresh twist in every bite!
          </motion.p>
        </div>
      </div>
    </section>
  );
}