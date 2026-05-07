const speakers = [
  { country: "Korea", flag: "🇰🇷" },
  { country: "China", flag: "🇨🇳" },
  { country: "Japan", flag: "🇯🇵" },
  { country: "Vietnam", flag: "🇻🇳" },
];

export default function Speakers() {
  return (
    <section id="speakers" className="relative py-20 sm:py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-white/50 mb-3 sm:mb-4">
            MAIN SPEAKERS
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            4개국, 한 무대.
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-white/60 max-w-2xl mx-auto">
            아시아 교육 시장을 이끄는 리더들이 직접 들려주는 인사이트.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {speakers.map((s) => (
            <div
              key={s.country}
              className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center hover:bg-white/[0.06] hover:scale-[1.02] transition-all"
            >
              <div className="text-5xl sm:text-7xl mb-4 sm:mb-6">{s.flag}</div>
              <div className="text-sm sm:text-lg font-semibold">{s.country}</div>
              <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs tracking-[0.2em] text-white/40">
                발표자 COMING SOON
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
