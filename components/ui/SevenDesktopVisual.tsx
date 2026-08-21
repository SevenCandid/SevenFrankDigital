"use client";
import { motion } from "framer-motion";

export function SevenDesktopVisual() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      
      {/* Device Frame Wrapper */}
      <div className="w-full max-w-5xl relative">
        
        {/* Device Top / Camera indicator */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-[#0a0a0a] rounded-b-md flex justify-center items-center z-20 border border-t-0 border-white/10">
           <div className="w-1 h-1 rounded-full bg-white/20" />
        </div>

        {/* Screen Bezel */}
        <div className="w-full bg-[#050505] p-2 md:p-4 rounded-xl md:rounded-2xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10">
          
          {/* Inner Screen Area */}
          <div className="w-full aspect-[16/10] md:aspect-[16/9] bg-[#0A0A0A] relative overflow-hidden flex flex-col rounded shadow-inner">
            {/* Subtle Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Top Header - System Status */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.05] bg-[#0d0d0d]">
        <div className="flex items-center gap-3">
          <span className="font-display text-soft-white text-[10px] tracking-widest uppercase">
            SEVEN_OS
          </span>
          <span className="font-sans text-soft-white/30 text-[8px] uppercase tracking-[0.2em] border border-white/10 px-1.5 py-0.5 rounded-sm">
            AUTONOMOUS MODE
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[9px] text-soft-white/40 uppercase tracking-widest">
          <span>MEM: 12.4GB / 32GB</span>
          <span className="flex items-center gap-1.5">
            SYS: ACTIVE <span className="w-1.5 h-1.5 rounded-full bg-lime/80 shadow-[0_0_5px_rgba(200,255,0,0.5)]" />
          </span>
        </div>
      </div>

      {/* Ambient Intelligence Bar */}
      <div className="hidden md:flex items-center gap-6 px-4 py-1.5 border-b border-white/[0.05] bg-white/[0.01] overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-2 text-[9px] font-sans text-soft-white/40 uppercase tracking-widest">
          <span className="text-lime/60">WEATHER:</span>
          <span>26°C ACCRA, GH</span>
        </div>
        <div className="w-px h-3 bg-white/10" />
        <div className="flex items-center gap-2 text-[9px] font-sans text-soft-white/40 uppercase tracking-widest">
          <span className="text-lime/60">NEXT EVENT:</span>
          <span>DESIGN SYNC IN 15M</span>
        </div>
        <div className="w-px h-3 bg-white/10" />
        <div className="flex items-center gap-2 text-[9px] font-sans text-soft-white/40 uppercase tracking-widest">
          <span className="text-lime/60">REMINDER:</span>
          <span>PAY INVOICE #0042</span>
        </div>
        <div className="w-px h-3 bg-white/10" />
        <div className="flex items-center gap-2 text-[9px] font-sans text-soft-white/40 uppercase tracking-widest">
          <span className="text-lime/60">ALARM:</span>
          <span className="opacity-50">NO ACTIVE ALARMS</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: Active Context & Integrations */}
        <div className="hidden md:flex w-48 shrink-0 flex-col border-r border-white/[0.05] bg-[#0A0A0A] p-3 gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[8px] text-soft-white/30 uppercase tracking-widest">
              ACTIVE SENSORS
            </span>
            {[
              { name: "VS_CODE_SERVER", status: "SYNCED" },
              { name: "ITERM2_BUFFER", status: "READING" },
              { name: "CHROME_DEVTOOLS", status: "IDLE" }
            ].map((ctx) => (
              <div key={ctx.name} className="flex justify-between items-center bg-white/[0.02] border border-white/[0.05] p-1.5 rounded">
                <span className="font-mono text-[8px] text-soft-white/60">{ctx.name}</span>
                <span className={`font-sans text-[7px] tracking-widest ${ctx.status === 'IDLE' ? 'text-soft-white/30' : 'text-lime/70'}`}>
                  {ctx.status}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <span className="font-sans text-[8px] text-soft-white/30 uppercase tracking-widest">
              MEMORY VECTOR DB
            </span>
            <div className="text-[9px] font-mono text-soft-white/40 flex flex-col gap-1">
              <span>&gt; 142 related files</span>
              <span>&gt; 3 active branches</span>
              <span>&gt; project: frank_digital</span>
            </div>
          </div>
        </div>

        {/* Main Panel: Split Screen */}
        <div className="flex-1 flex flex-col lg:flex-row bg-[#0A0A0A] relative overflow-hidden">
          
          {/* Left Column: Everyday Assistant */}
          <div className="flex-1 flex flex-col border-b lg:border-b-0 lg:border-r border-white/[0.05] p-4 gap-4 overflow-hidden">
            <span className="font-sans text-[8px] text-soft-white/30 uppercase tracking-widest shrink-0">
              WORKSPACE & COMMS
            </span>
            
            <div className="flex flex-col gap-3 overflow-y-auto pr-2 pb-10">
              {/* Task 1 */}
              <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[9px] text-lime/60 uppercase tracking-widest">[AGENT TASK]</span>
                  <span className="font-sans text-[8px] text-soft-white/30">10:42 AM</span>
                </div>
                <div className="text-soft-white/80 font-sans text-xs">
                  Draft email to Design Team regarding Q3 assets.
                </div>
                <div className="text-soft-white/50 font-sans text-[10px] mt-1 border-l-2 border-lime/30 pl-2">
                  "Drafting response based on yesterday's meeting notes... ✨ Done. Saved to Drafts."
                </div>
              </div>

              {/* Task 2 */}
              <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[9px] text-lime/60 uppercase tracking-widest">[DATA SYNC]</span>
                  <span className="font-sans text-[8px] text-soft-white/30">09:15 AM</span>
                </div>
                <div className="text-soft-white/80 font-sans text-xs">
                  Extracting receipts from Inbox to Expenses sheet.
                </div>
                <div className="text-soft-white/50 font-sans text-[10px] mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime/50" /> 14 receipts processed and logged.
                </div>
              </div>

              {/* Task 3 */}
              <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded flex flex-col gap-2 opacity-60">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[9px] text-soft-white/40 uppercase tracking-widest">[SCHEDULE]</span>
                  <span className="font-sans text-[8px] text-soft-white/30">08:30 AM</span>
                </div>
                <div className="text-soft-white/60 font-sans text-[10px]">
                  Rescheduled 2PM meeting due to conflict. Participants notified.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: System / Agentic Reasoning Stream */}
          <div className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
            <span className="font-sans text-[8px] text-soft-white/30 uppercase tracking-widest shrink-0">
              SYSTEM REASONING TRACE
            </span>
            
            <div className="flex flex-col gap-3 overflow-y-auto pr-2">
              {/* User Request */}
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[8px] text-soft-white/40 uppercase tracking-widest">
                  USER_INTENT
                </span>
                <div className="bg-white/[0.04] border border-white/10 p-2 rounded text-soft-white font-sans text-[10px] md:text-xs">
                  "Run a full build of the portfolio, analyze any CSS layout shifts, and deploy to Vercel."
                </div>
              </div>

              {/* Agent Thoughts/Actions */}
              <div className="flex flex-col gap-3 font-mono text-[9px] mt-2 border-l border-lime/20 pl-3">
                <div className="text-soft-white/60">
                  <span className="text-lime/70">► [THOUGHT]</span> Identifying build requirements...
                </div>
                <div className="text-soft-white/60">
                  <span className="text-lime/70">► [ACTION]</span> Executing <span className="bg-white/10 text-white px-1 rounded">npm run build</span>
                </div>
                
                <div className="bg-black/50 border border-white/[0.05] p-2 rounded text-soft-white/40 text-[8px] leading-tight">
                  &gt; next build<br/>
                  &gt; ✓ Compiled successfully<br/>
                  &gt; ✓ Generating static pages (34/34)
                </div>

                <div className="text-soft-white/60">
                  <span className="text-lime/70">► [THOUGHT]</span> Build succeeded. Deploying...
                </div>
                
                {/* Active processing state */}
                <div className="flex items-center gap-2 text-lime mt-1">
                  <motion.span 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-2 h-2 border border-lime border-t-transparent rounded-full"
                  />
                  <span className="animate-pulse">Awaiting Vercel URL...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-white/[0.05] bg-[#0d0d0d]">
            <div className="flex items-center gap-3 bg-[#0A0A0A] border border-white/[0.1] rounded p-2.5">
              <span className="text-lime text-xs">›</span>
              <div className="flex-1 font-mono text-soft-white/70 text-[10px] md:text-xs">
                Awaiting next command<span className="w-1.5 h-3 bg-lime inline-block align-middle ml-1 animate-pulse" />
              </div>
              <span className="font-sans text-[8px] text-soft-white/30 uppercase tracking-widest border border-white/[0.05] px-1.5 py-0.5 rounded">
                Ctrl + K
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      {/* Laptop Base/Hinge (Bottom) */}
      <div className="w-full max-w-5xl relative">
        <div className="w-[104%] -ml-[2%] h-3 md:h-5 bg-gradient-to-b from-[#1a1a1a] to-[#050505] rounded-b-2xl border border-white/[0.05] shadow-2xl relative z-0 mt-[-1px] flex justify-center overflow-hidden">
            <div className="w-32 h-1 bg-black rounded-b-md opacity-50" />
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/40 blur-xl rounded-[100%]" />
      </div>

    </div>
  );
}
