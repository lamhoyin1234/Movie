export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-amber-400/60 text-amber-400 text-xs font-semibold uppercase tracking-widest">
          {/*2010 · Sci-Fi · Thriller*/}
          Pre-production · Drama
        </span>

        {/* Title */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight leading-none mb-6 bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Pirates of the South
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl text-gray-300 font-light italic mb-10 leading-relaxed">
          {/*&ldquo;Your mind is the scene of the crime.&rdquo;*/}
          Movie tagline goes here, something catchy and intriguing to draw viewers in.
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400 mb-12">
          {/*
          <span>⭐ 8.8 / 10</span>
          <span>•</span>
          <span>🕐 2h 28min</span>
          <span>•</span>
          */}
          <span>🎬 Directed by Troy Stacey</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#trailer"
            className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-colors duration-200 text-sm uppercase tracking-wider"
          >
            ▶ Watch Trailer
          </a>
          <a
            href="#overview"
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200 text-sm uppercase tracking-wider"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
