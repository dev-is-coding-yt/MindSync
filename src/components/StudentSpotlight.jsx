import { motion } from "framer-motion";

const spotlights = [
  {
    name: "Priya Deshmukh",
    role: "UPSC Aspirant",
    quote:
      "MindSync helped me turn 300 pages of notes into a concise 15-page guide. I cracked Prelims with time to spare.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rishabh Jain",
    role: "Design Intern",
    quote:
      "As a design intern, time is everything. MindSync helps me summarize brainstorming sessions like magic.",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Tanvi Mehra",
    role: "Law Student",
    quote:
      "Case law is overwhelming. MindSync trims down dense judgments into crisp briefs. Total game changer.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

const StudentSpotlight = () => {
  return (
    <section className="bg-[#0f172a] py-28 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-bold mb-20"
        >
          <span className="text-indigo-500">Student Spotlight</span>
        </motion.h2>

        <div className="space-y-24">
          {spotlights.map((student, index) => {
            const delay = Math.min(index * 0.1, 0.3); // Cap delay to 0.3s max

            return (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, scale: 0.9, rotateY: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "anticipate",
                  delay,
                }}
                viewport={{ once: true }}
                className={`flex flex-col sm:flex-row ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                } items-center gap-10 bg-[#1e293b] p-10 rounded-3xl border border-indigo-500/10 shadow-2xl`}
              >
                {/* Image */}
                <motion.img
                  src={student.image}
                  alt={student.name}
                  initial={{ rotate: -10, opacity: 0, scale: 0.85 }}
                  whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: delay + 0.1 }}
                  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
                />

                {/* Text */}
                <div className="text-left">
                  <motion.p
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.2, duration: 0.5 }}
                    className="italic text-gray-300 text-lg leading-relaxed mb-4"
                  >
                    “{student.quote}”
                  </motion.p>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: delay + 0.3 }}
                    className="text-white font-semibold text-xl"
                  >
                    {student.name}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: delay + 0.4 }}
                    className="text-gray-400 text-sm"
                  >
                    {student.role}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentSpotlight;
