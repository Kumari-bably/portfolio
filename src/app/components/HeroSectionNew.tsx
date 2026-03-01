import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const name = "Kumari Bably";
  const title = "UI/UX & Graphics Designer";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Name with letter animation */}
          <motion.div
            className="mb-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-4">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="inline-block text-white"
                  style={{ marginRight: char === " " ? "0.5rem" : "0" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-violet-400 mb-4">
              {title}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            2nd Year Student at IILM University | Crafting Digital Experiences with Passion & Precision
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold shadow-lg shadow-violet-500/50 magnetic"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 glass-card text-white rounded-full font-semibold border border-violet-500/30 hover:border-violet-500 transition-all magnetic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            {[
              { number: "2nd", label: "Year Student" },
              { number: "IILM", label: "University" },
              { number: "UI/UX", label: "Designer" },
              { number: "Creative", label: "Professional" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                }}
              >
                <div className="text-3xl font-heading font-bold text-violet-400">{stat.number}</div>
                <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
