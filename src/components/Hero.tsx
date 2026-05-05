"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2 },
  },
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cycleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const heroImages = [
    "/MyImage.png",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
  ];

  useEffect(() => {
    return () => {
      if (cycleIntervalRef.current) {
        clearInterval(cycleIntervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    cycleIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 1500);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (cycleIntervalRef.current) {
      clearInterval(cycleIntervalRef.current);
    }
    setCurrentImageIndex(0);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-24 overflow-hidden rounded-b-[3rem] bg-primary"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-16">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="text-accent">✦</span>
            <span className="font-sans text-sm font-medium text-white/80">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-white leading-[1.05] mb-8"
          >
            Build Digital <br className="hidden lg:block" /> Experiences{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-500 to-accent">
              That Convert.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-lg md:text-xl text-white/50 max-w-xl mb-12 leading-relaxed"
          >
            I am a Full Stack Developer engineering high-performance systems
            and pixel-perfect interfaces that command attention and drive
            results.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              href="#contact"
              className="bg-accent text-primary hover:bg-accent/90 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.03] shadow-lg flex items-center gap-2"
            >
              Start Project <ArrowRight size={18} />
            </Link>
            <Link
              href="/Resume.pdf"
              className="glass-card text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.03] flex items-center gap-2"
            >
              Download Resume
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex-1 w-full max-w-md relative"
          style={{ perspective: "1000px" } as React.CSSProperties}
        >
          <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full aspect-[4/5] rounded-[3rem] transition-transform duration-500"
            style={{ transformStyle: "preserve-3d" } as React.CSSProperties}
            whileHover={{ rotateX: 0, rotateY: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-[3rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 z-10"></div>

            <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 relative">
              {heroImages.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={
                    index === 0
                      ? "Shahrukh Khan - Full Stack Developer Portrait"
                      : `Portfolio visual ${index}`
                  }
                  className="absolute inset-0 w-full h-full object-cover rounded-[3rem] transition-opacity duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  style={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("expertise")}
        aria-label="Scroll to Expertise section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-accent transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity },
        }}
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ArrowRight size={16} className="rotate-90" />
      </motion.button>
    </section>
  );
}