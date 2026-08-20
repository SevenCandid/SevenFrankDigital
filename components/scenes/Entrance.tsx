export function Entrance() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center bg-warm-white text-ink" id="entrance">
      <div className="absolute top-1/4 flex justify-center w-full">
        <span className="font-sans text-xs uppercase tracking-widest opacity-50">SEVEN / 001</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-display text-5xl md:text-8xl tracking-tight uppercase">SEVEN</h1>
        <h2 className="font-sans text-lg md:text-xl uppercase tracking-widest opacity-70">FRANK BEDIAKO</h2>
      </div>
      <div className="absolute bottom-1/4 flex justify-center w-full px-4 text-center">
        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40">
          SOFTWARE / SYSTEMS / INTELLIGENCE / HARDWARE
        </span>
      </div>
    </section>
  );
}
