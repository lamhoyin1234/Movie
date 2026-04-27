const castMembers = [
  {
    name: "Leonardo DiCaprio",
    role: "Dom Cobb",
    description: "The lead extractor haunted by memories of his wife.",
    initials: "LD",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Joseph Gordon-Levitt",
    role: "Arthur",
    description: "Cobb's trusted point man and logistics expert.",
    initials: "JG",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Elliot Page",
    role: "Ariadne",
    description: "The brilliant architect who designs the dream worlds.",
    initials: "EP",
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Tom Hardy",
    role: "Eames",
    description: "A forger who can impersonate anyone in a dream.",
    initials: "TH",
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Ken Watanabe",
    role: "Saito",
    description: "The powerful businessman who hires Cobb's team.",
    initials: "KW",
    color: "from-red-500 to-red-700",
  },
  {
    name: "Marion Cotillard",
    role: "Mal",
    description: "Cobb's deceased wife who haunts his subconscious.",
    initials: "MC",
    color: "from-pink-500 to-pink-700",
  },
  {
    name: "Cillian Murphy",
    role: "Robert Fischer",
    description: "The target of the inception mission.",
    initials: "CM",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Tom Berenger",
    role: "Browning",
    description: "Fischer's godfather and trusted advisor.",
    initials: "TB",
    color: "from-yellow-500 to-yellow-700",
  },
];

export default function Cast() {
  return (
    <section id="cast" className="py-20 sm:py-28 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-white/10" />
          <h2 className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">
            Cast
          </h2>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
          The Dream Team
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {castMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300"
            >
              {/* Avatar */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto`}
              >
                {member.initials}
              </div>

              <h4 className="text-white font-semibold text-sm sm:text-base text-center leading-tight mb-1">
                {member.name}
              </h4>
              <p className="text-amber-400 text-xs font-medium text-center mb-3">
                {member.role}
              </p>
              <p className="text-gray-500 text-xs text-center leading-relaxed hidden sm:block">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
