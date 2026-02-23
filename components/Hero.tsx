import CircuitSVG from "./CircuitSVG";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center p-0 overflow-hidden relative"
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #0f2044 60%, #0d1e3d 100%)",
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Glow effects */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-120px", right: "-120px", width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(19,86,232,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px", left: "-80px", width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-[120px] lg:py-[80px] pt-[120px]">
          {/* Left content */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 border"
              style={{ background: "rgba(19,86,232,0.15)", borderColor: "rgba(19,86,232,0.3)" }}>
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-dot" />
              <span className="text-[rgba(255,255,255,0.8)] text-[0.78rem] font-medium tracking-widest uppercase"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                ISO Certified Training Equipment
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-extrabold text-white leading-[1.05] mb-5"
              style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2.6rem, 5vw, 3.5rem)" }}
            >
             Educational{" "}
<span className="text-gradient">Training<br />Kits</span>
<br />for Everyone
            </h1>

            <p
              className="text-[1.1rem] leading-[1.75] mb-9 max-w-[480px]"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-dm-sans)" }}
            >
              Hands-on lab equipment designed for polytechnics, ITIs, and engineering colleges.
              Built to industry standards with real-world circuit topologies.
            </p>

            <div className="flex gap-3.5 flex-wrap">
              <a href="#products" className="btn btn-primary">🔍 Explore Products</a>
              <a href="#contact" className="btn btn-amber">Get a Quote →</a>
            </div>

            {/* Stats */}
            <div
              className="flex gap-9 mt-12 pt-9"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { num: "500+", label: "Institutions Served" },
                { num: "120+", label: "Kit Models" },
                { num: "15+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-[1.8rem] font-extrabold text-white"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="text-[0.82rem] mt-0.5"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block relative">
            {/* Top-right float badge */}
            <div
              className="absolute -top-4 -right-4 z-10 bg-[rgba(255,255,255,0.95)] rounded-xl px-4 py-2.5
                         shadow-[0_8px_24px_rgba(0,0,0,0.2)] whitespace-nowrap"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.85rem", color: "#0a1628" }}
            >
              ✅ CE Certified
              <div
                className="text-[0.7rem] font-normal mt-0.5"
                style={{ color: "#8898b8", fontFamily: "var(--font-dm-sans)" }}
              >
                IEC 61010 Compliant
              </div>
            </div>

            {/* Card */}
            <div
              className="rounded-[24px] p-8 backdrop-blur-xl"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-full rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  aspectRatio: "4/3",
                  background: "linear-gradient(135deg, #1a2d5e 0%, #0d1e3d 50%, #162040 100%)",
                }}
              >
                <CircuitSVG className="w-[85%] opacity-90" />
              </div>
            </div>

            {/* Bottom-left float badge */}
            <div
              className="absolute -bottom-4 -left-4 z-10 bg-[rgba(255,255,255,0.95)] rounded-xl px-4 py-2.5
                         shadow-[0_8px_24px_rgba(0,0,0,0.2)] whitespace-nowrap"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.85rem", color: "#1356e8" }}
            >
              ⚡ 120+ Kit Models
              <div
                className="text-[0.7rem] font-normal mt-0.5"
                style={{ color: "#8898b8", fontFamily: "var(--font-dm-sans)" }}
              >
                Updated 2024 Curriculum
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
