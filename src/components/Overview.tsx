const details = [
  /*
  { label: "Director", value: "Christopher Nolan" },
  { label: "Screenplay", value: "Christopher Nolan" },
  { label: "Release Date", value: "July 16, 2010" },
  { label: "Genre", value: "Science Fiction · Thriller" },
  { label: "Runtime", value: "148 minutes" },
  { label: "Rating", value: "PG-13" },
  { label: "Language", value: "English" },
  { label: "Box Office", value: "$836.8 million" },
   */
  { label: "Director", value: "Troy Stacey" },
  { label: "Writer", value: "Jason Cook" },
  { label: "Release Date", value: "TBD" },
  { label: "Genre", value: "Drama" },
  { label: "Runtime", value: "TBD" },
  { label: "Language", value: "English" },
];

export default function Overview() {
  return (
    <section id="overview" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-white/10" />
          <h2 className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">
            Overview
          </h2>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Synopsis */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              A group of youths in 1990s London create their own pirate radio station — fighting to keep their signal alive against all odds.
            </h3>
            <div className="space-y-4 text-gray-400 text-base sm:text-lg leading-relaxed">
              <p>
                Movie description goes here, providing insight into the protagonist's skills, challenges, and motivations.
              </p>
              <p>
                Movie description.
              </p>
              <p>
                Movie description.
              </p>
            </div>

            {/* Awards */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                /*
                "4× Academy Award Winner",
                "Best Cinematography",
                "Best Visual Effects",
                "Best Sound Mixing",
                */
                "In Pre-production",
              ].map((award) => (
                <span
                  key={award}
                  className="px-3 py-1.5 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-xs font-medium"
                >
                  🏆 {award}
                </span>
              ))}
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.map(({ label, value }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
                  {label}
                </dt>
                <dd className="text-white font-medium text-sm">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
