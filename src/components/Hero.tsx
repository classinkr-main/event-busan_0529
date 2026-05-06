export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1564415051543-cb7bc7079c4f?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02060f]/40 via-[#02060f]/70 to-[#02060f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02060f] via-transparent to-transparent" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 py-32">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/60" />
            <span className="text-xs sm:text-sm tracking-[0.4em] text-white/70 font-medium">
              VIP INVITATION
            </span>
          </div>

          <h1 className="font-bold tracking-tight leading-[1.05]">
            <span className="block text-5xl sm:text-7xl md:text-8xl text-white">
              2026 ASIA
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl text-gradient">
              AI EDUCATION
            </span>
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl text-white/80 tracking-[0.3em] font-light">
              IN BUSAN
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">
            배움이 일어나는 공간은 어떤 모습이어야 할까요.
            <br />
            AI가 교실의 문법을 다시 쓰고 있는 지금,
            <br />
            아시아 4개국 교육 리더들이 한자리에 모여
            <br />
            스마트 교육의 미래 전략과 현장의 경험을 나눕니다.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <a
              href="#register"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all hover:scale-[1.02]"
            >
              참가 신청하기
            </a>
            <a
              href="#agenda"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-all"
            >
              일정 자세히 보기
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] float-slow">
        SCROLL
      </div>
    </section>
  );
}
