const reviews = [
  /*
  {
    author: "Name1",
    publication: "Facebook",
    rating: 5,
    quote:
      "Good movie.",
  },
  {
    author: "Name2",
    publication: "Amazon reviews",
    rating: 3,
    quote:
      "Not bad.",
  },
  {
    author: "Name3",
    publication: "Instagram",
    rating: 1,
    quote:
      "Not good.",
  },
  */
  {
    author: "Awaiting Release",
    publication: "No reviews available yet",
    rating: 0,
    quote:
      "Pirates of the South is currently in pre-production. Reviews will be available following the film's release.",
  },
  {
    author: "Stay Tuned",
    publication: "Check back after release",
    rating: 0,
    quote:
      "Based on real events from the 1990s London pirate radio scene. Critical reception to follow.",
  },
  {
    author: "Coming Soon",
    publication: "Audience reviews pending",
    rating: 0,
    quote:
      "Director Troy Stacey's debut feature is currently in development. Watch this space for updates.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-amber-400" : "text-gray-600"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-white/10" />
          <h2 className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">
            Reviews
          </h2>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
          {/*
          Critical Acclaim
          */}
          Critical Reception
        </h3>

        {/* Score summary */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          {/*
          { score: "100%", label: "Rotten Tomatoes", emoji: "🍅" },
            { score: "45", label: "Metacritic", emoji: "🎯" },
            { score: "8.8", label: "IMDb Rating", emoji: "⭐" },
          */}
          {[
            { score: "N/A", label: "Rotten Tomatoes", emoji: "🍅" },
            { score: "N/A", label: "Metacritic", emoji: "🎯" },
            { score: "N/A", label: "IMDb Rating", emoji: "⭐" },
          ].map(({ score, label, emoji }) => (
            <div
              key={label}
              className="flex-1 max-w-[200px] mx-auto sm:mx-0 bg-white/5 border border-white/10 rounded-xl p-5 text-center"
            >
              <div className="text-3xl font-black text-white mb-1">
                {emoji} {score}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ author, publication, rating, quote }) => (
            <article
              key={author}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-amber-400/30 transition-colors duration-300"
            >
              <Stars count={rating} />
              <blockquote className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <footer>
                <p className="text-white font-semibold text-sm">{author}</p>
                <p className="text-gray-500 text-xs">{publication}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
