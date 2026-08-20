"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { num: "01", label: "WORK", href: "#nexra" },
    { num: "02", label: "SYSTEMS", href: "#business-systems" },
    { num: "03", label: "JOURNEY", href: "#journey" },
    { num: "04", label: "FRANK", href: "#frank" },
    { num: "05", label: "VEROSEVEN", href: "#veroseven" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 mix-blend-difference text-soft-white pointer-events-none">
        <div className="font-display text-lg font-bold uppercase tracking-widest pointer-events-auto cursor-pointer" data-cursor="VIEW">
          SEVEN
        </div>
        <button 
          onClick={toggleMenu} 
          className="font-sans text-xs uppercase tracking-widest pointer-events-auto cursor-pointer"
          data-cursor="VIEW"
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-warm-white text-ink flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 text-center">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100); // slight delay to allow menu animation to start closing
                  }}
                  className="group flex flex-col items-center cursor-pointer"
                  data-cursor="EXPLORE ↗"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <span className="font-sans text-xs opacity-50 mb-1">{item.num}</span>
                  <span className="font-display text-4xl md:text-6xl uppercase tracking-wider group-hover:opacity-60 transition-opacity duration-300">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
