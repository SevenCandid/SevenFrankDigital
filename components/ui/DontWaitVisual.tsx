// Conceptual DontWait queue interface — clearly demo/conceptual
export function DontWaitVisual() {
  return (
    <div className="w-full aspect-[4/3] bg-[#F4F3EF] relative overflow-hidden flex flex-col border border-black/[0.07]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.06]">
        <span className="font-display text-ink text-[10px] tracking-[0.2em] uppercase">
          DONTWAIT
        </span>
        <span className="font-sans text-[8px] text-ink/30 uppercase tracking-widest">
          QUEUE MANAGEMENT
        </span>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5 px-6">
        {/* Queue number */}
        <div className="flex flex-col items-center">
          <span className="font-sans text-[8px] text-ink/30 uppercase tracking-widest mb-2">
            YOUR NUMBER
          </span>
          <span className="font-display text-[4rem] md:text-[5rem] text-ink leading-none tracking-tighter">
            045
          </span>
        </div>

        {/* Status pill */}
        <div className="px-4 py-2 border border-ink/20 rounded-full flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse shrink-0" />
          <span className="font-sans text-[9px] uppercase tracking-widest text-ink/80">
            YOUR TURN IS APPROACHING
          </span>
        </div>

        {/* Meta row */}
        <div className="flex gap-8 mt-2">
          <div className="flex flex-col items-center gap-1">
            <span className="font-display text-ink text-xl tracking-tighter">18</span>
            <span className="font-sans text-[7px] text-ink/30 uppercase tracking-widest">MIN LEFT</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-display text-ink text-xl tracking-tighter">3</span>
            <span className="font-sans text-[7px] text-ink/30 uppercase tracking-widest">AHEAD</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-5 py-2 border-t border-black/[0.05] flex justify-end">
        <span className="font-sans text-[7px] text-ink/20 tracking-widest uppercase">
          CONCEPTUAL / DEMO
        </span>
      </div>
    </div>
  );
}
