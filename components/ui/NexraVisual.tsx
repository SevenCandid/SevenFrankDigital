import Image from "next/image";

export function NexraVisual() {
  return (
    <div className="w-full relative overflow-hidden rounded-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group bg-[#050505]">
      
      {/* Aspect Ratio Container for Image */}
      <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
        <Image
          src="/assets/nexra_dashboard.png"
          alt="NEXRA bulk SMS dashboard"
          fill
          className="object-cover object-left-top transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          quality={95}
          priority
        />
        
        {/* Subtle Overlay Hotspots to create responsive feel without fake functionality */}
        {/* Sidebar Nav Area */}
        <div 
          className="absolute left-0 top-0 w-[15%] h-[80%] bg-white/0 hover:bg-white/[0.03] transition-colors duration-300 z-10 cursor-default"
          data-cursor="VIEW"
        />
        
        {/* Top Header Area */}
        <div 
          className="absolute left-[15%] top-0 w-[85%] h-[10%] bg-white/0 hover:bg-white/[0.03] transition-colors duration-300 z-10 cursor-default"
          data-cursor="VIEW"
        />

        {/* Main Chart/Graph Area */}
        <div 
          className="absolute left-[15%] top-[15%] w-[60%] h-[50%] bg-white/0 hover:bg-white/[0.03] transition-colors duration-300 z-10 cursor-default"
          data-cursor="VIEW"
        />

        {/* Right Stats Panel */}
        <div 
          className="absolute right-0 top-[15%] w-[25%] h-[85%] bg-white/0 hover:bg-white/[0.03] transition-colors duration-300 z-10 cursor-default"
          data-cursor="VIEW"
        />

        {/* Subtle Glass Glare over the screen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20" />
      </div>
    </div>
  );
}
