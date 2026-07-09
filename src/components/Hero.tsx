import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Download, ChevronDown } from "lucide-react";

const words = ["Full Stack Developer", "Tech Enthusiast", "Student"];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const txt = words[currentWordIndex];
      
      if (!isDeleting && currentText === txt) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((i) => (i + 1) % words.length);
      } else {
        setCurrentText((prev) =>
          isDeleting ? txt.substring(0, prev.length - 1) : txt.substring(0, prev.length + 1)
        );
      }
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm text-sm font-medium mb-6 text-neon-blue dark:text-neon-cyan uppercase tracking-wider"
          >
            Welcome to my portfolio
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-slate-900 dark:text-white">
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple leading-tight">
              Ritesh
            </span>
          </h1>
          <div className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-gray-200 mb-8 h-10">
            I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{currentText}</span>
            <span className="text-neon-purple animate-pulse ml-1">|</span>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="#contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 box-glow">
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden box-glow p-2 glass">
               <img 
                 src="https://media.licdn.com/dms/image/v2/D4D03AQHMrnojHkP6cw/profile-displayphoto-crop_800_800/B4DZ8XtF23IIAQ-/0/1782809125911?e=1785369600&v=beta&t=9hAe8pAWh1j3bqtPJga_w3ITuibGaHyA6ilLbNkleBE" 
                 alt="Ritesh" 
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover rounded-full transition-all duration-500"
               />
            </div>
          </div>
        </motion.div>

      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8 text-slate-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
}
