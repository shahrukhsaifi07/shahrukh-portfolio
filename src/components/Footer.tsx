"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight, Phone, Code, ExternalLink } from "lucide-react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2 },
    },
  };

  const email = "shahrukh.saifi6593@gmail.com";
  const phone = "+91-9871633241";

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-primary pt-40 pb-12 rounded-t-[4rem] border-t border-white/5 relative overflow-hidden section-glass"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 blur-[120px] rounded-[100%] pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10"
      >
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16 mb-32 border-b border-white/10 pb-20">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <h2 className="font-sans font-bold text-6xl md:text-[8rem] tracking-tighter text-white leading-[0.95] mb-10">
              LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">CREATE</span>
            </h2>
            <p className="font-sans text-white/50 text-lg md:text-xl max-w-md leading-relaxed">
              Currently available for full-time roles and freelance opportunities. Drop a
              message and let's build something extraordinary.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6 w-full xl:w-auto">
            <a
              href={`mailto:${email}`}
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 sm:gap-8 md:gap-12 p-4 sm:p-6 md:p-8 rounded-[2rem] card-glass hover:border-accent/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.15)] hover:-translate-y-1 transition-all duration-500 min-w-0"
            >
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-white/40 group-hover:text-accent mb-2 uppercase tracking-[0.2em] font-semibold">
                  Email
                </p>
                <p className="font-sans text-sm sm:text-base md:text-xl lg:text-2xl text-white group-hover:text-accent font-medium tracking-wide break-all">
                  {email}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full border border-white/10 group-hover:border-accent/30 group-hover:bg-accent/10 flex items-center justify-center text-white/60 group-hover:text-accent transition-all duration-500 group-hover:rotate-45">
                <ArrowUpRight size={18} className="sm:hidden" strokeWidth={1.5} />
                <ArrowUpRight size={20} className="hidden sm:block md:hidden" strokeWidth={1.5} />
                <ArrowUpRight size={24} className="hidden md:block" strokeWidth={1.5} />
              </div>
            </a>

            <a
              href={`tel:${phone.replace(/-/g, "")}`}
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 sm:gap-8 md:gap-12 p-4 sm:p-6 md:p-8 rounded-[2rem] card-glass hover:border-accent/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.15)] hover:-translate-y-1 transition-all duration-500 min-w-0"
            >
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-white/40 group-hover:text-accent mb-2 uppercase tracking-[0.2em] font-semibold">
                  Phone
                </p>
                <p className="font-sans text-sm sm:text-base md:text-xl lg:text-2xl text-white group-hover:text-accent font-medium tracking-wide">
                  {phone}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full border border-white/10 group-hover:border-accent/30 group-hover:bg-accent/10 flex items-center justify-center text-white/60 group-hover:text-accent transition-all duration-500">
                <Phone size={16} className="sm:hidden" strokeWidth={1.5} />
                <Phone size={18} className="hidden sm:block md:hidden" strokeWidth={1.5} />
                <Phone size={22} className="hidden md:block" strokeWidth={1.5} />
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="font-sans text-2xl font-bold tracking-widest text-white">
            Shahrukh Khan
          </div>

          <div className="flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></span>
            <span className="font-mono text-[10px] text-white/60 uppercase tracking-[0.2em] font-semibold">
              Let's Create
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/shahrukhsaifi07"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Code size={18} />
            </a>
            <a
              href="https://linkedin.com/in/shahrukhsaifi"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center font-sans text-sm text-white/30">
          © {new Date().getFullYear()} Shahrukh Khan. Built with Next.js & Framer Motion.
        </motion.div>
      </motion.div>
    </footer>
  );
}