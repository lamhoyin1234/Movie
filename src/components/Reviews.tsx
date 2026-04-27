const reviews = [
  {
    author: "Roger Ebert",
    publication: "Chicago Sun-Times",
    rating: 4,
    quote:
      "Inception is a thriller that's also an idea. It takes the format of a chase movie and fills it with love, loss, revenge, and the guilt we carry for those we have damaged.",
  },
  {
    author: "Peter Travers",
    publication: "Rolling Stone",
    rating: 4,
    quote:
      "Inception dazzles with its ambition and delivers on it. Nolan constructs his world with the precision of an architect.",
  },
  {
    author: "Manohla Dargis",
    publication: "The New York Times",
    rating: 4,
    quote:
      "A summer film that puts the dumb-and-dumber blockbusters to shame. Nolan is comfortable in the realm of the supremely complicated.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 4 }).map((_, i) => (
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
          Critical Acclaim
        </h3>

        {/* Score summary */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          {[
            { score: "87%", label: "Rotten Tomatoes", emoji: "🍅" },
            { score: "74", label: "Metacritic", emoji: "🎯" },
            { score: "8.8", label: "IMDb Rating", emoji: "⭐" },
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
