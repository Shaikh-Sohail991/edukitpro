import FadeUp from "./FadeUp";

const testimonials = [
  {
    initials: "RP",
    name: "Dr. Rajesh Patel",
    role: "HoD, EE — NIT Surat",
    quote:
      "The PLC Automation Trainer has transformed our industrial electronics lab. Students are practically ready for the factory floor before they graduate. Excellent build quality and the documentation is outstanding.",
  },
  {
    initials: "SK",
    name: "Prof. Sunita Kulkarni",
    role: "Principal — Govt Polytechnic Pune",
    quote:
      "We equipped our entire electronics department with EduKit Pro trainers. The warranty support and AMC are unmatched. Three years in and not a single major breakdown. Truly reliable partners.",
  },
  {
    initials: "AM",
    name: "Anil Menon",
    role: "Lab Coordinator — PESIT Bangalore",
    quote:
      "The microcontroller kits are perfectly aligned with our VTU curriculum. Students love the intuitive layout, and the lab manual with viva questions saves us so much preparation time each semester.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="badge">Testimonials</span>
          <h2 className="section-title">Trusted by Educators Nationwide</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={(i % 3) as 0 | 1 | 2}>
              <div
                className="bg-white rounded-[18px] p-7 border-[1.5px] border-gray100
                           transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:-translate-y-0.5"
              >
                <div className="text-amber text-base tracking-[2px] mb-4">★★★★★</div>
                <blockquote
                  className="text-[0.92rem] leading-[1.75] text-gray600 mb-6 italic"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-[0.95rem] flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #1356e8, #00d4ff)",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-[0.92rem] text-navy"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-[0.78rem] text-gray400 mt-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
