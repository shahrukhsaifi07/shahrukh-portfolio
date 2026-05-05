"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  const textY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-40 bg-primary text-white relative overflow-hidden rounded-[3rem] -mt-[3rem] z-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-8 md:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            className="w-full relative group order-2 lg:order-1"
            style={{
              scale: imageScale,
              opacity: imageOpacity,
              rotate: imageRotate,
            } as any}
          >
            <div className="absolute inset-0 bg-accent/20 rounded-[3rem] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-700"></div>
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
              alt="Developer Workflow and Setup"
              width={500}
              height={500}
              className="relative z-10 w-full aspect-square object-cover rounded-[3rem] shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-700 hover:scale-[1.02]"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center order-1 lg:order-2"
            style={{ y: textY, opacity: textOpacity }}
          >
            <p className="font-sans text-sm tracking-[0.3em] text-accent/60 uppercase font-bold mb-6">
              The Philosophy
            </p>
            <h2 className="font-drama italic text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-white mb-8">
              Most developers build code that works. I architect digital experiences that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-500 to-accent">
                command the screen.
              </span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed border-l-4 border-accent pl-6">
              And I also continuously improve the UI, creating highly animated, interactive
              digital interfaces that feel alive.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}