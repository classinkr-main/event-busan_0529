const schedule = [
  {
    time: "13:00 — 13:20",
    title: "개회사 및 오프닝",
    description: "행사 시작 및 환영사, 주요 인사 소개.",
  },
  {
    time: "13:20 — 18:00",
    title: "한·중·일·베 대표 기관 발표",
    description:
      "아시아 4개국 교육 리더들의 AI 기반 교육 혁신 사례 및 미래 전략 발표.",
  },
  {
    time: "18:00 —",
    title: "저녁 만찬",
    description: "참가자 간 네트워킹 및 비공개 라운드테이블.",
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="relative py-20 sm:py-32 md:py-40">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-white/50 mb-3 sm:mb-4">AGENDA</p>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight">
            5<span className="text-gradient">/</span>29
          </h2>
          <div className="mt-2 sm:mt-3 text-base sm:text-2xl text-white/70 font-light tracking-wider">
            2026 · FRIDAY
          </div>

          <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 glass rounded-full px-4 sm:px-5 py-2 sm:py-2.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/70 sm:w-4 sm:h-4">
              <path
                d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13zM12 12a3 3 0 100-6 3 3 0 000 6z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs sm:text-sm text-white/80">부산 WP과사람 교육기업 WP타워</span>
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="space-y-5 sm:space-y-8">
            {schedule.map((item, idx) => (
              <div
                key={item.time}
                className={`relative flex flex-col sm:flex-row gap-6 ${
                  idx % 2 === 0 ? "" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[var(--accent-from)] to-[var(--accent-to)] ring-4 ring-[#02060f]" />

                <div className="pl-10 sm:pl-0 sm:flex-1 sm:px-8">
                  <div
                    className={`glass-strong rounded-2xl p-5 sm:p-7 ${
                      idx % 2 === 0 ? "sm:text-right" : ""
                    }`}
                  >
                    <div className="text-[11px] sm:text-xs tracking-[0.2em] text-[var(--accent-from)] mb-1.5 sm:mb-2 font-medium">
                      {item.time}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-semibold mb-1.5 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block sm:flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
