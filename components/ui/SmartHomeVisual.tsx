// Conceptual Smart Home hardware visual
export function SmartHomeVisual() {
  return (
    <div className="w-full aspect-[4/3] md:aspect-[16/8] bg-[#EAEAE6] relative overflow-hidden flex flex-col border border-ink/5">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #111111 1px, transparent 1px), linear-gradient(to bottom, #111111 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />

      <div className="flex-1 flex relative items-center justify-center">
        
        {/* Composition Wrapper */}
        <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center p-8">
          
          {/* Main Large Frame (Center/Left) */}
          <div className="absolute left-[10%] md:left-[20%] top-[20%] md:top-[15%] w-[55%] md:w-[45%] aspect-[4/3] bg-[#0a0a0a] border border-ink/20 shadow-2xl z-10 flex items-center justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="font-sans text-[9px] uppercase tracking-widest text-white/30">IMG 01 / MAIN UNIT</span>
          </div>

          {/* Medium Portrait Frame (Right overlap) */}
          <div className="absolute right-[5%] md:right-[20%] top-[10%] md:top-[25%] w-[40%] md:w-[28%] aspect-[3/4] bg-[#111111] border border-ink/20 shadow-2xl z-20 flex items-center justify-center backdrop-blur-sm overflow-hidden group">
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="font-sans text-[9px] uppercase tracking-widest text-white/30">IMG 02 / SENSORS</span>
          </div>

          {/* Small Detail Frame (Bottom Left) */}
          <div className="absolute left-[5%] md:left-[12%] bottom-[15%] md:bottom-[10%] w-[35%] md:w-[22%] aspect-square bg-[#0a0a0a] border border-ink/20 shadow-xl z-30 flex items-center justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 text-center px-4">IMG 03 / DETAIL</span>
          </div>
          
          {/* Conceptual Technical Lines */}
          <div className="absolute left-[5%] top-[15%] w-8 h-px bg-ink/20" />
          <div className="absolute right-[5%] bottom-[15%] w-8 h-px bg-ink/20" />
          
        </div>

        {/* Labels outside board */}
        <div className="absolute bottom-6 left-6 flex flex-col gap-1 z-40">
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-ink/60">
            HARDWARE COMPOSITION
          </span>
          <span className="font-sans text-[8px] uppercase tracking-widest text-ink/40">
            MICROCONTROLLER / SENSORS / RELAYS
          </span>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-5 py-2 border-t border-ink/[0.05] flex justify-end bg-transparent z-40">
        <span className="font-sans text-[7px] text-ink/30 tracking-widest uppercase">
          ASSET PLACEMENT PENDING
        </span>
      </div>
    </div>
  );
}
