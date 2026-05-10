const links = [
  {
    label: "IMDb — Pirates of the South",
    description: "Official IMDb listing for Pirates of the South.",
    url: "https://www.imdb.com/title/tt38866294/",
  },
  {
    label: "IMDb — Another Film by the Same Author",
    description: "Another IMDb title by the same author, Jason Cook.",
    url: "https://www.imdb.com/title/tt22247274/",
  },
  {
    label: "Amazon UK — Original Book",
    description:
      '"Pirates of The South: Euphoria" by Jason Cook — the book the film is based on.',
    url: "https://www.amazon.co.uk/Pirates-South-Euphoria-Jason-Cook-ebook/dp/B091CVP43L",
  },
];

export default function Links() {
  return (
    <section id="links" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-1 bg-white/10" />
          <h2 className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">
            Links
          </h2>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
          Find Us Around the Web
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map(({ label, description, url }) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="flex-1">
                <h4 className="text-white font-semibold text-base mb-2">
                  {label}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
              <a
                href={url}
                target={url === "#" ? undefined : "_blank"}
                rel={url === "#" ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-1.5 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors duration-200"
              >
                Visit <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
