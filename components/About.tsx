import FadeUp from "./FadeUp";

const features = [
  {
    icon: "🏭",
    title: "Industry-Aligned Curriculum",
    desc: "All kits are designed in consultation with industry experts and align with current engineering curriculum standards.",
  },
  {
    icon: "🔬",
    title: "Research-Grade Components",
    desc: "We use only precision-grade components and lab-quality instruments ensuring accuracy and repeatability in experiments.",
  },
  {
    icon: "🛡️",
    title: "Safety First Design",
    desc: "Every kit meets IEC 61010 safety standards with built-in protections against over-voltage and short-circuit conditions.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <FadeUp>
            <div className="relative">
              <div
                className="rounded-[20px] aspect-square flex items-center justify-center overflow-hidden p-8"
                style={{ background: "linear-gradient(145deg, #0a1628, #0f2044)" }}
              >
                <svg viewBox="0 0 280 280" className="w-[90%]" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="280" height="280" rx="12" fill="#0a1628"/>
                  <rect x="20" y="200" width="240" height="4" fill="#1a3a6e" rx="2"/>
                  <rect x="20" y="140" width="240" height="4" fill="#1a3a6e" rx="2"/>
                  <rect x="20" y="80" width="240" height="4" fill="#1a3a6e" rx="2"/>
                  <rect x="30" y="148" width="60" height="48" rx="4" fill="#1356e8"/>
                  <rect x="34" y="152" width="52" height="20" rx="2" fill="#0d1e3d"/>
                  <circle cx="60" cy="185" r="8" fill="#00d4ff"/>
                  <circle cx="60" cy="185" r="4" fill="white"/>
                  <rect x="100" y="155" width="50" height="41" rx="4" fill="#142d5a"/>
                  <rect x="104" y="159" width="42" height="25" rx="2" fill="#0a1628"/>
                  <text x="108" y="175" fill="#1356e8" fontSize="8" fontFamily="monospace">12.50V</text>
                  <rect x="160" y="150" width="80" height="46" rx="4" fill="#1a3570"/>
                  <rect x="164" y="154" width="50" height="30" rx="2" fill="#0a1628"/>
                  <polyline points="166,169 176,162 186,175 196,160 206,170 212,165" stroke="#00d4ff" strokeWidth="1.5" fill="none"/>
                  <rect x="30" y="88" width="70" height="48" rx="4" fill="#1a3a6e"/>
                  <rect x="34" y="92" width="62" height="36" rx="2" fill="#0a1628"/>
                  <circle cx="65" cy="110" r="14" fill="#142d5a" stroke="#1356e8" strokeWidth="1.5"/>
                  <circle cx="65" cy="110" r="7" fill="#1356e8"/>
                  <rect x="110" y="92" width="50" height="44" rx="4" fill="#142d5a"/>
                  <rect x="114" y="96" width="42" height="16" rx="2" fill="#0a1628"/>
                  <circle cx="125" cy="120" r="5" fill="#ffb800"/>
                  <circle cx="140" cy="120" r="5" fill="#4c84ff"/>
                  <circle cx="155" cy="120" r="5" fill="#00d4ff"/>
                  <rect x="170" y="88" width="80" height="48" rx="4" fill="#1a3570"/>
                  <rect x="174" y="92" width="72" height="32" rx="2" fill="#0a1628"/>
                  <text x="178" y="112" fill="#4c84ff" fontSize="8" fontFamily="monospace">TRAINER</text>
                  <text x="178" y="122" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">EduKit Pro</text>
                  <path d="M60 200 Q60 220 90 230" stroke="#ffb800" strokeWidth="1.5" fill="none" opacity="0.6"/>
                  <path d="M210 200 Q210 215 180 230" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.6"/>
                </svg>
              </div>

              {/* Badge */}
              <div className="absolute bottom-6 -right-6 bg-white rounded-[14px] px-5 py-4
                             shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div
                  className="text-[1.8rem] font-extrabold leading-none"
                  style={{ color: "#1356e8", fontFamily: "var(--font-syne)" }}
                >
                  15+
                </div>
                <div className="text-[0.78rem] text-gray400 mt-0.5" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Years in Education<br />Equipment
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={2}>
            <span className="badge">About EduKit Pro</span>
            <h2 className="section-title">Built for the Next Generation of Engineers</h2>
            <p className="section-sub" style={{ fontFamily: "var(--font-dm-sans)" }}>
              We design and manufacture professional-grade electrical and electronics training kits that
              bridge the gap between theoretical knowledge and practical industry skills.
            </p>

            <div className="flex flex-col gap-5 mt-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-[10px] flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "rgba(19,86,232,0.1)" }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4
                      className="text-base font-bold text-navy mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {f.title}
                    </h4>
                    <p className="text-[0.88rem] text-gray600 leading-[1.6]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
