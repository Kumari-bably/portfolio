import { motion } from "motion/react";
import { Palette, Figma, Layers, Zap, Code2, Sparkles } from "lucide-react";

const skills = [
  {
    name: "UI/UX Design",
    Icon: Palette,
    description: "Creating intuitive and beautiful user interfaces",
    color: "from-violet-500 to-purple-600",
    size: "large",
  },
  {
    name: "Figma",
    Icon: Figma,
    description: "Expert in design systems",
    color: "from-pink-500 to-rose-600",
    size: "small",
  },
  {
    name: "Graphics Design",
    Icon: Layers,
    description: "Visual storytelling",
    color: "from-blue-500 to-cyan-600",
    size: "small",
  },
  {
    name: "Prototyping",
    Icon: Zap,
    description: "Interactive prototypes & animations",
    color: "from-amber-500 to-orange-600",
    size: "medium",
  },
  {
    name: "Web Design",
    Icon: Code2,
    description: "Responsive & modern layouts",
    color: "from-green-500 to-emerald-600",
    size: "medium",
  },
  {
    name: "Brand Identity",
    Icon: Sparkles,
    description: "Logo design & branding",
    color: "from-purple-500 to-indigo-600",
    size: "large",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export function SkillsSectionNew() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Combining creativity with technical precision
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => {
            const { Icon } = skill;
            const gridClass =
              skill.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : skill.size === "medium"
                ? "md:col-span-2"
                : "md:col-span-1";

            return (
              <motion.div
                key={skill.name}
                className={`${gridClass} group relative overflow-hidden rounded-3xl glass-card p-8 hover:border-violet-500 transition-all duration-500 magnetic`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{skill.description}</p>
                  </div>

                  {/* Decorative element for large cards */}
                  {skill.size === "large" && (
                    <motion.div
                      className="mt-8 flex items-center gap-2 text-violet-400 text-sm font-semibold"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Core Competency</span>
                    </motion.div>
                  )}
                </div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
