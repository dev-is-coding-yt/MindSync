import {
  SparklesIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

// Updated features array
const features = [
  {
    icon: <SparklesIcon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300" />,
    title: "AI Summaries",
    desc: "MindSync instantly distills your notes into clear, concise takeaways powered by smart algorithms.",
    span: "md:col-span-2",
  },
  {
    icon: <BoltIcon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300" />,
    title: "Real-Time Sync",
    desc: "Notes update live across devices. No refreshes. No lag. Just smooth, instant changes.",
  },
  {
    icon: <AdjustmentsHorizontalIcon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300" />,
    title: "Personalized Workflow",
    desc: "Organize notes your way — templates, custom folders, and auto-tagging designed around you.",
  },
  {
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300" />,
    title: "AI-Powered Suggestions",
    desc: "MindSync intelligently recommends edits, categories, and expansions as you type.",
  },
  {
    icon: <LightBulbIcon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300" />,
    title: "Thought Expansion",
    desc: "Turn quick jots into brilliant insights. Let AI help expand, clarify, and refine your ideas.",
  },
  {
    icon: <CpuChipIcon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300" />,
    title: "Offline Capabilities",
    desc: "Even without internet, your core features work seamlessly — with auto-sync once you’re back online.",
    span: "md:col-span-2",
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300" />,
    title: "Privacy First",
    desc: "Your thoughts stay yours. Everything is encrypted, and nothing is ever shared without your permission.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  return (
    <section className="relative px-4 sm:px-6 py-20 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-extrabold mb-14 tracking-tight"
        >
          Why Choose <span className="text-indigo-500">MindSync</span>?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr gap-6 text-left"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group ${feature.span || ""} flex flex-col justify-center bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div className="flex justify-start items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
