import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";
import { MapPin, Phone, Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact Me" subtitle="Get In Touch" />
        
        <div className="flex flex-col gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8 bg-white/5 p-8 rounded-3xl glass text-center sm:text-left"
          >
            <h3 className="text-3xl font-display font-bold mb-6 text-neon-blue">Let's Talk</h3>
            <p className="text-slate-800 dark:text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto sm:mx-0 font-semibold">
              I'm always open to discussing web development work, new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6 flex flex-col sm:flex-row sm:space-y-0 gap-6">
              <div className="flex-1 flex flex-col items-center sm:items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-purple">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-gray-300">Email</p>
                  <p className="font-bold text-slate-900 dark:text-white hover:text-neon-blue dark:hover:text-neon-cyan transition-colors truncate">
                    <a href="mailto:raniaarti820@gmail.com">raniaarti820@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center sm:items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-purple">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-gray-300">Phone</p>
                  <p className="font-bold">8683838726</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center sm:items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-purple">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-gray-300">Location</p>
                  <p className="font-bold">JMIT College, Haryana</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center sm:items-start">
              <p className="text-sm font-semibold text-slate-800 dark:text-gray-300 mb-4">Follow Me</p>
              <div className="flex gap-4">
                {[
                  { icon: <Github />, href: "https://github.com/Ritesh302006" },
                  { icon: <Linkedin />, href: "https://www.linkedin.com/in/ritesh-kumar-b88032383/" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-neon-blue hover:text-black hover:-translate-y-1 transition-all duration-300 text-slate-700 dark:text-gray-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
