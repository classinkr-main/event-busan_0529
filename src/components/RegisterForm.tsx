"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function RegisterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "신청 처리 중 문제가 발생했습니다.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "알 수 없는 오류";
      setErrorMsg(msg);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-strong rounded-3xl p-10 sm:p-14 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-from)] to-[var(--accent-to)] flex items-center justify-center mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12l5 5L20 7"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
          신청이 완료되었습니다
        </h3>
        <p className="mt-4 text-white/60 leading-relaxed">
          입력해주신 이메일로 확인 메일을 보내드립니다.
          <br />
          행사장에서 뵙겠습니다.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm text-white/50 hover:text-white underline underline-offset-4 transition-colors"
        >
          새 신청서 작성
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-7 sm:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="이름" name="name" placeholder="홍길동" required />
        <Field label="소속" name="organization" placeholder="기관/회사명" required />
        <Field label="직책" name="position" placeholder="대표 / 디렉터 등" required />
        <Field label="연락처" name="phone" type="tel" placeholder="010-0000-0000" required />
        <div className="sm:col-span-2">
          <Field label="이메일" name="email" type="email" placeholder="name@example.com" required />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm text-white/70 mb-2 font-medium">
            저녁 만찬 참석 여부
          </label>
          <div className="grid grid-cols-2 gap-3">
            <RadioCard name="dinner" value="참석" label="참석" defaultChecked />
            <RadioCard name="dinner" value="불참" label="불참" />
          </div>
        </div>
      </div>

      {status === "error" && (
        <div className="mt-6 rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-sm text-orange-200">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
      >
        {status === "submitting" ? "신청 중..." : "신청 제출하기"}
      </button>

      <p className="mt-5 text-xs text-white/40 text-center leading-relaxed">
        제출하신 정보는 본 행사 운영 목적으로만 사용되며, 행사 종료 후 안전하게 폐기됩니다.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-white/70 mb-2 font-medium">
        {label}
        {required && <span className="text-[var(--accent-from)] ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="field"
      />
    </div>
  );
}

function RadioCard({
  name,
  value,
  label,
  defaultChecked,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="relative cursor-pointer group">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-center text-sm font-medium text-white/70 transition-all peer-checked:border-[var(--accent-from)] peer-checked:bg-[var(--accent-from)]/10 peer-checked:text-white group-hover:bg-white/[0.06]">
        {label}
      </div>
    </label>
  );
}
