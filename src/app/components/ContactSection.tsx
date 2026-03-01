import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
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
            Let's Work Together
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
            Have a project in mind? Let's create something amazing together
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                <p className="text-slate-600 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>
              
              {[
                { Icon: Mail, label: "Email", value: "kumari.bably@example.com", delay: 0.5 },
                { Icon: Phone, label: "Phone", value: "+1 (555) 123-4567", delay: 0.6 },
                { Icon: MapPin, label: "Location", value: "San Francisco, CA", delay: 0.7 }
              ].map(({ Icon, label, value, delay }) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      backgroundColor: "#9333ea",
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5 text-purple-600" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-slate-900">{label}</div>
                    <div className="text-slate-600">{value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Contact Form */}
            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {[
                { label: "Name", type: "text", placeholder: "Your name", delay: 0.5 },
                { label: "Email", type: "email", placeholder: "your.email@example.com", delay: 0.6 }
              ].map(({ label, type, placeholder, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {label}
                  </label>
                  <motion.input
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <motion.textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
