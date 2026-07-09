import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";
import { Trophy, Medal, HeartHandshake, Award, Users, Cloud } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "1st Place Winner",
      subtitle: "Science Quiz Competition (District Level)",
      icon: <Trophy className="w-8 h-8" />,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    },
    {
      title: "Olympiad Winner",
      subtitle: "Humanity Olympiad",
      icon: <Award className="w-8 h-8" />,
      color: "text-neon-blue",
      bgColor: "bg-neon-blue/10"
    },
    {
      title: "2nd Place",
      subtitle: "Technovanza Competition, JMIT",
      icon: <Medal className="w-8 h-8" />,
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10"
    },
    {
      title: "NSS Volunteer",
      subtitle: "National Service Scheme",
      icon: <HeartHandshake className="w-8 h-8" />,
      color: "text-red-400",
      bgColor: "bg-red-400/10"
    },
    {
      title: "Campus Leader",
      subtitle: "GeeksforGeeks",
      icon: <Users className="w-8 h-8" />,
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      title: "Group Leader",
      subtitle: "AWS Student Builder",
      icon: <Cloud className="w-8 h-8" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative bg-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Achievements" subtitle="Milestones & Recognitions" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl text-center group cursor-default"
            >
              <div className={`w-20 h-20 mx-auto rounded-full ${item.bgColor} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
              <p className="text-slate-800 dark:text-gray-300 text-sm font-semibold">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
