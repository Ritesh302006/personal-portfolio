import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function ParticleBackground() {
  const [blobs, setBlobs] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);
  const [particles, setParticles] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number; opacity: number }[]>([]);

  useEffect(() => {
    // Large ambient blobs with more movement
    const generatedBlobs = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 300 + 150,
      delay: Math.random() * 2,
      duration: Math.random() * 10 + 10,
    }));
    setBlobs(generatedBlobs);

    // Small floating glowing particles for continuous visual movement
    const generatedParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5, // 5 to 15 seconds
      size: Math.random() * 4 + 1,
    }));
    setParticles(generatedParticles);

    // Static twinkling stars
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // 1px to 3px
      opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
      duration: Math.random() * 3 + 2, // 2s to 5s twinkle
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[var(--bg-color)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-color)] z-10" />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-slate-400 dark:bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [star.opacity * 0.2, star.opacity, star.opacity * 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Ambient moving blobs */}
      {blobs.map((blob) => (
        <motion.div
          key={`blob-${blob.id}`}
          className="absolute rounded-full opacity-[0.4] dark:opacity-30 blur-3xl"
          style={{
            background: blob.id % 2 === 0 
                ? `radial-gradient(circle, var(--color-neon-blue) 0%, transparent 70%)`
                : `radial-gradient(circle, var(--color-neon-purple) 0%, transparent 70%)`,
            width: blob.size,
            height: blob.size,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 500, 0],
            y: [0, (Math.random() - 0.5) * 500, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating glowing particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-neon-blue dark:bg-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.8)] opacity-0"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            bottom: "-10%",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, (Math.random() - 0.5) * 200],
            opacity: [0, 0.8, 1, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
