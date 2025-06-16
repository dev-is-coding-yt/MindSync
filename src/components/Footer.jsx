import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Updates"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Community", "Developers", "API Docs"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  { icon: <FaGithub />, href: "https://github.com" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-20 pb-12 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between gap-16 sm:gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Brand & Desc */}
          <motion.div variants={itemVariants} className="sm:w-1/4">
            <h2 className="text-3xl font-bold text-indigo-500 mb-4 select-text">
              MindSync
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Supercharge your learning with AI-powered summaries and note
              organization. Trusted by thousands worldwide.
            </p>

            {/* Socials */}
            <motion.div
              className="flex mt-6 space-x-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {socialIcons.map(({ icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, color: "#6366f1" }}
                  className="text-gray-400 hover:text-indigo-500 text-xl transition-all"
                  aria-label="social icon"
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:w-3/4">
            {footerLinks.map(({ title, links }, i) => (
              <motion.div key={i} variants={itemVariants}>
                <h3 className="text-indigo-500 font-semibold text-sm mb-4 select-text uppercase tracking-wide">
                  {title}
                </h3>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-2 text-sm"
                >
                  {links.map((link, idx) => (
                    <motion.li key={idx} variants={itemVariants}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-indigo-400 transition duration-200"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="my-12 border-t border-indigo-800 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-500 text-sm select-text"
        >
          &copy; {new Date().getFullYear()} MindSync. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
