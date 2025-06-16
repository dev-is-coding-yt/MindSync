import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  BookOpenIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import CountUp from "react-countup";

const stats = [
  {
    icon: <UserGroupIcon className="w-8 h-8 text-indigo-400" />,
    label: "Students Helped",
    value: 3000000,
    suffix: "+",
  },
  {
    icon: <ClockIcon className="w-8 h-8 text-indigo-400" />,
    label: "Hours Saved",
    value: 10000000,
    suffix: "+",
  },
  {
    icon: <ChartBarIcon className="w-8 h-8 text-indigo-400" />,
    label: "Summary Satisfaction",
    value: 98,
    suffix: "%",
  },
  {
    icon: <BookOpenIcon className="w-8 h-8 text-indigo-400" />,
    label: "Notes Processed",
    value: 2500000,
    suffix: "+",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-indigo-400" />,
    label: "Mobile Users",
    value: 2000000,
    suffix: "+",
  },
  {
    icon: <AcademicCapIcon className="w-8 h-8 text-indigo-400" />,
    label: "Institutions Reached",
    value: 100,
    suffix: "K",
  },
];

const ImpactStats = () => {
  return (
    <section className="px-6 py-28 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-14"
        >
          Our <span className="text-indigo-500">Impact</span> So Far
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-[#1e293b] p-8 rounded-2xl border border-indigo-500/10 shadow-xl"
            >
              {stat.icon}
              <h3 className="text-3xl font-semibold mt-4">
                <CountUp
                  end={stat.value}
                  duration={2}
                  separator=","
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyDelay={100}
                />
              </h3>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
