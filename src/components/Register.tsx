import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <section id="register" className="relative py-32 sm:py-40">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-white/50 mb-4">
            REGISTRATION
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            참가 신청
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed">
            기관당 1인 입장 제한이 있으니, 동일 기관의 동료 분들도 각자 신청해 주세요.
          </p>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}
