import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "UI/UX Design Intern",
    company: "SGCA Pvt Ltd",
    period: "2024 - Present",
    type: "Professional Engagement",
    description: "Working on user interface design, creating wireframes and prototypes for client projects. Collaborating with development teams to implement design systems.",
    Icon: Briefcase,
    stipend: "₹5,000/month",
    highlights: [
      "Designed 10+ responsive web interfaces",
      "Created comprehensive design systems",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    title: "UI/UX & Graphics Design",
    company: "IILM University",
    period: "2023 - 2025 (Expected)",
    type: "Education",
    description: "Pursuing degree with focus on user experience design, visual communication, and digital media. Active participant in design workshops and competitions.",
    Icon: GraduationCap,
    highlights: [
      "2nd Year Student",
      "Focus on Digital Design",
      "Active in Design Community",
    ],
  },
  {
    title: "Freelance Designer",
    company: "Independent Projects",
    period: "2023 - Present",
    type: "Freelance",
    description: "Creating brand identities, social media graphics, and UI designs for various clients. Building a diverse portfolio across multiple design disciplines.",
    Icon: Award,
    highlights: [
      "15+ Client Projects",
      "Brand Identity Design",
      "Social Media Graphics",
    ],
  },
];

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="min-h-screen py-20 bg-slate-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-violet-500/10 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My journey in design and professional growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800">
            <motion.div
              className="w-full bg-gradient-to-b from-violet-500 to-purple-600 origin-top"
              style={{ scaleY }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const { Icon } = exp;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } justify-start`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-slate-900 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      !isLeft ? "md:mr-auto" : ""
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="glass-card rounded-2xl p-6 md:p-8 border-violet-500/20 hover:border-violet-500 transition-all duration-300 magnetic">
                      {/* Icon */}
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4"
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Type Badge */}
                      <span className="inline-block px-3 py-1 bg-violet-500/20 text-violet-400 text-xs font-semibold rounded-full mb-3">
                        {exp.type}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                        {exp.title}
                      </h3>

                      {/* Company & Period */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <p className="text-violet-400 font-semibold">{exp.company}</p>
                        <p className="text-slate-400 text-sm">{exp.period}</p>
                      </div>

                      {/* Stipend (if available) */}
                      {exp.stipend && (
                        <motion.div
                          className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm font-semibold mb-4"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                        >
                          💰 {exp.stipend}
                        </motion.div>
                      )}

                      {/* Description */}
                      <p className="text-slate-400 text-sm mb-4">{exp.description}</p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.div
                            key={hIndex}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.3 + hIndex * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                            <p className="text-slate-300 text-sm">{highlight}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
