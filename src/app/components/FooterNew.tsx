import { motion } from "motion/react";
import { Heart, Github, Linkedin, Code2 } from "lucide-react";

export function FooterNew() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-slate-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Code2, href: "#", label: "LeetCode", color: "hover:text-amber-400" },
    { icon: Code2, href: "#", label: "GFG", color: "hover:text-green-400" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          {/* Logo & Description */}
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl font-heading font-bold text-white mb-2"
              whileHover={{ scale: 1.05 }}
            >
              KB<span className="text-violet-500">.</span>
            </motion.h3>
            <p className="text-slate-400 text-sm">
              UI/UX & Graphics Designer crafting delightful digital experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 transition-all magnetic ${social.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <motion.div
            className="text-center pt-8 border-t border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-2">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </motion.div>
              <span>by Kumari Bably</span>
            </div>
            <p className="text-slate-500 text-xs">
              © {currentYear} Kumari Bably. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
