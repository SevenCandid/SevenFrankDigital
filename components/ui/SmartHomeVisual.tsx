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
        {/* Conceptual Board */}
        <div className="relative w-64 md:w-96 h-40 md:h-56 bg-ink border border-ink/20 rounded shadow-2xl flex p-4">
          
          {/* Main ESP32-style module area */}
          <div className="w-1/2 h-full border border-soft-white/10 relative p-3 flex flex-col justify-between">
            <div className="w-full h-8 bg-soft-white/5 border-b border-soft-white/10" />
            <div className="w-12 h-12 bg-soft-white/10 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
            <div className="flex justify-between w-full">
              <span className="font-sans text-[7px] text-lime uppercase tracking-widest">WIFI</span>
              <span className="font-sans text-[7px] text-soft-white/30 uppercase tracking-widest">ESP32</span>
            </div>
          </div>

          {/* GPIO Pins area */}
          <div className="w-8 h-full border-l border-soft-white/10 flex flex-col justify-around items-center px-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full border border-soft-white/20 bg-soft-white/5" />
            ))}
          </div>

          {/* Sensor/Wiring conceptual area */}
          <div className="flex-1 flex flex-col justify-between pl-4">
            <div className="flex flex-col gap-2">
              <div className="h-0.5 w-full bg-lime/40" />
              <div className="h-0.5 w-3/4 bg-soft-white/20" />
              <div className="h-0.5 w-full bg-lime/40" />
            </div>
            
            <div className="w-full h-16 border border-soft-white/10 flex items-center justify-center text-center p-2">
               <span className="font-sans text-[7px] text-soft-white/40 uppercase tracking-widest">
                 SENSOR<br/>MODULE
               </span>
            </div>
          </div>

          {/* Status LED */}
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-lime animate-pulse shadow-[0_0_8px_rgba(200,255,0,0.8)]" />
        </div>

        {/* Labels outside board */}
        <div className="absolute bottom-6 left-6 flex flex-col gap-1">
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-ink/40">
            HARDWARE COMPOSITION
          </span>
          <span className="font-sans text-[8px] uppercase tracking-widest text-ink/30">
            MICROCONTROLLER / SENSORS / RELAYS
          </span>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-5 py-2 border-t border-ink/[0.05] flex justify-end bg-transparent">
        <span className="font-sans text-[7px] text-ink/30 tracking-widest uppercase">
          CONCEPTUAL / IN DEVELOPMENT
        </span>
      </div>
    </div>
  );
}
