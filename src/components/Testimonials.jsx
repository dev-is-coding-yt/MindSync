import { motion } from "framer-motion";
import { ChatBubbleBottomCenterTextIcon, HeartIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Aarav Patel",
    title: "Computer Science Student",
    quote:
      "MindSync completely changed how I take notes during lectures. It’s like having a study buddy with superpowers!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ishita Roy",
    title: "Design Intern @ Startup",
    quote:
      "Summarizing messy thoughts into clear takeaways? Yes please. MindSync saves me hours every week.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ravi Menon",
    title: "UPSC Aspirant",
    quote:
      "I use it daily for revision notes. The AI summarization is genuinely useful — not just a gimmick.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-20 flex justify-center items-center gap-2"
        >
            What People{" "}
            <HeartIcon className="w-10 h-14 text-red-500 inline-block" /> About Us
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: -0.5,
                transition: { duration: 0.15, ease: "easeOut" }, 
              }}
              transition={{
                duration: 0.1, 
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#1e293b] relative w-full sm:w-[300px] p-6 pt-12 rounded-2xl shadow-xl border border-indigo-500/10 hover:shadow-indigo-500/20 transition-all"
            >

              {/* Chat icon */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="absolute top-4 left-4"
              >
                <ChatBubbleBottomCenterTextIcon className="w-7 h-7 text-indigo-400" />
              </motion.div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="text-gray-300 text-[15px] leading-relaxed italic mb-6"
              >
                “{t.quote}”
              </motion.p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={t.image}
                  alt={t.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.6,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                    className="font-semibold text-white"
                  >
                    {t.name}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.75 }}
                    viewport={{ once: true }}
                    className="text-xs text-gray-400"
                  >
                    {t.title}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
