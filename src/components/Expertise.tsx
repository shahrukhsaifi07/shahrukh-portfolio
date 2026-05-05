"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Code, Terminal, Database } from "lucide-react";

function ShufflerCard() {
  const stack = ["React & Next.js", "Tailwind & Framer", "TypeScript & UI/UX"];
  const [items, setItems] = useState(stack);

  useEffect(() => {
    const timer = setInterval(() => {
      setItems((prev) => {
        const newArr = [...prev];
        newArr.unshift(newArr.pop()!);
        return newArr;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card-glass p-8 h-full relative group overflow-hidden">
      <Code className="text-accent mb-6 w-8 h-8" />
      <h3 className="font-sans font-bold text-2xl text-white mb-4">
        Frontend Engineering
      </h3>
      <p className="font-sans text-white/50 mb-8 text-sm">
        Building immersive, 1:1 pixel-perfect interfaces with advanced state
        management.
      </p>

      <div className="relative h-40 w-full" style={{ perspective: "1000px" }}>
        {items.map((item, i) => {
          const isTop = i === 0;
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isTop ? 1 : i === 1 ? 0.8 : 0.4,
                y: isTop ? 0 : i === 1 ? 16 : 32,
                scale: isTop ? 1 : i === 1 ? 0.95 : 0.9,
                zIndex: isTop ? 30 : i === 1 ? 20 : 10,
              }}
              transition={{ duration: 0.7 }}
              className={`absolute left-0 right-0 p-4 rounded-xl transition-all duration-700 flex items-center justify-between
                ${
                  isTop
                    ? "bg-accent text-primary border-transparent z-30 shadow-lg"
                    : i === 1
                    ? "glass-card text-white/80 border-white/10 z-20"
                    : "glass-card/50 text-white/50 border-white/5 z-10"
                }`}
            >
              <span className="font-mono text-sm font-bold">{item}</span>
              {isTop && <span className="w-2 h-2 rounded-full bg-primary/50"></span>}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TypewriterCard() {
  const [text, setText] = useState("");
  const fullText =
    "Initializing backend protocol...\nConnecting to PostgreSQL...\nStatus: OPTIMAL\nDeploying scalable microservices...\n> Ready.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card-glass p-8 h-full relative overflow-hidden group">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
          Live Feed
        </span>
      </div>
      <Terminal className="text-accent mb-6 w-8 h-8" />
      <h3 className="font-sans font-bold text-2xl text-white mb-4">
        Backend Architecture
      </h3>
      <p className="font-sans text-white/50 mb-6 text-sm">
        Robust server-side logic, database design, and API development for
        scale.
      </p>
      <div className="bg-black/50 p-6 rounded-xl font-mono text-sm text-accent/80 min-h-[120px] whitespace-pre-line leading-relaxed border border-white/5 relative">
        {text}
        <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
      </div>
    </div>
  );
}

function FullStackCard() {
  return (
    <div className="card-glass p-8 h-full relative">
      <Database className="text-accent mb-6 w-8 h-8" />
      <h3 className="font-sans font-bold text-2xl text-white mb-4">
        Full Stack Synergy
      </h3>
      <p className="font-sans text-white/50 mb-6 text-sm">
        Seamlessly connecting intuitive frontends with powerful backend
        infrastructures to create cohesive digital products.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {[
          "Java (Spring MVC)",
          "PHP (Laravel)",
          "React.js",
          "Flutter",
          "MySQL",
          "JavaScript",
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const auroraRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (auroraRef.current) {
        auroraRef.current.style.transform = `translateY(${v * 20}px)`;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-32 bg-primary relative overflow-hidden section-glass"
    >
      <div
        ref={auroraRef}
        className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"
      ></div>
      <div className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10">
        <div className="mb-16">
          <p className="font-sans font-bold text-sm tracking-[0.2em] text-accent uppercase mb-4">
            Technical Arsenal
          </p>
          <h2 className="font-drama italic text-5xl text-white">
            Systems of scale.
          </h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          <motion.div variants={itemVariants}>
            <ShufflerCard />
          </motion.div>
          <motion.div variants={itemVariants} className="lg:mt-12">
            <TypewriterCard />
          </motion.div>
          <motion.div variants={itemVariants} className="lg:mt-24">
            <FullStackCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}