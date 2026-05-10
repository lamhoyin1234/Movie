const BASE_PATH = "/Movie";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* 50% dim overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 py-12 flex flex-col md:flex-row md:items-center gap-8">

        {/* Left column — 20% — poster image (desktop only) */}
        <div className="hidden md:flex md:w-[30%] shrink-0 items-center justify-center">
          <img
            src={`${BASE_PATH}/image/piratesOfTheSouth.jpg`}
            alt="Pirates of the South poster"
            className="max-h-[70vh] w-full object-contain"
          />
        </div>

        {/* Right column — 80% — information */}
        <div className="w-full md:w-[70%] flex flex-col justify-center">
        {/* Badge */}
        <span className="inline-block mb-6 w-fit px-4 py-1.5 rounded-full border border-amber-400/60 text-amber-400 text-xs font-semibold uppercase tracking-widest">
          {/*2010 · Sci-Fi · Thriller*/}
          Pre-production · Drama
        </span>

        {/* Title */}
        <h1 className="text-[clamp(1.5rem,4vw,4rem)] font-black uppercase tracking-tight leading-tight mb-6 bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Pirates of the South
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl text-gray-300 font-light italic mb-10 leading-relaxed max-w-3xl">
          {/*&ldquo;Your mind is the scene of the crime.&rdquo;*/}
          A group of youths in 1990s London create their own pirate radio station. Based on the events and cases of individuals in the pirate radio scene, and their extreme efforts to keep it alive.
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-gray-400 mb-12">
          {/*
          <span>⭐ 8.8 / 10</span>
          <span>•</span>
          <span>🕐 2h 28min</span>
          <span>•</span>
          */}
          <span>🎬 Directed by Troy Stacey</span>
          <span>✍️ Created by Jason Cook</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
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

        </div>{/* end right column */}
      </div>{/* end container */}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
