import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  const skills = [
    { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 90, color: "from-blue-500 to-neon-blue" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
    { name: "Full Stack Development", level: 75, color: "from-neon-purple to-pink-500" },
    { name: "Problem Solving", level: 88, color: "from-green-400 to-emerald-600" },
    { name: "Communication Skills", level: 92, color: "from-purple-400 to-indigo-600" },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="My Skills" subtitle="Technical & Soft Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-neon-cyan font-mono font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                >
                  <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
