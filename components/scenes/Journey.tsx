export function Journey() {
  const timeline = [
    { year: "2024", items: [{ label: "SEVEN", note: "Desktop assistant — begun" }] },
    {
      year: "2025",
      items: [
        { label: "NEXRA", note: "SMS platform — development" },
        { label: "BUSINESS SYSTEMS", note: "Multiple deployments" },
      ],
    },
    {
      year: "2026",
      items: [
        { label: "NEXRA — LIVE", note: "Platform deployed" },
        { label: "SMART HOME", note: "Hardware + automation" },
        { label: "DONTWAIT", note: "Queue management — early" },
      ],
    },
  ];

  return (
    <section
      className="relative min-h-[100vh] w-full py-32 px-6 flex flex-col justify-center items-center"
      id="journey"
    >
      <div className="w-full max-w-2xl flex flex-col gap-0">
        <h2 className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-ink/30 mb-8 border-b border-black/[0.08] pb-4">BUILD LOG</h2>
        {timeline.map((block, bi) => (
          <div
            key={block.year}
            className="flex gap-8 md:gap-12 border-t border-black/[0.08] py-10"
          >
            {/* Year */}
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-ink/30 w-12 shrink-0 pt-0.5">
              {block.year}
            </span>

            {/* Items */}
            <div className="flex flex-col gap-4 flex-1">
              {block.items.map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="font-display text-2xl md:text-4xl uppercase tracking-tighter leading-tight">
                    {item.label}
                  </span>
                  <span className="font-sans text-[9px] text-ink/30 uppercase tracking-widest">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Next / Still building */}
        <div className="flex gap-8 md:gap-12 border-t border-black/[0.08] pt-10">
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-ink/30 w-12 shrink-0 pt-0.5">
            NEXT
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-display text-2xl md:text-4xl uppercase tracking-tighter leading-tight text-ink/40">
              STILL BUILDING.
            </span>
            <span className="font-sans text-[9px] text-ink/20 uppercase tracking-widest">
              No predictions. No fake roadmap.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
