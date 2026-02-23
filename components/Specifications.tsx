import FadeUp from "./FadeUp";

const specs = [
  ["Power Supply (DC)", "0–30V / 5A, Regulated"],
  ["Power Supply (AC)", "0–240V, 50/60Hz"],
  ["Signal Generator", "10Hz – 1MHz, Sine/Square/Triangle"],
  ["Display", "4-digit 7-segment + LCD"],
  ["Voltage Accuracy", "±0.1% FS"],
  ["Current Accuracy", "±0.2% FS"],
  ["Protection", "OVP, OCP, SCP (all channels)"],
  ["Input Voltage", "230V AC ±10%, 50Hz"],
  ["Dimensions", "500 × 350 × 150 mm"],
  ["Weight", "4.5 kg"],
  ["Operating Temp", "0°C to 45°C"],
  ["Certification", "CE, RoHS, ISO 9001"],
];

const highlights = [
  { num: "±0.1", unit: "%", label: "Voltage Accuracy" },
  { num: "5", unit: "A", label: "Max Current Output" },
  { num: "30", unit: "+", label: "Experiments Included" },
  { num: "2", unit: "yr", label: "Parts Warranty" },
];

export default function Specifications() {
  return (
    <section id="specifications" className="py-24 bg-gray50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeUp>
            <span className="badge">Technical Specifications</span>
            <h2 className="section-title">Built to Precision Standards</h2>
            <p className="section-sub" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Example: AC/DC Circuit Analysis Trainer Kit (Model EK-ACT-01)
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-5 mt-8">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-white rounded-[14px] p-6 border-[1.5px] border-gray100 text-center"
                >
                  <div style={{ fontFamily: "var(--font-syne)" }}>
                    <span className="text-[2.2rem] font-extrabold leading-none" style={{ color: "#1356e8" }}>
                      {h.num}
                    </span>
                    <span className="text-base font-semibold text-navy">{h.unit}</span>
                  </div>
                  <div className="text-[0.8rem] text-gray400 mt-1.5" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right — table */}
          <FadeUp delay={2}>
            <div className="bg-white rounded-[18px] overflow-hidden border-[1.5px] border-gray100">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th
                      className="text-left px-5 py-4 text-[0.82rem] tracking-widest uppercase text-white"
                      style={{ background: "#0a1628", fontFamily: "var(--font-syne)" }}
                    >
                      Parameter
                    </th>
                    <th
                      className="text-left px-5 py-4 text-[0.82rem] tracking-widest uppercase text-white"
                      style={{ background: "#0a1628", fontFamily: "var(--font-syne)" }}
                    >
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map(([param, value], i) => (
                    <tr key={param} className={i % 2 === 1 ? "bg-gray50" : "bg-white"}>
                      <td
                        className="px-5 py-3.5 text-[0.9rem] font-semibold text-navy border-b border-gray100 w-[45%]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {param}
                      </td>
                      <td
                        className="px-5 py-3.5 text-[0.9rem] text-gray600 border-b border-gray100"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
