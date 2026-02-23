"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const products = [
  {
    slug: "digital-analog-multimeter",
    title: "Digital & Analog Multimeter",
    badge: "New",
    img: "/multimeter.webp",
    shortDesc: "Digital & analog multimeters for measuring voltage, current, and resistance accurately.",
    description:
      "Our Digital & Analog Multimeter trainers are engineered for educational labs that need both modern digital precision and the intuitive needle-based readout of analog meters. Ideal for teaching students to compare measurement methodologies and understand loading effects.",
    features: [
      "Dual-mode: digital LCD + analog needle display for comparative learning",
      "Measures AC/DC voltage (0–750V), current (0–10A), and resistance (0–20MΩ)",
      "Auto-ranging with manual override for advanced experiment control",
      "Built-in diode test, continuity buzzer, and transistor hFE measurement",
      "Overload protection on all ranges — safe for student use",
      "Banana-plug input terminals compatible with standard lab leads",
    ],
    specs: [
      ["DC Voltage Range", "0–1000V (6 ranges)"],
      ["AC Voltage Range", "0–750V (5 ranges)"],
      ["DC Current", "0–10A (6 ranges)"],
      ["Resistance", "0–20MΩ (7 ranges)"],
      ["Accuracy (DCV)", "±0.5% ±2 digits"],
      ["Display", "3½ digit LCD + 43-segment analog bar"],
      ["Frequency", "5Hz – 100kHz"],
      ["Certification", "CE, RoHS"],
    ],
  },
  {
    slug: "digital-storage-oscilloscope",
    title: "Digital Storage Oscilloscope",
    badge: "Popular",
    img: "/Oscilloscope.webp",
    shortDesc: "Digital storage oscilloscope for observing and analyzing electronic signals.",
    description:
      "The Digital Storage Oscilloscope (DSO) trainer is the centerpiece of any electronics lab. Capture, freeze, and analyze transient waveforms with precision. Students can observe real circuit behavior — from audio amplifiers to switching power supplies — and export data for lab reports.",
    features: [
      "Dual-channel with 100 MHz bandwidth for wide experiment coverage",
      "1 GSa/s real-time sampling — captures fast transients accurately",
      "7-inch colour TFT display with adjustable intensity and grid",
      "Waveform math: ADD, SUB, MUL, FFT spectrum analysis",
      "USB storage for waveform screenshots and CSV data export",
      "Auto-trigger, edge, pulse, video, and slope trigger modes",
    ],
    specs: [
      ["Bandwidth", "100 MHz (2 channels)"],
      ["Sample Rate", "1 GSa/s (real-time)"],
      ["Memory Depth", "40K points per channel"],
      ["Display", "7\" TFT Color LCD, 800×480"],
      ["Vertical Sensitivity", "2mV/div – 5V/div"],
      ["Time Base", "2ns/div – 50s/div"],
      ["Input Impedance", "1MΩ ± 2% || 18pF ± 3pF"],
      ["Certification", "CE, RoHS"],
    ],
  },
  {
    slug: "power-supply",
    title: "Power Supply",
    badge: "Featured",
    img: "/powersupply.webp",
    shortDesc: "DC power supply for providing adjustable voltage and current to circuits.",
    description:
      "A stable, regulated DC power supply is the backbone of every electronics lab. Our benchtop trainer models deliver clean, ripple-free output with precise voltage and current control — protecting student-built circuits and expensive components from accidental damage.",
    features: [
      "Triple output: 0–30V/5A (×2 independent channels) + fixed 5V/3A",
      "Series and parallel tracking modes for flexible supply configurations",
      "Large 4-digit LED displays for voltage and current on each channel",
      "Built-in OVP, OCP, and short-circuit protection on all outputs",
      "Low noise: <1mVrms ripple — suitable for sensitive analog circuits",
      "Solid aluminium enclosure with forced-air cooling for continuous operation",
    ],
    specs: [
      ["Output Voltage", "0–30V (×2), 5V fixed"],
      ["Output Current", "0–5A (×2), 3A fixed"],
      ["Load Regulation", "≤0.01% + 3mV"],
      ["Line Regulation", "≤0.01% + 3mV"],
      ["Ripple & Noise", "<1mVrms"],
      ["Display", "4-digit LED (V & A each channel)"],
      ["Input", "230V AC ±10%, 50/60Hz"],
      ["Certification", "CE, RoHS, ISO 9001"],
    ],
  },
  {
    slug: "function-generators",
    title: "Function Generators",
    badge: "Featured",
    img: "/function-generator.webp",
    shortDesc: "Function generators for producing various electrical waveforms in labs.",
    description:
      "Function generators are essential for signal-injection experiments in analog and digital labs. Our DDS-based trainers produce stable, low-distortion waveforms across a wide frequency range with precise digital control — giving students repeatable results every time.",
    features: [
      "DDS technology: sine, square, triangle, sawtooth, and pulse waveforms",
      "Frequency range: 0.1Hz to 10MHz with 7-digit frequency resolution",
      "Amplitude: 0–20Vpp into 50Ω; TTL sync output for digital experiments",
      "Sweep function (linear/log) with external FM input for modulation labs",
      "DC offset control: ±10V to shift waveforms for biasing experiments",
      "Large backlit LCD showing frequency, amplitude, and waveform type",
    ],
    specs: [
      ["Waveforms", "Sine, Square, Triangle, Ramp, Pulse"],
      ["Frequency Range", "0.1Hz – 10MHz"],
      ["Frequency Resolution", "0.1Hz (DDS)"],
      ["Amplitude", "0–20Vpp (into 50Ω)"],
      ["THD (Sine)", "<0.5% (at 1kHz)"],
      ["Square Rise Time", "<25ns"],
      ["Output Impedance", "50Ω ±10%"],
      ["Certification", "CE, RoHS"],
    ],
  },
];

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = products.find((p) => p.slug === slug);
  const others = products.filter((p) => p.slug !== slug);

  if (!product) {
    return (
      <div style={{ minHeight: "100vh", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", color: "#0a1628" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Product not found</h1>
          <Link href="/" style={{ color: "#dc2626" }}>← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "white" }}>

      {/* HEADER */}
      {/* <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "white",
        borderBottom: "1px solid #e5e7eb",
        padding: "0 2rem",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}> */}
      <header style={{
  position: "sticky", top: 0, zIndex: 50,
  background: "rgba(10,22,40,0.95)",
  backdropFilter: "blur(16px)",
  borderBottom: "1px solid rgba(255,255,255,0.07)",
  padding: "0 2rem",
}}>
        <div style={{ maxWidth: 1200, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 36, height: 36, borderRadius: 9,
              background: "linear-gradient(135deg, #dc2626, #ff4444)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, color: "white", fontSize: 13,
            }}>EK</div>
            <span style={{ fontWeight: 800, fontSize: "1.15rem" }}>
              <span className="font-extrabold text-[1.2rem] leading-none" style={{ color: "#dc2626" }}>EduKit</span>{" "}
              <span style={{ color: "white" }}>Pro</span>
            </span>
          </Link>

          {/* All Products link */}
    <Link href="/#products" style={{
  color: "white",
  textDecoration: "none",
  fontSize: "0.9rem",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "8px 16px",
  borderRadius: 8,
  border: "1.5px solid rgba(255,255,255,0.15)",
}}>
  ← All Products
</Link>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb", padding: "0 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 0", fontSize: "0.82rem", color: "#9ca3af", display: "flex", gap: 8, flexWrap: "wrap" as const }}>
          <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link href="/#products" style={{ color: "#9ca3af", textDecoration: "none" }}>Products</Link>
          <span>/</span>
          <span style={{ color: "#0a1628", fontWeight: 600 }}>{product.title}</span>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 2rem" }}>

        {/* Image + Info */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3.5rem", alignItems: "start" }}>

          {/* Image */}
          <div>
            <div style={{
              borderRadius: 20, overflow: "hidden",
              border: "1.5px solid #e5e7eb", background: "#f9fafb",
              aspectRatio: "4/3", position: "relative",
            }}>
              <Image src={product.img} alt={product.title} fill style={{ objectFit: "cover" }} />
            </div>
            {/* <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
              {[0, 1, 2].map((n) => (
                <div key={n} style={{
                  width: 72, height: 54, borderRadius: 10, overflow: "hidden", position: "relative",
                  border: `1.5px solid ${n === 0 ? "#dc2626" : "#e5e7eb"}`,
                  opacity: n === 0 ? 1 : 0.5, cursor: "pointer",
                }}>
                  <Image src={product.img} alt="" fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div> */}
          </div>

          {/* Info */}
          <div>
            {/* Badges */}
            <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: "0.78rem", fontWeight: 600, padding: "6px 12px", borderRadius: 99,
                background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#16a34a",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
                In Stock
              </span>
              <span style={{
                fontSize: "0.72rem", fontWeight: 700, padding: "6px 12px", borderRadius: 99,
                background: "linear-gradient(135deg, #1356e8, #00d4ff)", color: "white",
                letterSpacing: "0.08em", textTransform: "uppercase" as const,
              }}>
                {product.badge}
              </span>
            </div>

            <h1 style={{ fontWeight: 800, color: "#0a1628", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1.1, marginBottom: 20 }}>
              {product.title}
            </h1>

            <p style={{ color: "#9ca3af", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: 8 }}>Description</p>
            <p style={{ color: "#374151", fontSize: "0.97rem", lineHeight: 1.75, marginBottom: 28 }}>{product.description}</p>

            <p style={{ color: "#9ca3af", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: 14 }}>Key Features</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0", display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {product.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: "50%", flexShrink: 0, marginTop: 2,
                    background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)",
                    color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem",
                  }}>✓</span>
                  <span style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.6 }}>{f}</span>
                </li>
              ))}
            </ul>

            {/* Quote CTA */}
            <div style={{
              borderRadius: 16, padding: "20px 22px",
              background: "#f9fafb", border: "1.5px solid #e5e7eb",
              display: "flex", gap: 16, alignItems: "flex-start",
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, flexShrink: 0, background: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>📋</div>
              <div>
                <div style={{ color: "#0a1628", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Need a Quote?</div>
                <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: 10 }}>Contact us for pricing, bulk orders, or custom configuration.</p>
                {/* <Link href="/#contact" style={{ color: "#dc2626", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none" }}>
                  Request a Quote →
                </Link> */}
                <a href="https://lovosis.in/products" target="_blank" rel="noopener noreferrer" style={{ color: "#dc2626", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none" }}>
  Request a Quote →
</a>
              </div>
            </div>
          </div>
        </div>

        {/* SPECS TABLE */}
        <div style={{ marginTop: 80 }}>
          <p style={{ color: "#dc2626", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: 8 }}>Technical Specifications</p>
          <h2 style={{ color: "#0a1628", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", marginBottom: 28 }}>Detailed Specifications</h2>
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1.5px solid #e5e7eb" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" as const, padding: "14px 24px", background: "#0a1628", color: "white", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, width: "40%" }}>Parameter</th>
                  <th style={{ textAlign: "left" as const, padding: "14px 24px", background: "#0a1628", color: "white", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map(([param, value], i) => (
                  <tr key={param} style={{ background: i % 2 === 0 ? "white" : "#f9fafb" }}>
                    <td style={{ padding: "14px 24px", color: "#0a1628", fontSize: "0.9rem", fontWeight: 600, borderBottom: "1px solid #e5e7eb" }}>{param}</td>
                    <td style={{ padding: "14px 24px", color: "#6b7280", fontSize: "0.9rem", borderBottom: "1px solid #e5e7eb" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* OTHER PRODUCTS */}
        <div style={{ marginTop: 80 }}>
          <h2 style={{ color: "#0a1628", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", marginBottom: 28 }}>Other Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                style={{
                  display: "flex", gap: 16, alignItems: "center",
                  borderRadius: 14, padding: "14px 16px", textDecoration: "none",
                  background: "white", border: "1.5px solid #e5e7eb", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#dc2626";
                  (e.currentTarget as HTMLElement).style.background = "#fff5f5";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb";
                  (e.currentTarget as HTMLElement).style.background = "white";
                }}
              >
                <div style={{ width: 64, height: 52, borderRadius: 10, overflow: "hidden", position: "relative", flexShrink: 0, border: "1px solid #e5e7eb" }}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ color: "#0a1628", fontWeight: 700, fontSize: "0.9rem", marginBottom: 4 }}>{p.title}</div>
                  <div style={{ color: "#9ca3af", fontSize: "0.78rem", lineHeight: 1.5 }}>{p.shortDesc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #e5e7eb", background: "#0a1628",
        padding: "28px 2rem", textAlign: "center" as const,
        color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: 80,
      }}>
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "#dc2626", fontWeight: 700 }}>EduKit</span>{" "}
        <span style={{ color: "white", fontWeight: 700 }}>Pro</span>{" "}
        — All Rights Reserved
      </footer>

    </div>
  );
}