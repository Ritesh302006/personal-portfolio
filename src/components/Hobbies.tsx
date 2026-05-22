import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";
import { Globe2, Code, Gamepad2 } from "lucide-react"; // Using Gamepad2/Globe2 as placeholders for Cricket/Internet

export function Hobbies() {
  const hobbies = [
    {
      title: "Exploring the Internet",
      icon: <Globe2 className="w-10 h-10" />,
      desc: "Browsing forums, reading tech blogs, and discovering new communities online.",
      bgColor: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Learning New Tech",
      icon: <Code className="w-10 h-10" />,
      desc: "Experimenting with new web frameworks, libraries, and best practices.",
      bgColor: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-400"
    },
    {
      title: "Cricket",
      icon: <Gamepad2 className="w-10 h-10" />, // Using Gamepad for general recreation as Lucide lacks a cricket bat
      desc: "Playing and watching cricket to stay energetic, focused, and team-oriented.",
      bgColor: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-400"
    }
  ];

  return (
    <section id="hobbies" className="py-24 px-6 relative bg-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Hobbies & Interests" subtitle="What I Do For Fun" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass p-8 rounded-3xl overflow-hidden hover:border-white/30 transition-colors relative group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${hobby.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-2xl bg-white/5 ${hobby.iconColor}`}>
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{hobby.title}</h3>
                <p className="text-slate-800 dark:text-gray-300 text-sm leading-relaxed font-semibold">{hobby.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
