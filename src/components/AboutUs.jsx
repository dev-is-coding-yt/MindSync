import { HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="relative px-4 sm:px-6 py-24 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-extrabold mb-8"
        >
          About <span className="text-indigo-500">MindSync</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6"
        >
          We're a team of curious builders, thinkers, and tinkerers who believe your ideas
          deserve more than dusty notebooks or scattered docs. MindSync exists to supercharge
          the way you think — using AI to help you capture, organize, and expand thoughts
          effortlessly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-400 text-base sm:text-lg leading"
        >
          Built with{" "}
          <HeartIcon
            width={22}
            className="inline text-red-500 mr-1 -mb-[1px]"
            aria-hidden="true"
          />
          for creatives, researchers, and lifelong learners. We're committed to privacy-first
          design — always asking: how can note-taking feel more like thinking?
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
