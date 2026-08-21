import Image from "next/image";

export function SmartHomeVisual() {
  return (
    <div className="w-full h-full min-h-[70vh] bg-[#F4F4F0] relative overflow-hidden flex flex-col border-y border-ink/5">
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
          {/* Primary Anchor: Frank Electronics */}
          <div className="absolute right-[5%] bottom-[10%] w-[35vw] group" data-cursor="VIEW">
            <div className="relative w-full aspect-[4/3] bg-black/5 p-2 pb-8 border border-black/10 shadow-lg transform transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-2xl bg-white">
               <div className="relative w-full h-full overflow-hidden">
                 <Image src="/assets/frank_electronic.png" alt="Frank Bediako working with electronic components" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
               </div>
               <span className="absolute bottom-2 left-3 font-sans text-[8px] uppercase tracking-widest text-black/40">HARDWARE / 01</span>
            </div>
          </div>

          {/* Secondary: ESP32 */}
          <div className="absolute left-[8%] top-[25%] w-[18vw] group" data-cursor="VIEW">
            <div className="relative w-full aspect-square p-1.5 pb-6 border border-black/5 shadow-md transform transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:shadow-xl bg-white -rotate-2">
               <div className="relative w-full h-full overflow-hidden">
                 <Image src="/assets/esp32.jpg" alt="ESP32 microcontroller" fill className="object-cover" />
               </div>
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">ESP32 MICROCONTROLLER</span>
            </div>
          </div>

          {/* Technical: Schematic */}
          <div className="absolute right-[12%] top-[15%] w-[25vw] group opacity-90 mix-blend-multiply" data-cursor="VIEW">
            <div className="relative w-full aspect-[16/9] border border-black/10 shadow-sm transform transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:shadow-md bg-white/50 rotate-1">
               <Image src="/assets/schema_clap.png" alt="Clap switch circuit schematic" fill className="object-contain p-2" />
               <span className="absolute -bottom-5 right-0 font-sans text-[7px] uppercase tracking-widest text-black/30">CLAP SWITCH SCHEMATIC</span>
            </div>
          </div>

          {/* Technical: Breadboard */}
          <div className="absolute left-[15%] bottom-[15%] w-[22vw] group" data-cursor="VIEW">
            <div className="relative w-full aspect-[3/2] p-1 pb-6 border border-black/10 shadow-md transform transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:shadow-lg bg-[#f0f0f0] rotate-3">
               <div className="relative w-full h-full overflow-hidden mix-blend-darken">
                 <Image src="/assets/circuit_clap.jpg" alt="Clap switch breadboard" fill className="object-cover" />
               </div>
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">CLAP SWITCH BREADBOARD</span>
            </div>
          </div>
        </div>

        {/* Mobile-only stacked images */}
        <div className="flex flex-col gap-8 md:hidden w-full max-w-sm mx-auto px-6 py-12 z-10 pointer-events-auto">
          <div className="relative w-full aspect-[4/3] bg-white p-2 pb-8 border border-black/10 shadow-md">
             <div className="relative w-full h-full overflow-hidden">
               <Image src="/assets/frank_electronic.png" alt="Frank Bediako working with electronic components" fill className="object-cover" />
             </div>
             <span className="absolute bottom-2 left-3 font-sans text-[8px] uppercase tracking-widest text-black/40">HARDWARE / 01</span>
          </div>
          <div className="flex gap-4 w-full">
            <div className="relative flex-1 aspect-square bg-white p-1 pb-6 border border-black/5 shadow-sm">
               <div className="relative w-full h-full overflow-hidden">
                 <Image src="/assets/esp32.jpg" alt="ESP32 microcontroller" fill className="object-cover" />
               </div>
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">ESP32</span>
            </div>
            <div className="relative flex-1 aspect-[3/2] bg-[#f0f0f0] p-1 pb-6 border border-black/10 shadow-sm self-center">
               <div className="relative w-full h-full overflow-hidden mix-blend-darken">
                 <Image src="/assets/circuit_clap.jpg" alt="Clap switch breadboard" fill className="object-cover" />
               </div>
               <span className="absolute bottom-1.5 left-2 font-sans text-[7px] uppercase tracking-widest text-black/40">BREADBOARD</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
