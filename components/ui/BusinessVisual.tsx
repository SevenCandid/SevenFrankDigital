// Conceptual business systems collage — anonymized, clearly editorial
export function BusinessVisual() {
  const systems = [
    {
      name: "UPP",
      desc: "Printing press management",
      highlight: "Operational management for a printing business.",
    },
    {
      name: "GREEN LITE",
      desc: "Cosmetics / E-commerce",
      highlight: "Manage products, stock, and e-commerce operations.",
    },
    {
      name: "DIN",
      desc: "Organization management",
      highlight: "Mentorship-related workflows and organization operations.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-px bg-black/[0.06]">
      {systems.map((sys, i) => (
        <div
          key={sys.name}
          className="flex flex-col md:flex-row bg-[#eceae6] gap-0"
        >
          {/* System label */}
          <div className="flex flex-col justify-between px-5 py-4 md:py-5 border-r border-black/[0.06] w-full md:w-48 shrink-0">
            <span className="font-display text-ink text-xl md:text-2xl tracking-tighter">
              {sys.name}
            </span>
            <span className="font-sans text-[8px] text-ink/40 uppercase tracking-widest mt-2">
              SYSTEM {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Description */}
          <div className="flex items-center px-5 py-4 flex-1 border-r border-black/[0.06]">
            <span className="font-sans text-[10px] text-ink/70 uppercase tracking-widest">
              {sys.desc}
            </span>
          </div>

          {/* Highlight */}
          <div className="flex items-center px-5 py-4 w-full md:w-64 shrink-0">
            <span className="font-sans text-[10px] text-ink/50 leading-relaxed">
              {sys.highlight}
            </span>
          </div>
        </div>
      ))}

      {/* Footer note */}
      <div className="flex justify-end px-5 py-2 bg-[#eceae6]">
        <span className="font-sans text-[7px] text-ink/30 uppercase tracking-widest">
          ANONYMIZED / OPERATIONAL DATA NOT SHOWN
        </span>
      </div>
    </div>
  );
}
