import Image from "next/image";

export function SmartHomeVisual() {
  return (
    <div className="w-full h-full min-h-[90vh] bg-[#F4F4F0] relative overflow-hidden flex flex-col border-y border-ink/5">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="flex-1 flex relative items-center justify-center pointer-events-auto">
        
        {/* Hardware Editorial Images (Desktop: Absolute layered, Mobile: Flex stacked) */}
        <div className="absolute inset-0 z-10 hidden md:block w-full max-w-7xl mx-auto">
          
          {/* Primary Anchor: Frank Electronics (Placed Right) */}
          <div className="absolute right-[5%] top-[15%] group z-10" data-cursor="VIEW">
            <div className="relative bg-black/5 p-2 pb-8 border border-black/10 shadow-lg transform transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-2xl bg-white inline-block">
               <img src="/assets/frank_electronic.png" alt="Frank Bediako working with electronic components" className="h-[40vh] md:h-[50vh] w-auto max-w-[60vw] block object-contain transition-transform duration-1000 group-hover:scale-[1.02]" />
               <span className="absolute bottom-2 left-3 font-sans text-[8px] uppercase tracking-widest text-black/40">HARDWARE / 01</span>
            </div>
          </div>

          {/* Technical: Schematic (Placed Top Left) */}
          <div className="absolute left-[8%] top-[10%] group opacity-90 mix-blend-multiply z-0" data-cursor="VIEW">
            <div className="relative border border-black/10 shadow-sm transform transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:shadow-md bg-white/50 rotate-1 inline-block">
               <img src="/assets/schema_clap.png" alt="Clap switch circuit schematic" className="h-[30vh] md:h-[35vh] w-auto max-w-[50vw] block p-2" />
               <span className="absolute -bottom-5 right-0 font-sans text-[7px] uppercase tracking-widest text-black/30">CLAP SWITCH SCHEMATIC</span>
            </div>
          </div>

          {/* Secondary: ESP32 (Placed Bottom Left) */}
          <div className="absolute left-[12%] bottom-[15%] group z-20" data-cursor="VIEW">
            <div className="relative p-1.5 pb-6 border border-black/5 shadow-md transform transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:shadow-xl bg-white -rotate-2 inline-block">
               <img src="/assets/esp32.jpg" alt="ESP32 microcontroller" className="h-[25vh] md:h-[35vh] w-auto max-w-[30vw] block" />
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">ESP32</span>
            </div>
          </div>

          {/* Technical: Breadboard (Placed Center Bottom, slightly overlapping Primary) */}
          <div className="absolute left-[28%] bottom-[10%] group z-30" data-cursor="VIEW">
            <div className="relative p-1 pb-6 border border-black/10 shadow-md transform transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:shadow-lg bg-[#f0f0f0] rotate-2 inline-block">
               <img src="/assets/circuit_clap.jpg" alt="Clap switch breadboard" className="h-[35vh] md:h-[45vh] w-auto max-w-[40vw] block mix-blend-darken" />
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">CLAP SWITCH BREADBOARD</span>
            </div>
          </div>
        </div>

        {/* Mobile-only stacked images */}
        <div className="flex flex-col gap-10 md:hidden w-full max-w-sm mx-auto px-6 py-16 z-10 pointer-events-auto">
          {/* Primary */}
          <div className="relative w-full bg-white p-2 pb-8 border border-black/10 shadow-md">
             <img src="/assets/frank_electronic.png" alt="Frank Bediako working with electronic components" className="w-full h-auto block" />
             <span className="absolute bottom-2 left-3 font-sans text-[8px] uppercase tracking-widest text-black/40">HARDWARE / 01</span>
          </div>
          
          {/* Schematic */}
          <div className="relative w-full border border-black/10 shadow-sm bg-white/50 mix-blend-multiply">
             <img src="/assets/schema_clap.png" alt="Clap switch circuit schematic" className="w-full h-auto block p-2" />
             <span className="absolute -bottom-5 right-0 font-sans text-[7px] uppercase tracking-widest text-black/30">SCHEMATIC</span>
          </div>

          <div className="flex gap-4 w-full items-start mt-6">
            {/* ESP32 */}
            <div className="relative w-2/5 bg-white p-1 pb-6 border border-black/5 shadow-sm">
               <img src="/assets/esp32.jpg" alt="ESP32 microcontroller" className="w-full h-auto block" />
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">ESP32</span>
            </div>
            
            {/* Breadboard */}
            <div className="relative w-3/5 bg-[#f0f0f0] p-1 pb-6 border border-black/10 shadow-sm self-center">
               <img src="/assets/circuit_clap.jpg" alt="Clap switch breadboard" className="w-full h-auto block mix-blend-darken" />
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">BREADBOARD</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
