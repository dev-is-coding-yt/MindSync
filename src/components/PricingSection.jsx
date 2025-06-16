import { StarIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Basic",
    price: "$0",
    description: "Perfect for getting started with MindSync.",
    features: [
      "Unlimited notes",
      "AI summaries",
      "Basic integrations",
      "Community support",
    ],
    buttonText: "Get Started",
    highlight: false,
  },
  {
    title: "Pro",
    price: "$9.99/mo",
    description: "For power users and professionals.",
    features: [
      "Everything in Basic",
      "Advanced integrations",
      "Priority support",
      "Customizable themes",
    ],
    buttonText: "Upgrade Now",
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    description: "Tailored solutions for teams and businesses.",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom onboarding",
      "Enterprise-grade security",
    ],
    buttonText: "Contact Sales",
    highlight: false,
  },
];

const cardVariants = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 20, stiffness: 120 },
  },
};

const PricingSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-12"
        >
          Choose the plan that <span className="text-indigo-500">syncs</span> with you
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map(({ title, price, description, features, buttonText, highlight }, i) => (
            <motion.div
              key={title}
              className={`relative rounded-2xl p-8 border transition-transform duration-300
                ${highlight
                  ? "border-indigo-500/70 bg-indigo-500/10 shadow-lg shadow-indigo-500/20 scale-105"
                  : "border-white/10 bg-white/5 hover:shadow-md hover:shadow-indigo-400/10"
                }
                hover:scale-[1.03]
              `}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              transition={{ delay: i * 0.15 }}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <StarIcon width={12} /> Most Popular
                </div>
              )}

              <h3 className={`text-xl font-semibold mb-2 ${highlight ? "text-white" : "text-indigo-300"}`}>
                {title}
              </h3>

              <p className={`text-3xl font-extrabold mb-4 ${highlight ? "text-indigo-100" : "text-white/90"}`}>
                {price}
              </p>

              <p className="text-gray-400 mb-6">{description}</p>

              <ul className="mb-6 space-y-2 text-left text-gray-300">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-indigo-400 mt-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: highlight
                    ? "0 0 18px rgba(139, 92, 246, 0.6)"
                    : "0 0 12px rgba(139, 92, 246, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 260 }}
                className={`w-full ${
                  highlight ? "bg-indigo-600" : "bg-indigo-500"
                } hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition`}
              >
                {buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
