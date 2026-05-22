import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";
import { GraduationCap, School } from "lucide-react";

export function Education() {
  const journey = [
    {
      title: "B.Tech Computer Science Engineering",
      subtitle: "JMIT College",
      date: "Current (1st Year)",
      icon: <GraduationCap className="w-6 h-6" />,
      desc: "Pursuing bachelor's degree with a focus on core computer science subjects, algorithms, and practical software development."
    },
    {
      title: "Senior Secondary Education (PCM)",
      subtitle: "SD Sen. Sec. School",
      date: "Completed",
      icon: <School className="w-6 h-6" />,
      desc: "Graduated with 90.2%. Built a strong foundation in Physics, Chemistry, and Mathematics."
    },
    {
      title: "Secondary Education",
      subtitle: "New Rama Krishna Public School",
      date: "Completed",
      icon: <School className="w-6 h-6" />,
      desc: "Graduated with exceptional performance, scoring 92.2%."
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative bg-white/5">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Education" subtitle="My Academic Journey" />
        
        <div className="relative border-l-2 border-neon-blue/30 ml-3 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
          {journey.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center justify-between w-full`}
            >
              {/* Marker */}
              <div className="absolute left-[-41px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full glass border-2 border-neon-blue bg-white dark:bg-black z-10 flex items-center justify-center text-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                {item.icon}
              </div>

              {/* Content */}
              <div className="w-full pl-8 md:pl-0 md:w-5/12">
                <div className={`glass p-6 rounded-2xl border-l-4 ${idx % 2 === 0 ? 'border-neon-blue' : 'border-neon-purple'} hover:scale-105 transition-transform duration-300`}>
                  <span className="text-sm font-medium text-neon-blue dark:text-neon-cyan mb-2 block">{item.date}</span>
                  <h3 className="text-xl font-bold font-display mb-1">{item.title}</h3>
                  <h4 className="text-slate-700 dark:text-gray-300 font-medium mb-3">{item.subtitle}</h4>
                  <p className="text-slate-800 dark:text-gray-300 text-sm leading-relaxed font-semibold">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
