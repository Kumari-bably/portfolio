import { motion } from "motion/react";
import { Code2, Database, Layout, Smartphone, Server, Palette } from "lucide-react";

const skills = [
  { name: "Frontend Development", Icon: Layout, skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { name: "Backend Development", Icon: Server, skills: ["Node.js", "Express", "Python", "REST APIs"] },
  { name: "Database", Icon: Database, skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { name: "Mobile Development", Icon: Smartphone, skills: ["React Native", "Flutter", "iOS", "Android"] },
  { name: "Languages", Icon: Code2, skills: ["JavaScript", "TypeScript", "Python", "Java"] },
  { name: "Design", Icon: Palette, skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] }
];

export function SkillsSection() {
  return (
    <section className="min-h-screen flex items-center py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 text-slate-900 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Skills & Expertise
          </motion.h2>
          
          <motion.p
            className="text-center text-slate-600 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            A comprehensive toolkit for building modern, scalable applications
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((category, index) => {
              const { Icon } = category;
              return (
                <motion.div
                  key={category.name}
                  className="p-8 bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl shadow-lg border border-slate-200 hover:border-purple-300 transition-all duration-300"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)",
                  }}
                >
                  <motion.div
                    className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {category.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-white rounded-full text-sm text-slate-700 border border-slate-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + skillIndex * 0.05,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#9333ea",
                          color: "#ffffff",
                          borderColor: "#9333ea"
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
