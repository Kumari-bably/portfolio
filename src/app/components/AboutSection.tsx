import { motion } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  
  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className="space-y-6 text-lg text-slate-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <p>
              Hello! I'm Kumari Bably, a passionate Full Stack Developer with a keen eye for design 
              and a love for creating seamless user experiences. With expertise in modern web technologies, 
              I transform ideas into elegant, performant applications.
            </p>
            
            <p>
              My journey in web development started with a curiosity about how things work on the internet, 
              and has evolved into a professional career focused on building scalable, accessible, and 
              beautiful web applications.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring the latest design trends, contributing to 
              open-source projects, or solving algorithmic challenges on LeetCode to sharpen my 
              problem-solving skills.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "500+", label: "LeetCode Problems" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div className="text-3xl font-bold text-purple-600">{stat.number}</div>
                <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
