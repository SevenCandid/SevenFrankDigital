export function OmniVoteVisual() {
  return (
    <div className="w-full aspect-[4/3] md:aspect-video bg-[#111111] border border-white/[0.08] relative overflow-hidden flex flex-col font-sans">
      
      {/* Top Bar - Election Status */}
      <div className="w-full border-b border-white/[0.08] px-4 md:px-6 py-4 flex justify-between items-center bg-[#0a0a0a]">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">ACTIVE ELECTION</span>
          <span className="text-sm md:text-base text-white/90 font-medium tracking-tight">2026 CAMPUS ELECTION</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">ELIGIBLE VOTERS</span>
            <span className="text-xs text-white/80 font-mono">20,492</span>
          </div>
          <div className="flex items-center gap-2 border border-lime/30 bg-lime/10 px-3 py-1.5 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest text-lime font-bold">LIVE</span>
          </div>
        </div>
      </div>

      {/* Main Control Panel */}
      <div className="flex-1 flex w-full relative">
        
        {/* Left Sidebar - Navigation / Flow */}
        <div className="hidden md:flex w-48 border-r border-white/[0.08] flex-col p-4 bg-[#0a0a0a]/50">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-6">SYSTEM FLOW</span>
          <div className="flex flex-col gap-6">
            {[
              { step: "VOTERS", active: false },
              { step: "ELIGIBILITY", active: false },
              { step: "BALLOT", active: false },
              { step: "VOTE", active: true },
              { step: "RESULTS", active: false },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex flex-col gap-2">
                <div className={`flex items-center gap-3 ${item.active ? 'text-white' : 'text-white/40'}`}>
                  <span className={`text-[8px] font-mono ${item.active ? 'text-lime' : 'text-white/20'}`}>0{i + 1}</span>
                  <span className="text-[10px] uppercase tracking-widest">{item.step}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px h-4 bg-white/[0.04] ml-1.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Center Canvas - Ballot Data / Monitoring */}
        <div className="flex-1 p-4 md:p-8 flex flex-col gap-6 overflow-hidden">
          
          <div className="flex items-center justify-between">
            <h3 className="text-xs uppercase tracking-[0.1em] text-white/60">LIVE BALLOT MONITORING</h3>
            <span className="text-[10px] font-mono text-white/30">REFRESH: 5s</span>
          </div>

          {/* Data Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-white/[0.08] p-4 flex flex-col gap-2 bg-white/[0.02]">
              <span className="text-[9px] uppercase tracking-widest text-white/40">TURNOUT</span>
              <span className="text-xl md:text-2xl font-mono text-white/90">64.2%</span>
            </div>
            <div className="border border-white/[0.08] p-4 flex flex-col gap-2 bg-white/[0.02]">
              <span className="text-[9px] uppercase tracking-widest text-white/40">VOTES CAST</span>
              <span className="text-xl md:text-2xl font-mono text-white/90">13,155</span>
            </div>
            <div className="border border-white/[0.08] p-4 flex flex-col gap-2 bg-white/[0.02]">
              <span className="text-[9px] uppercase tracking-widest text-white/40">PENDING KYC</span>
              <span className="text-xl md:text-2xl font-mono text-white/60">42</span>
            </div>
            <div className="border border-white/[0.08] p-4 flex flex-col gap-2 bg-white/[0.02]">
              <span className="text-[9px] uppercase tracking-widest text-white/40">SYSTEM LOAD</span>
              <span className="text-xl md:text-2xl font-mono text-white/60">12%</span>
            </div>
          </div>

          {/* Activity Log Simulation */}
          <div className="flex-1 border border-white/[0.08] bg-[#0a0a0a]/50 p-4 flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-white/40 mb-4 border-b border-white/[0.08] pb-2">RECENT SECURE TRANSACTIONS</span>
            <div className="flex flex-col gap-3 font-mono text-[10px] text-white/60">
              <div className="flex justify-between items-center opacity-40">
                <span>[14:02:11] VOTE_CAST</span>
                <span>HASH_7A2B9C...</span>
                <span className="text-lime">VERIFIED</span>
              </div>
              <div className="flex justify-between items-center opacity-60">
                <span>[14:02:14] AUTH_REQ</span>
                <span>USR_9921...</span>
                <span className="text-white/40">PENDING</span>
              </div>
              <div className="flex justify-between items-center opacity-80">
                <span>[14:02:15] VOTE_CAST</span>
                <span>HASH_3F1E8D...</span>
                <span className="text-lime">VERIFIED</span>
              </div>
              <div className="flex justify-between items-center">
                <span>[14:02:18] VOTE_CAST</span>
                <span>HASH_9D4C2A...</span>
                <span className="text-lime">VERIFIED</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
