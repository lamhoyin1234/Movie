export default function Trailer() {
  return (
    <section id="trailer" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-white/10" />
          <h2 className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">
            Trailer
          </h2>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
          Official Trailer
        </h3>

        {/* Responsive 16:9 video embed */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            title="Movie Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <p className="mt-6 text-center text-gray-500 text-sm">
          {/*&copy; 2010 Warner Bros. Pictures — All rights reserved.*/}
        </p>
      </div>
    </section>
  );
}
