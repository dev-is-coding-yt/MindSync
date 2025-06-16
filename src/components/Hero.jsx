import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative px-4 sm:px-8 md:px-12 py-20 sm:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none z-0" />

      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600 opacity-20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-0 w-60 h-60 sm:w-72 sm:h-72 bg-purple-500 opacity-20 rounded-full blur-2xl z-0"
      />

      <div className="relative z-10 max-w-4xl md:max-w-6xl mx-auto flex flex-col items-center text-center px-2 sm:px-0">

        <motion.h1
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
        >
          Supercharge Your <span className="text-indigo-500">Thinking</span>
        </motion.h1>

        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-2xl mb-8 px-2"
        >
          Meet <strong>MindSync</strong> — your AI-powered note assistant. Organize, summarize, and never miss a thought again.
        </motion.p>

        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition px-6 py-3 rounded-md font-semibold shadow-lg"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border border-gray-500 hover:border-indigo-400 text-gray-200 px-6 py-3 rounded-md font-medium cursor-pointer transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
