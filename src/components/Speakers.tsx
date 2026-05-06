const speakers = [
  { country: "Korea", flag: "🇰🇷", name: "Coming Soon", role: "Korean Speaker" },
  { country: "China", flag: "🇨🇳", name: "Coming Soon", role: "Chinese Speaker" },
  { country: "Japan", flag: "🇯🇵", name: "Coming Soon", role: "Japanese Speaker" },
  { country: "Vietnam", flag: "🇻🇳", name: "Coming Soon", role: "Vietnamese Speaker" },
];

export default function Speakers() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-white/50 mb-4">
            MAIN SPEAKERS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            4개국, 한 무대.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            아시아 교육 시장을 이끄는 리더들이 직접 들려주는 인사이트.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {speakers.map((s) => (
            <div
              key={s.country}
              className="glass rounded-3xl p-8 text-center hover:bg-white/[0.06] hover:scale-[1.02] transition-all"
            >
              <div className="text-6xl sm:text-7xl mb-6">{s.flag}</div>
              <div className="text-base sm:text-lg font-semibold">{s.country}</div>
              <div className="mt-2 text-sm text-white/50">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
