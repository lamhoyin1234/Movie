import Image from "next/image";

const BASE_PATH = "/Movie";

const castMembers: {
  name: string;
  role: string;
  description: string;
  photo?: string;
  initials: string;
  color: string;
}[] = [
  {
    name: "Troy Stacey",
    role: "Director",
    description: "Funder and leader of the team, a skilled thief who specializes in extraction.",
    initials: "TS",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Jason Cook",
    role: "Author",
    description: "Jason Cook was born in July 1975 in Hackney, London, England, UK. He is a producer and actor, known for Cookster: The Darkest Days (2024), Cookster: No Going Back and Fakers.",
    photo: "/image/authorJasonCook.png",
    initials: "JC",
    color: "from-purple-500 to-purple-700",
  },
  {/*
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
  */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {castMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-row items-center gap-5"
            >
              {/* Avatar */}
              {member.photo ? (
                <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden">
                  <Image
                    src={BASE_PATH + member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div
                  className={`w-20 h-20 shrink-0 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl`}
                >
                  {member.initials}
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-base leading-tight mb-0.5">
                  {member.name}
                </h4>
                <p className="text-amber-400 text-xs font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
