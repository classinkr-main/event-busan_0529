const items = [
  {
    label: "일시",
    primary: "2026년 5월 29일 (금)",
    secondary: "13:00 - 18:00 / 저녁만찬",
  },
  {
    label: "장소",
    primary: "부산 과사람 WP타워",
    secondary: "아리스토텔레스 홀",
  },
  {
    label: "주최",
    primary: "Classin × WP과사람",
    secondary: "공동 주최",
  },
  {
    label: "참가 규모",
    primary: "총 150명",
    secondary: "한·중·일·베 6개 기관 + 국내 교육 리더",
  },
];

export default function EventInfo() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-white/50 mb-4">
            EVENT OVERVIEW
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            한 자리, 그리고 한 시대.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            아시아 교육의 미래를 만드는 사람들이 부산에 모입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="glass rounded-3xl p-8 hover:bg-white/[0.06] transition-all"
            >
              <div className="text-xs tracking-[0.25em] text-white/40 mb-5">
                {item.label.toUpperCase()}
              </div>
              <div className="text-xl sm:text-2xl font-semibold leading-snug">
                {item.primary}
              </div>
              <div className="mt-2 text-sm text-white/60">{item.secondary}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-strong rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 text-white/80">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[var(--accent-from)]">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" fill="currentColor" />
            </svg>
            <span className="text-sm font-medium">초청장 안내</span>
          </div>
          <p className="text-sm text-white/60">
            기관당 1인 입장 제한 · 본 초청장 소지자에 한해 입장 가능합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
