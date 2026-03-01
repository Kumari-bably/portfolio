import { motion } from "motion/react";
import { Github, Linkedin, Code2, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    username: "@kumaribably",
    icon: Github,
    href: "#",
    color: "from-slate-600 to-slate-800",
    hoverColor: "hover:border-slate-400",
    size: "large",
  },
  {
    name: "LinkedIn",
    username: "Kumari Bably",
    icon: Linkedin,
    href: "#",
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:border-blue-400",
    size: "large",
  },
  {
    name: "LeetCode",
    username: "@kumaribably",
    icon: Code2,
    href: "#",
    color: "from-amber-600 to-orange-700",
    hoverColor: "hover:border-amber-400",
    size: "medium",
  },
  {
    name: "GFG",
    username: "GeeksforGeeks",
    icon: Code2,
    href: "#",
    color: "from-green-600 to-emerald-700",
    hoverColor: "hover:border-green-400",
    size: "medium",
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

export function ContactSectionNew() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            Let's Connect
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Got a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Links Bento Grid */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const gridClass = social.size === "large" ? "col-span-2" : "col-span-1";

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`${gridClass} glass-card rounded-2xl p-6 border-violet-500/10 ${social.hoverColor} transition-all duration-300 group magnetic`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                    }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white mb-1">
                      {social.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{social.username}</p>

                    {/* Glow effect */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10 rounded-2xl`}
                    />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "kumari7488bably@gmail.com",
                  color: "from-violet-500 to-purple-600",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "IILM University, India",
                  color: "from-blue-500 to-cyan-600",
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.label}
                    className="glass-card rounded-2xl p-6 border-violet-500/10 hover:border-violet-500 transition-all duration-300 magnetic"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{contact.label}</p>
                        <p className="text-white font-semibold">{contact.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8 border-violet-500/10 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                Name
              </label>
              <motion.input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                placeholder="Your name"
                whileFocus={{ scale: 1.01 }}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                Email
              </label>
              <motion.input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                placeholder="your.email@example.com"
                whileFocus={{ scale: 1.01 }}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                placeholder="Tell me about your project..."
                whileFocus={{ scale: 1.01 }}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl font-heading font-bold flex items-center justify-center gap-2 shadow-lg shadow-violet-500/30 magnetic"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
