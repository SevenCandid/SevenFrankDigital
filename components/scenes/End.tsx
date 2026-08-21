"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function End() {
  const [isExecuted, setIsExecuted] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center py-12 px-6">
      {/* Command Line Contact CTA */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto gap-8">
        
        <div className="w-full border border-current/10 bg-black/5 dark:bg-white/5 p-6 md:p-10 font-sans text-xs md:text-sm flex flex-col gap-4 shadow-2xl backdrop-blur-sm transition-all duration-700">
          {/* Terminal Window Dots */}
          <div className="flex items-center gap-2 mb-2">
             <span className="w-2 h-2 rounded-full bg-current/20" />
             <span className="w-2 h-2 rounded-full bg-current/20" />
             <span className="w-2 h-2 rounded-full bg-current/20" />
          </div>

          <div className="flex flex-col gap-1 font-mono uppercase tracking-widest text-[9px] md:text-[11px]">
            <div>
              <span className="text-lime font-bold">root@system</span>
              <span className="opacity-40"> : </span>
              <span className="opacity-60">~/contact</span>
              <span className="opacity-40"> $ </span>
              <span className="opacity-80 text-current">cat README.txt</span>
            </div>
            <div className="opacity-60 mt-4 leading-relaxed max-w-lg normal-case tracking-normal text-xs md:text-sm">
              If you have a problem that requires more than just an idea—if you need a highly functional, carefully engineered system—initialize contact below.
            </div>
          </div>

          {!isExecuted ? (
            <div className="mt-8 flex items-center">
              <button
                onClick={() => setIsExecuted(true)}
                className="font-mono text-[10px] md:text-xs text-black bg-lime px-4 py-2 hover:bg-lime/80 transition-colors uppercase tracking-widest font-bold"
                data-cursor="RUN"
              >
                EXECUTE ./CONTACT.SH
              </button>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center mt-8 font-mono uppercase tracking-widest text-[11px] md:text-sm"
            >
              <span className="text-lime font-bold">root@system</span>
              <span className="opacity-40 mx-2">:</span>
              <span className="opacity-60">~/contact</span>
              <span className="opacity-40 mx-2">$</span>
              
              <a 
                href="mailto:hello@example.com" 
                className="text-current border-b border-current/30 hover:border-current hover:text-lime transition-colors pb-0.5 ml-2 mr-1 lowercase"
                data-cursor="OPEN ↗"
              >
                hello@example.com
              </a>

              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-2 h-[14px] md:h-[18px] bg-lime inline-block translate-y-[2px]"
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-[9px] uppercase tracking-widest pt-10 border-t border-current/10">
        <div className="flex items-center gap-4 text-current/30">
          <span>SEVEN</span>
          <span className="text-current/15">—</span>
          <span>Frank Bediako</span>
          <span className="text-current/15">—</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-5 text-current/30">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-current transition-colors"
            data-cursor="OPEN ↗"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-current transition-colors"
            data-cursor="OPEN ↗"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:frank@example.com"
            className="hover:text-current transition-colors"
            data-cursor="VIEW"
          >
            EMAIL
          </a>
          <a
            href="#veroseven"
            className="hover:text-current transition-colors"
            data-cursor="EXPLORE ↗"
          >
            VEROSEVEN
          </a>
        </nav>
      </footer>
    </section>
  );
}
