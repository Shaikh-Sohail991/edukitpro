"use client";
import FadeUp from "./FadeUp";

const features = [
  { num: "01 — DESIGN", icon: "🎯", title: "Curriculum-Aligned Experiments", desc: "Every kit ships with 30–50 structured experiments mapped to AICTE/VTU/GTU syllabus topics so labs run on day one." },
  { num: "02 — SAFETY", icon: "🛡️", title: "Triple-Layer Protection", desc: "Over-voltage, over-current, and short-circuit protection at component, module, and system level. No surprises in the lab." },
  { num: "03 — QUALITY", icon: "🔬", title: "Calibrated & Certified", desc: "All measuring instruments are factory calibrated and shipped with calibration certificates. ISO 9001:2015 manufacturing." },
  { num: "04 — SUPPORT", icon: "📚", title: "Comprehensive Documentation", desc: "Detailed lab manuals with theory, procedure, observations, result tables, and viva questions included with every kit." },
  { num: "05 — LIFECYCLE", icon: "🔧", title: "5-Year Service Warranty", desc: "Industry-leading warranty with on-site service support, spare parts availability, and free annual maintenance checkups." },
  { num: "06 — UPGRADE", icon: "🔄", title: "Modular & Expandable", desc: "Add-on experiment boards can be purchased separately to expand kit capabilities without replacing the base hardware." },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0a1628" }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-200px", left: "50%", transform: "translateX(-50%)",
          width: "900px", height: "600px",
          background: "radial-gradient(ellipse, rgba(19,86,232,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <span
            className="inline-block rounded-full text-[0.75rem] font-semibold tracking-widest uppercase px-3.5 py-1.5 mb-4 border"
            style={{
              background: "rgba(0,212,255,0.1)", borderColor: "rgba(0,212,255,0.25)",
              color: "#00d4ff", fontFamily: "var(--font-dm-sans)",
            }}
          >
            Why Choose Us
          </span>
          <h2
            className="font-extrabold text-white leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            Engineering Excellence in Every Kit
          </h2>
          <p
            className="text-[1.05rem] leading-[1.7] max-w-[540px] mx-auto"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-dm-sans)" }}
          >
            Purpose-built for educational environments with features that make learning intuitive, safe, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={(i % 3) as 0 | 1 | 2}>
              <div
                className="rounded-2xl p-7 border transition-all duration-300
                           hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  className="text-[0.72rem] font-bold tracking-[0.1em] mb-4"
                  style={{ color: "#00d4ff", fontFamily: "var(--font-dm-sans)" }}
                >
                  {f.num}
                </div>
                <div className="text-[2rem] mb-4">{f.icon}</div>
                <h3
                  className="text-base font-bold text-white mb-2.5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[0.87rem] leading-[1.65]"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm-sans)" }}
                >
                  {f.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
