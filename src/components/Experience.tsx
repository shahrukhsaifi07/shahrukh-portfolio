"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const jobs = [
  {
    year: "Recent",
    role: "Freelance Full Stack Developer",
    company: "Independent",
    desc: "Designing and developing premium, high-performance web applications, e-commerce platforms, and custom software solutions using React, Next.js, and Node.js.",
  },
  {
    year: "2023 - 2026",
    role: "IT Support Engineer",
    company: "Delhi Overseas",
    desc: "Managed IT infrastructure, resolved technical issues, and maintained system networks to ensure seamless operational continuity.",
  },
  {
    year: "July 2020 - April 2021",
    role: "Backend & Frontend Developer",
    company: "Inkubis Solutions Pvt Ltd",
    desc: "Developed web-based applications using PHP (Laravel), SQLite, JavaScript, and jQuery. Handled business logic and full-stack implementation.",
  },
  {
    year: "May 2018 - Dec 2019",
    role: "Java / PHP Developer",
    company: "Softcopy IT Services Pvt Ltd",
    desc: "Engineered robust ERP systems for internal management using Java (Spring MVC), PHP (Laravel), and MySQL. Managed backend APIs and frontend integration.",
  },
];

function TimelineCard({ job, index }: { job: (typeof jobs)[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ x: isEven ? -60 : 60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
      className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-[2rem] card-glass hover:border-accent/30 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] hover:-translate-y-2 transition-all duration-500 z-10 relative ${
        isEven ? "md:mr-auto" : "md:ml-auto"
      }`}
    >
      <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-3">
        <h3 className="font-sans font-bold text-xl text-white">{job.role}</h3>
        <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full tracking-widest uppercase whitespace-nowrap">
          {job.year}
        </span>
      </div>
      <div className="text-white/50 font-mono text-sm mb-5">{job.company}</div>
      <p className="text-white/70 font-sans text-sm leading-relaxed">{job.desc}</p>
    </motion.div>
  );
}

function TimelineDot({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-primary bg-accent text-primary shrink-0 shadow-[0_0_15px_rgba(232,142,28,0.4)] z-10 relative transition-transform duration-300 hover:scale-110"
    >
      <div className="w-2 h-2 bg-primary rounded-full"></div>
    </motion.div>
  );
}

export function Experience() {
  const expRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: expRef,
    offset: ["start end", "end start"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={expRef}
      className="py-32 bg-primary relative overflow-hidden section-glass"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-8 md:px-16 max-w-5xl relative z-10">
        <div className="mb-24 border-b border-white/10 pb-8">
          <p className="font-sans font-bold text-sm tracking-[0.2em] text-accent uppercase mb-4">
            The Journey
          </p>
          <h2 className="font-drama italic text-5xl md:text-6xl text-white">
            Professional Timeline.
          </h2>
        </div>

        <div className="relative space-y-16">
          <motion.div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-0.5 bg-gradient-to-b from-accent/80 via-white/10 to-transparent -translate-x-1/2 z-0 rounded-full origin-top"
            style={{ scaleY: lineScaleY }}
          ></motion.div>

          {jobs.map((job, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                <TimelineDot index={index} />
                <TimelineCard job={job} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}