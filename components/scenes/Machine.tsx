// Machine scene — editorial technical annotation composition
// Readability pass: annotations lowered, primary text at full contrast
export function Machine() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
      id="machine"
    >
      {/* Fine grid — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(234,234,230,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(234,234,230,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 flex flex-col gap-20 py-32">
        {/* Top annotation row */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] uppercase tracking-[0.25em]" style={{ color: "rgba(234,234,230,0.35)" }}>
              LAYER 01 / BACKEND
            </span>
            <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(234,234,230,0.5)" }}>
              FASTAPI · POSTGRESQL · PYTHON
            </span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="font-sans text-[8px] uppercase tracking-[0.25em]" style={{ color: "rgba(234,234,230,0.35)" }}>
              LAYER 02 / INTERFACE
            </span>
            <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(234,234,230,0.5)" }}>
              REACT · TYPESCRIPT
            </span>
          </div>
        </div>

        {/* Main statements — full contrast */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-baseline gap-6">
            <span
              className="font-sans text-[9px] uppercase tracking-widest shrink-0 hidden md:block"
              style={{ color: "rgba(234,234,230,0.3)" }}
            >
              //01
            </span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-[6.5vw] uppercase leading-[0.9] tracking-tighter" style={{ color: "#EAEAE6" }}>
              IDEAS ARE CHEAP.
            </h2>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(234,234,230,0.08)" }} />
            <span className="font-sans text-[8px] uppercase tracking-[0.3em]" style={{ color: "rgba(234,234,230,0.3)" }}>
              SYSTEM DESIGN · ESP32 · HARDWARE
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(234,234,230,0.08)" }} />
          </div>

          <div className="flex items-baseline gap-6">
            <span
              className="font-sans text-[9px] uppercase tracking-widest shrink-0 hidden md:block"
              style={{ color: "rgba(234,234,230,0.3)" }}
            >
              //02
            </span>
            <h2
              className="font-display text-4xl md:text-7xl lg:text-[6.5vw] uppercase leading-[0.9] tracking-tighter"
              style={{ color: "rgba(234,234,230,0.75)" }}
            >
              SYSTEMS TAKE WORK.
            </h2>
          </div>
        </div>

        {/* Bottom annotation row */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] uppercase tracking-[0.25em]" style={{ color: "rgba(234,234,230,0.35)" }}>
              LAYER 03 / HARDWARE
            </span>
            <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "rgba(234,234,230,0.5)" }}>
              ESP32 · SENSORS · AUTOMATION
            </span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="font-sans text-[8px] uppercase tracking-[0.25em]" style={{ color: "rgba(234,234,230,0.35)" }}>
              STATUS
            </span>
            <span className="font-sans text-[10px] tracking-widest uppercase flex items-center gap-1.5 justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-lime inline-block" />
              <span className="text-lime">BUILDING</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
