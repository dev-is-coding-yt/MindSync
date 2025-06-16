import { motion } from "framer-motion";
import {
  PencilIcon,
  SparklesIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";

const steps = [
  {
    title: "Capture Ideas Instantly",
    desc: "Start typing raw thoughts, lecture notes, or creative sparks — MindSync handles the rest.",
    icon: <PencilIcon className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "AI Organizes Everything",
    desc: "MindSync restructures your content into clean summaries, categorized neatly.",
    icon: <SparklesIcon className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Export & Share Easily",
    desc: "Download as PDF, sync to Google Docs, or just copy into Notion — you're done.",
    icon: <ArrowDownTrayIcon className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Organize Notes",
    desc: "Organize topics with AI intelligence — powered by MindSync.",
    icon: <ArrowDownTrayIcon className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Merge Notes",
    desc: "Merge topics with AI intelligence — powered by MindSync.",
    icon: <SparklesIcon className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Capture Notes",
    desc: "Capture notes into powerful insights — powered by MindSync.",
    icon: <PencilIcon className="w-10 h-10 text-indigo-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-bold text-center mb-16"
        >
          How It <span className="text-indigo-500">Works</span>
        </motion.h2>

        <div className="space-y-16 sm:space-y-20 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#1e293b] p-5 sm:p-6 rounded-xl shadow-lg flex-shrink-0"
                >
                  {step.icon}
                </motion.div>

                <div
                  className={`max-w-md text-center ${
                    index % 2 === 1 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{step.desc}</p>
                </div>
              </motion.div>

              {/* Connector line between steps on mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden h-px bg-gray-700 w-2/3 mx-auto my-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
