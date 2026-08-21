export function OmniVoteVisual() {
  return (
    <div className="w-full aspect-[4/3] md:aspect-video bg-[#111111] border border-white/[0.08] relative overflow-hidden flex flex-col md:flex-row font-sans">
      
      {/* LEFT PANE - ADMIN */}
      <div className="w-full md:w-1/2 flex flex-col border-b md:border-b-0 md:border-r border-white/[0.08]">
        {/* Top Bar */}
        <div className="w-full border-b border-white/[0.08] px-4 md:px-6 py-4 flex justify-between items-center bg-[#0a0a0a]">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">ADMINISTRATOR</span>
            <span className="text-sm text-white/90 font-medium tracking-tight mt-1">ELECTION MANAGEMENT</span>
          </div>
          <div className="flex items-center gap-2 border border-lime/30 bg-lime/10 px-3 py-1.5 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest text-lime font-bold">LIVE</span>
          </div>
        </div>

        {/* Admin Content */}
        <div className="flex-1 p-4 md:p-6 flex flex-col gap-6 bg-[#111111]">
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] uppercase tracking-[0.1em] text-white/60">LIVE MONITORING</h3>
            <span className="text-[10px] font-mono text-white/30">REFRESH: 5s</span>
          </div>

          {/* Data Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white/[0.08] p-4 flex flex-col gap-2 bg-white/[0.02]">
              <span className="text-[9px] uppercase tracking-widest text-white/40">ELIGIBLE VOTERS</span>
              <span className="text-xl md:text-2xl font-mono text-white/90">20,492</span>
            </div>
            <div className="border border-white/[0.08] p-4 flex flex-col gap-2 bg-white/[0.02]">
              <span className="text-[9px] uppercase tracking-widest text-white/40">VOTES CAST</span>
              <span className="text-xl md:text-2xl font-mono text-white/90">13,155</span>
            </div>
          </div>

          {/* Activity Log Simulation */}
          <div className="flex-1 border border-white/[0.08] bg-[#0a0a0a]/50 p-4 flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-white/40 mb-4 border-b border-white/[0.08] pb-2">SECURE TRANSACTIONS</span>
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

      {/* RIGHT PANE - VOTER */}
      <div className="w-full md:w-1/2 flex flex-col bg-[#0a0a0a]">
        {/* Top Bar */}
        <div className="w-full border-b border-white/[0.08] px-4 md:px-6 py-4 flex justify-between items-center bg-[#111111]">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">VOTER TERMINAL</span>
            <span className="text-sm text-white/90 font-medium tracking-tight mt-1">2026 CAMPUS ELECTION</span>
          </div>
        </div>

        {/* Voter Content - Ballot */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-center items-center">
          <div className="w-full max-w-sm flex flex-col gap-6">
            
            {/* Conceptual Flow */}
            <div className="flex justify-between items-center w-full px-2 mb-2 opacity-50">
               {["ELIGIBILITY", "BALLOT", "VOTE", "RESULTS"].map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-2">
                     <span className={`w-1.5 h-1.5 rounded-full ${i === 2 ? 'bg-white' : 'bg-white/20'}`} />
                     <span className={`text-[7px] uppercase tracking-widest ${i === 2 ? 'text-white' : 'text-white/40'}`}>{step}</span>
                  </div>
               ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[9px] uppercase tracking-widest text-white/40 border-b border-white/[0.08] pb-2">PRESIDENTIAL BALLOT</span>
              
              <div className="flex flex-col gap-3">
                {/* Option A */}
                <div className="flex items-center justify-between p-4 border border-white/[0.08] bg-white/[0.02]">
                  <span className="text-sm text-white/80">Candidate A</span>
                  <span className="w-4 h-4 rounded-full border border-white/30" />
                </div>
                
                {/* Option B */}
                <div className="flex items-center justify-between p-4 border border-lime/50 bg-lime/10">
                  <span className="text-sm text-white/90">Candidate B</span>
                  <div className="w-4 h-4 rounded-full border border-lime flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-lime" />
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors text-white text-[10px] uppercase tracking-widest font-bold">
                SUBMIT SECURE VOTE
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
