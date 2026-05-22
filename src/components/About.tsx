import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";
import { Code2, Compass, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const cards = [
    { icon: <Code2 />, title: "Developer", desc: "Passionate about building scalable applications." },
    { icon: <Compass />, title: "Explorer", desc: "Constantly learning new technologies and frameworks." },
    { icon: <Lightbulb />, title: "Innovator", desc: "Finding creative solutions to complex problems." },
    { icon: <Rocket />, title: "Student", desc: "B.Tech CSE student focused on growth." }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" subtitle="My Introduction" />
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 text-slate-800 dark:text-gray-200 text-lg leading-relaxed font-semibold"
          >
            <p>
              Hello! I am <strong className="text-neon-blue dark:text-neon-cyan">Ritesh</strong>, a passionate <strong className="text-slate-900 dark:text-white">Full Stack Developer</strong> and tech enthusiast. Currently pursuing my B.Tech in Computer Science Engineering at <strong className="text-neon-blue dark:text-neon-cyan">JMIT College (1st Year)</strong>.
            </p>
            <p>
              My journey in tech is driven by an insatiable curiosity and a love for innovation. I enjoy bridging the gap between engineering and design—combining technical knowledge with a keen eye for design to create beautiful, responsive, and functional web experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring the vast depths of the internet to discover new tech trends, playing cricket to stay active, or brainstorming the next big idea.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-2 gap-6"
          >
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-neon-purple/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-blue">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold font-display">{card.title}</h3>
                <p className="text-sm text-slate-800 dark:text-gray-300 font-semibold">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
