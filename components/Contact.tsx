"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const contactInfo = [
  {
    icon: "📍",
    label: "Address",
    value: "4-72/2, Swathi Building, 3rd Floor, Opp. Singapura Garden, 1st Main Lakshmipura Road Abbigere, Bengaluru, Karnataka 560013",
    link: "https://www.google.com/maps?q=Swathi+Building+Abbigere+Bangalore"
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 9747745544 | +91 7012970281",
    link: "tel:+919747745544"
  },
  {
    icon: "📧",
    label: "Email",
    value: "info@lovosis.in",
    link: "mailto:info@lovosis.in"
  },
  {
    icon: "🕐",
    label: "Working Hours",
    value: "Monday – Saturday, 9:30am – 6:30pm"
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a1628, #0f2044)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-100px", right: "-100px", width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(19,86,232,0.2) 0%, transparent 65%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left info */}
          <FadeUp>
            <span
              className="inline-block rounded-full text-[0.75rem] font-semibold tracking-widest uppercase px-3.5 py-1.5 mb-4 border"
              style={{
                background: "rgba(0,212,255,0.1)", borderColor: "rgba(0,212,255,0.25)",
                color: "#00d4ff", fontFamily: "var(--font-dm-sans)",
              }}
            >
              Get In Touch
            </span>
            <h2
              className="font-extrabold text-white leading-[1.1] mb-4"
              style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              Ready to Equip Your Lab?
            </h2>
            <p
              className="text-[1.05rem] leading-[1.7] max-w-[540px]"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-dm-sans)" }}
            >
              Reach out for product demos, bulk quotes, or custom lab setup consultations.
              Our team responds within one business day.
            </p>

            <div className="flex flex-col gap-5 mt-10">
              {contactInfo.map((ci) => (
                <div key={ci.label} className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center text-lg flex-shrink-0 border"
                    style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    {ci.icon}
                  </div>
                  <div>
                    <div
                      className="text-[0.78rem] uppercase tracking-widest font-semibold mb-1"
                      style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      {ci.label}
                    </div>
                    {ci.link ? (
                      <a
                        href={ci.link}
                        target={ci.link.startsWith("http") ? "_blank" : undefined}
                        rel={ci.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[0.95rem] hover:text-[#00d4ff] transition-colors"
                        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {ci.value}
                      </a>
                    ) : (
                      <p
                        className="text-[0.95rem]"
                        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-dm-sans)" }}
                      >
                        {ci.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right form */}
          <FadeUp delay={2}>
            <div
              className="rounded-[20px] p-9 border"
              style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
            >
              <h3
                className="text-white text-[1.3rem] font-bold mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Request a Quote
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h4
                    className="text-white text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Thank you!
                  </h4>
                  <p className="text-[rgba(255,255,255,0.6)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    We&apos;ll respond within one business day.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="First Name" placeholder="Rajesh" type="text" />
                    <FormField label="Last Name" placeholder="Sharma" type="text" />
                  </div>
                  <FormField label="Email Address" placeholder="principal@college.edu" type="email" />
                  <FormField label="Institution Name" placeholder="Your college / polytechnic name" type="text" />

                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[0.82rem] font-semibold"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      Product Interest
                    </label>
                    <select
                      className="rounded-[10px] px-4 py-3 text-[0.92rem] outline-none border"
                      style={{
                        background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.12)",
                        color: "white", fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      <option value="" style={{ background: "#0a1628" }}>Select a product category</option>
                      {["AC/DC Circuit Trainers","Digital Electronics Kits","Power Electronics Trainers","Microcontroller Kits","PLC / Automation Trainers","Communication Lab Kits","Complete Lab Setup"].map(o => (
                        <option key={o} style={{ background: "#0a1628" }}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[0.82rem] font-semibold"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-dm-sans)" }}
                    >
                      Message / Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your requirements, quantity needed, timeline..."
                      className="rounded-[10px] px-4 py-3 text-[0.92rem] outline-none border resize-y"
                      style={{
                        background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.12)",
                        color: "white", fontFamily: "var(--font-dm-sans)",
                      }}
                    />
                  </div>

                  <button
                    onClick={() => setSubmitted(true)}
                    className="btn btn-primary w-full justify-center mt-2"
                    style={{ padding: "15px", fontSize: "1rem" }}
                  >
                    Send Quote Request →
                  </button>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-[0.82rem] font-semibold"
        style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-dm-sans)" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-[10px] px-4 py-3 text-[0.92rem] outline-none border"
        style={{
          background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.12)",
          color: "white", fontFamily: "var(--font-dm-sans)",
        }}
      />
    </div>
  );
}