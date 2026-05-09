const castMembers = [
  {
    name: "Name1",
    role: "Director",
    description: "Funder and leader of the team, a skilled thief who specializes in extraction.",
    initials: "N1",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Jason Cook",
    role: "Author",
    description: "The author behind the story, bringing creative vision and narrative depth to the project.",
    photo: "/authorJasonCook.png",
    initials: "JC",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "TBD",
    role: "Lead Sales",
    description: "The charismatic salesman who recruits the team and manages client relationships.",
    initials: "TBD",
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "TBD",
    role: "Lead After effects artist",
    description: "The skilled forger who can create convincing identities and backgrounds for the team.",
    initials: "TBD",
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "TBD",
    role: "Lead Producer",
    description: "The pragmatic point man who manages logistics and ensures the team stays on track during missions.",
    initials: "TBD",
    color: "from-red-500 to-red-700",
  },
  {
    name: "TBD",
    role: "Animator",
    description: "The skilled animator who brings the team's visions to life.",
    initials: "TBD",
    color: "from-pink-500 to-pink-700",
  },
  {
    name: "TBD",
    role: "Sales",
    description: "The charismatic salesman who recruits the team and manages client relationships.",
    initials: "TBD",
    color: "from-green-500 to-green-700",
  },
  {
    name: "TBD",
    role: "Artist",
    description: "The skilled forger who can create convincing identities and backgrounds for the team.",
    initials: "TBD",
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
          Meet the team
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {castMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300"
            >
              {/* Avatar */}
              {"photo" in member ? (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-4 mx-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo as string}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto`}
                >
                  {member.initials}
                </div>
              )}

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
