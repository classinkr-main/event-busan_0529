type Institution = {
  name: string;
  nameLocal: string;
  country: string;
  flag: string;
  description: string;
};

const institutions: Institution[] = [
  {
    name: "新东方国际教育",
    nameLocal: "신동방 국제교육",
    country: "China",
    flag: "🇨🇳",
    description:
      "국제교육 분야 1위 그룹. 전국 50+ 핵심 도시 커버, IELTS·TOEFL·AP·A-Level·IB 전 과정 제공. '어학 교육 + 국제 커리큘럼 + 진학 컨설팅' 원스톱 모델로 중국 유학 교육 벤치마크.",
  },
  {
    name: "作业帮",
    nameLocal: "쮜예방",
    country: "China",
    flag: "🇨🇳",
    description:
      "누적 활성 기기 10억+, 월 활성 사용자 1.7억의 중국 최대 K-12 온라인 교육 플랫폼. AI 학습 진단·실시간 Q&A 기반 대규모 라이브 클래스 운영 1위.",
  },
  {
    name: "卓越教育",
    nameLocal: "탁월교육",
    country: "China",
    flag: "🇨🇳",
    description:
      "1997년 설립, 화남지역 대표 교육기관. 교사 3,000명, 연간 학생 30만 명+, 276개 캠퍼스, 2018년 홍콩 IPO 상장.",
  },
  {
    name: "邦德华纳",
    nameLocal: "방더화나",
    country: "China",
    flag: "🇨🇳",
    description:
      "화남 지역 대표 교육기관. 제주 지역 20년+ 운영, 학생 2만 명+, 30+ 캠퍼스, K12 전 과목 보충교육. '오프라인 소그룹 + 지역 맞춤형 교연' 모델.",
  },
  {
    name: "蓝天教育",
    nameLocal: "Sky Edu",
    country: "China",
    flag: "🇨🇳",
    description:
      "선전 지역 대표 학원. 화남 지역 20년 운영, 캠퍼스 20+, 학생 5만 명+. 유아~고등 전 학년 대상 소수정예·수준별 반 운영.",
  },
  {
    name: "SAPIX·代々ミ",
    nameLocal: "사픽스",
    country: "Japan",
    flag: "🇯🇵",
    description:
      "1962년 설립, 일본 진학교육 톱티어 그룹. SAPIX 초등부 재적 3.5만~4만 명, 카이세이 중학 합격률 70%·오인 중학 60%, 일본 중심시 트랙 선도.",
  },
  {
    name: "CKC",
    nameLocal: "CKC",
    country: "Japan",
    flag: "🇯🇵",
    description:
      "1977년 설립, 일본 대형 종합 교육그룹(본사 나고야). 산하 '나비 개별지도학원' 직영 교실 900+개, 영유아~고등 전 연령 커버. '오프라인+교재+온라인' 일체화 생태계.",
  },
  {
    name: "河合塾",
    nameLocal: "가와이주쿠",
    country: "Japan",
    flag: "🇯🇵",
    description:
      "1933년 창립, 일본 3대 예비교. 캠퍼스 약 508개, 연간 모의고사 응시자 약 270만 명. 대학 입시 편차치 체계 최초 도입, 일본 진학시험 분야 표준.",
  },
  {
    name: "Qanda Vietnam",
    nameLocal: "콴다 베트남",
    country: "Vietnam",
    flag: "🇻🇳",
    description:
      "순수 온라인 듀얼터치 대형 강의 플랫폼. 한 클래스당 4,000명+ 동시 수강, 사용자 6만+, Google Play 베트남 교육 카테고리 1위, 누적 다운로드 수백만.",
  },
  {
    name: "Giáo dục Galaxy",
    nameLocal: "Galaxy Education",
    country: "Vietnam",
    flag: "🇻🇳",
    description:
      "2007년 설립, 베트남 최대 온라인 교육 플랫폼. 누적 학습자 800만+ 명, 서비스 34개국 확장, 2025년 1,000만 달러 투자 유치.",
  },
];

export default function Institutions() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-white/50 mb-4">
            PARTICIPATING INSTITUTIONS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            해외 주요 참가 기관
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            중국 30+ · 일본 10 · 베트남 10 · 한국 100여 명{" "}
            <span className="text-white/40">— 약 150명 규모의 행사</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {institutions.map((inst) => (
            <article
              key={inst.name}
              className="glass rounded-3xl p-8 hover:bg-white/[0.06] transition-all group"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="text-3xl">{inst.flag}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight">
                    {inst.name}
                  </h3>
                  <div className="mt-1 text-sm text-white/50">
                    {inst.nameLocal} · {inst.country}
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-[15px] leading-relaxed text-white/70">
                {inst.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
