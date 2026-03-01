import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-Commerce Redesign",
    category: "UI/UX Design",
    description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzcyMTczNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Figma", "UI Design", "Prototyping"],
    size: "large",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Mobile App Interface",
    category: "Mobile Design",
    description: "Modern fitness tracking app with gamification elements.",
    image: "https://images.unsplash.com/photo-1661246626039-5429b8f7488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcyMjQ2NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile", "UX"],
    size: "medium",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Dashboard Analytics",
    category: "Web Design",
    description: "Data visualization dashboard with clean, modern aesthetics.",
    image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MjI1NzkyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Dashboard", "UI"],
    size: "medium",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Brand Identity",
    category: "Graphics Design",
    description: "Complete brand identity including logo, color palette, and style guide.",
    image: "https://images.unsplash.com/photo-1760670399462-f5e479452c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGxhcHRvcCUyMGNvZGV8ZW58MXx8fHwxNzcyMjcyMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Branding", "Graphics"],
    size: "small",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "SaaS Landing Page",
    category: "Web Design",
    description: "High-converting landing page with modern design principles.",
    image: "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzIxODk5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Web", "Landing"],
    size: "small",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Social Media Kit",
    category: "Graphics Design",
    description: "Consistent social media templates for various platforms.",
    image: "https://images.unsplash.com/photo-1699570044128-b61ef113b72e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eXxlbnwxfHx8fDE3NzIyNTUxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Graphics", "Social"],
    size: "medium",
    color: "from-purple-500 to-indigo-600",
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
    },
  },
};

export function ProjectsSectionNew() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-slate-900">
      <div className="container mx-auto px-6">
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
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent design work and creative explorations
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => {
            const gridClass =
              project.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : project.size === "medium"
                ? "md:col-span-1 md:row-span-2"
                : "md:col-span-1";

            return (
              <motion.div
                key={project.title}
                className={`${gridClass} group relative overflow-hidden rounded-3xl glass-card border-violet-500/10 hover:border-violet-500 transition-all duration-500 magnetic`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
              >
                {/* Image */}
                <div className="relative h-full min-h-[300px] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Category Badge */}
                    <motion.span
                      className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {project.category}
                    </motion.span>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-200 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-2 py-1 bg-white/5 backdrop-blur-sm text-slate-300 text-xs rounded-lg border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg text-sm font-semibold border border-white/20 magnetic"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View project"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
