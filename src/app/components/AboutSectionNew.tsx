import { motion } from "motion/react";
import { User, Heart, Target, Zap } from "lucide-react";

const features = [
  {
    icon: User,
    title: "About Me",
    description: "2nd year UI/UX & Graphics Design student at IILM University with a passion for creating beautiful, functional digital experiences.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "My Passion",
    description: "I love transforming complex problems into simple, intuitive designs that users genuinely enjoy interacting with.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Target,
    title: "My Focus",
    description: "Currently focused on mastering user research, interaction design, and creating accessible digital experiences.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Zap,
    title: "My Approach",
    description: "Combining creativity with data-driven insights to deliver designs that not only look great but also drive results.",
    color: "from-amber-500 to-orange-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function AboutSectionNew() {
  return (
    <section id="about" className="min-h-screen py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <motion.div
            className="w-full h-full bg-gradient-radial from-violet-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

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
            About Me
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate designer dedicated to creating meaningful digital experiences
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Bio Card */}
          <motion.div
            className="glass-card rounded-3xl p-8 md:p-12 mb-8 border-violet-500/10 magnetic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.01, y: -5 }}
          >
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-violet-400 font-semibold">Kumari Bably</span>, 
                a 2nd-year UI/UX & Graphics Design student at{" "}
                <span className="text-violet-400 font-semibold">IILM University</span>. 
                My journey in design began with a fascination for how digital products can shape user behavior and create delightful experiences.
              </p>
              <p>
                Currently, I'm gaining professional experience as a UI/UX Design Intern at{" "}
                <span className="text-violet-400 font-semibold">SGCA Pvt Ltd</span>, 
                where I work on real-world projects that challenge me to grow as a designer. 
                I've had the opportunity to design responsive web interfaces, create comprehensive design systems, 
                and collaborate with talented developers and stakeholders.
              </p>
              <p>
                When I'm not designing, you'll find me exploring the latest design trends on Dribbble, 
                practicing my skills on LeetCode and GeeksforGeeks, or contributing to design communities. 
                I believe in continuous learning and always strive to push the boundaries of what's possible in digital design.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="glass-card rounded-2xl p-6 border-violet-500/10 hover:border-violet-500 transition-all duration-300 magnetic"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
