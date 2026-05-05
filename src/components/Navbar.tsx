"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4">
        <motion.nav
          aria-label="Main Navigation"
          className={`flex items-center justify-between px-5 py-3 rounded-full w-full max-w-4xl transition-all duration-500 ${
            scrolled 
              ? "bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/5 shadow-lg shadow-black/20" 
              : "bg-transparent"
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="flex items-center pl-1">
            <span className="font-sans text-lg font-semibold tracking-tight text-white">
              Shahrukh Khan
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["#expertise", "#experience", "#projects"].map((href) => (
              <Link 
                key={href} 
                href={href}
                className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                {href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-accent/90 text-[#0a0a0f] hover:bg-accent transition-all duration-300 hover:scale-[1.02]"
            >
              Let&apos;s Create
            </Link>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white/70"
              aria-label="Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {["#expertise", "#experience", "#projects", "#contact"].map((href, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-2xl text-white/70 hover:text-accent transition-colors"
                  >
                    {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}