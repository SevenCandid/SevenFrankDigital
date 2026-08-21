import Image from "next/image";

export function Frank() {
  return (
    <section
      className="relative min-h-screen w-full px-6 py-24 md:py-32 flex flex-col justify-center overflow-hidden"
      id="frank"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section label */}
        <div className="mb-12 md:mb-16">
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-ink/30">
            10 / FRANK
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Portrait - Asymmetric Layout with Transparent PNG */}
          <div className="w-full md:w-2/5 shrink-0 relative" data-cursor="VIEW">
            <div className="relative w-full aspect-[4/5] md:scale-110 md:-translate-y-4 md:origin-bottom-left transition-transform duration-700 ease-out hover:scale-105">
              {/* The real transparent portrait asset */}
              <div className="absolute inset-0 z-20 overflow-visible translate-y-[5%] md:translate-y-[10%] translate-x-[2%]">
                 <Image 
                   src="/assets/frank_portrait_png.png" 
                   alt="Frank Bediako" 
                   fill 
                   className="object-contain object-bottom md:object-right-bottom scale-[1.1] md:scale-125"
                   sizes="(max-width: 768px) 100vw, 50vw"
                   priority
                 />
              </div>
            </div>
            
            {/* Subtle editorial framing behind the portrait */}
            <div className="absolute inset-0 border border-black/5 -z-10 translate-x-4 -translate-y-4 hidden md:block" />
          </div>

          {/* Text */}
          <div className="w-full md:w-3/5 flex flex-col gap-10 md:pt-8">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.95]">
              THE PERSON<br />BEHIND THE<br />SYSTEMS.
            </h2>

            <div className="flex flex-col gap-6 font-sans">
              <p className="text-sm md:text-base text-ink/70 leading-relaxed max-w-sm">
                Computer Engineering and Computer Science student building software
                systems, exploring intelligent computing, and experimenting with hardware
                and automation.
              </p>

              <div className="flex flex-col gap-4 pt-4 border-t border-black/[0.08]">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-ink/30">
                    EDUCATION
                  </span>
                  <span className="text-xs text-ink/60 mt-1">
                    BSc Computer Engineering<br />
                    <span className="text-ink/30">University of Energy and Natural Resources</span>
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-ink/60">
                    BSc Computer Science<br />
                    <span className="text-ink/30">University of the People</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
