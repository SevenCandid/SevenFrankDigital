// Conceptual NEXRA dashboard — clearly labeled as a demo visualization
export function NexraVisual() {
  const campaigns = [
    { name: "Campus Campaign", status: "SENT", color: "text-lime" },
    { name: "Product Launch", status: "SENDING", color: "text-soft-white/60" },
    { name: "Announcement", status: "QUEUED", color: "text-soft-white/30" },
  ];

  return (
    <div className="w-full aspect-[16/9] bg-[#0d0d0d] relative overflow-hidden flex flex-col border border-white/5">
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <span className="font-display text-soft-white text-xs tracking-[0.25em] uppercase">
          NEXRA
        </span>
        <span className="font-sans text-[9px] text-lime tracking-widest uppercase">
          ● LIVE
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: campaigns */}
        <div className="flex-1 flex flex-col px-6 py-5 border-r border-white/[0.06] gap-4">
          <span className="font-sans text-[9px] uppercase tracking-widest text-soft-white/30">
            CAMPAIGNS
          </span>
          <div className="flex flex-col gap-3">
            {campaigns.map((c) => (
              <div
                key={c.name}
                className="flex justify-between items-center py-2 border-b border-white/[0.05]"
              >
                <span className="font-sans text-[10px] text-soft-white/70">
                  {c.name}
                </span>
                <span
                  className={`font-sans text-[9px] uppercase tracking-widest ${c.color}`}
                >
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stats */}
        <div className="flex flex-col w-36 md:w-48 shrink-0">
          <div className="flex-1 flex flex-col items-center justify-center border-b border-white/[0.06] gap-1 px-4 py-5">
            <span className="font-display text-2xl md:text-3xl text-soft-white tracking-tighter">
              1,247
            </span>
            <span className="font-sans text-[8px] uppercase tracking-widest text-soft-white/30">
              RECIPIENTS
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-1 px-4 py-5">
            <span className="font-display text-2xl md:text-3xl text-soft-white tracking-tighter">
              3,891
            </span>
            <span className="font-sans text-[8px] uppercase tracking-widest text-soft-white/30">
              MESSAGES
            </span>
          </div>
        </div>
      </div>

      {/* Flow indicator */}
      <div className="px-6 py-3 border-t border-white/[0.06] flex items-center gap-4">
        <span className="font-sans text-[8px] text-soft-white/20 uppercase tracking-widest">
          PLATFORM → CAMPAIGN → MESSAGE → RECIPIENT
        </span>
        <span className="ml-auto font-sans text-[8px] text-soft-white/20 tracking-widest">
          CONCEPTUAL / DEMO
        </span>
      </div>
    </div>
  );
}
