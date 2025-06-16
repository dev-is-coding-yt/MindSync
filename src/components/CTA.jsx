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

const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-28 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-6"
        >
          Ready to Make Your <span className="text-indigo-500">Mind Sync?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-10 text-lg sm:text-xl max-w-xl mx-auto"
        >
          Join thousands of students and professionals who have transformed their learning with MindSync. Summarize smarter, save time, and study better.
        </motion.p>
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition px-8 py-4 rounded-md font-semibold shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
