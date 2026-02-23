import FadeUp from "./FadeUp";

const steps = [
  { num: "1", title: "Browse & Select", desc: "Explore our catalog and select the trainer kits that match your syllabus and lab requirements." },
  { num: "2", title: "Request Quote", desc: "Fill out our quote form with quantity and institution details. We respond within 24 hours with pricing." },
  { num: "3", title: "Confirm & Deliver", desc: "Approve the quote and PO. We manufacture and deliver within 15–21 business days pan India." },
  { num: "4", title: "Install & Train", desc: "Our engineers install the equipment and train your lab staff on-site. Lab goes live on day one." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="badge">Process</span>
          <h2 className="section-title">How to Order &amp; Get Started</h2>
          <p className="section-sub mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
            From inquiry to fully operational lab — we make it smooth and fast.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[38px] left-[12.5%] w-3/4 h-0.5 z-0"
            style={{ background: "linear-gradient(90deg, #1356e8, #00d4ff)" }}
          />

          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={(i % 4) as 0 | 1 | 2 | 3} className="relative z-10 text-center px-4">
              <div
                className="w-[76px] h-[76px] rounded-full mx-auto mb-6 flex items-center justify-center
                           text-[1.5rem] font-extrabold shadow-[0_4px_20px_rgba(19,86,232,0.2)]"
                style={{
                  fontFamily: "var(--font-syne)",
                  background: i % 2 === 1 ? "#1356e8" : "white",
                  color: i % 2 === 1 ? "white" : "#1356e8",
                  border: "3px solid #1356e8",
                }}
              >
                {step.num}
              </div>
              <h3
                className="text-base font-bold text-navy mb-2.5"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[0.87rem] text-gray600 leading-[1.65]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {step.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
