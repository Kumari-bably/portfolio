import { motion } from "motion/react";
import { Github, Linkedin, Code2 } from "lucide-react";

export function HeroSection() {
  const name = "Kumari Bably";
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Letter-by-letter animation for name */}
          <div className="mb-6 overflow-hidden">
            <h1 className="text-6xl md:text-8xl font-bold mb-2">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block"
                  style={{ marginRight: char === " " ? "0.5rem" : "0" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </div>
          
          {/* Slide-in subtext */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <p className="text-xl md:text-2xl text-purple-200 mb-4">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-purple-300 max-w-2xl mx-auto">
              Crafting beautiful, functional web experiences with modern technologies
            </p>
          </motion.div>
          
          {/* Social icons with bounce effect */}
          <motion.div
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {[
              { Icon: Github, href: "#", label: "GitHub", color: "hover:text-purple-400" },
              { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
              { Icon: Code2, href: "#", label: "LeetCode", color: "hover:text-yellow-400" }
            ].map(({ Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className={`p-4 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 ${color}`}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
