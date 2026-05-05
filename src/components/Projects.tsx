"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Vastra Bridal",
    subtitle: "Bridal Lehenga E-Commerce",
    tech: "Next.js / React / GSAP",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
    desc: "Premium bridal wear e-commerce platform with immersive visual experience.",
  },
  {
    title: "Womeki Kitchen",
    subtitle: "Web Application",
    tech: "Laravel / PHP / SQLite",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop",
    desc: "Modern kitchen management system with real-time updates.",
  },
  {
    title: "Pharmacy ERP",
    subtitle: "Enterprise Software",
    tech: "Java / Spring MVC / MySQL",
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1000&auto=format&fit=crop",
    desc: "Comprehensive enterprise resource planning for pharmaceutical businesses.",
  },
  {
    title: "Bharat Youth Award",
    subtitle: "Award Website",
    tech: "PHP / Laravel / JS",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop",
    desc: "National youth achievement platform with event management.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export function Projects() {
  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-accent/60 uppercase mb-4">
            Selected Works
          </p>
          <h2 className="font-sans text-4xl md:text-6xl font-bold text-white tracking-tight">
            Featured Projects.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-accent/50 hover:bg-white/10 hover:shadow-[0_0_60px_rgba(201,168,76,0.15)] ${
                index % 2 === 1 ? "md:mt-12" : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-md font-mono text-[10px] text-white/80 uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                </div>
              </div>

              <div className="relative z-20 p-6 -mt-12">
                <h3 className="font-sans text-2xl font-bold text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-white/50 mt-1 mb-3">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent/70">
                    {project.tech}
                  </span>
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-accent group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 border-2 border-accent/30 rounded-3xl" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium transition-all duration-300 hover:bg-accent hover:text-primary hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
          >
            View All Projects <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}