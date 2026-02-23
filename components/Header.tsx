// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// const navLinks = [
//   { href: "#about", label: "About" },
//   { href: "#products", label: "Products" },
//   { href: "#features", label: "Features" },
//   { href: "#specifications", label: "Specs" },
//   { href: "#how-it-works", label: "How It Works" },
//   { href: "#testimonials", label: "Reviews" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);

//       const sections = document.querySelectorAll("section[id]");
//       let current = "";
//       sections.forEach((section) => {
//         if (window.scrollY >= (section as HTMLElement).offsetTop - 120) {
//           current = section.id;
//         }
//       });
//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <header
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-[rgba(10,22,40,0.95)] backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]"
//             : ""
//         }`}
//       >
//         <div className="container-custom">
//           <nav className="flex items-center justify-between h-[72px]">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2.5">
//               <div
//                 className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center
//                            font-extrabold text-white text-base flex-shrink-0"
//                 style={{
//                   background: "linear-gradient(135deg, #1356e8, #00d4ff)",
//                   fontFamily: "var(--font-syne)",
//                 }}
//               >
//                 EK
//               </div>
//               <div style={{ fontFamily: "var(--font-syne)" }}>
//                 <div className="font-extrabold text-[1.2rem] text-white leading-none">
//                   EduKit Pro
//                 </div>
//                 <div className="text-[0.65rem] font-normal text-gray400 tracking-widest uppercase mt-0.5">
//                   Training Systems
//                 </div>
//               </div>
//             </Link>

//             {/* Desktop Nav */}
//             <ul className="hidden lg:flex items-center gap-8 list-none">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     className="text-[0.92rem] font-medium transition-colors duration-200"
//                     style={{
//                       color:
//                         activeSection === link.href.slice(1)
//                           ? "white"
//                           : "rgba(255,255,255,0.75)",
//                       fontFamily: "var(--font-dm-sans)",
//                     }}
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Desktop CTA */}
//             <div className="hidden lg:flex items-center gap-3">
//               <a href="#products" className="btn-outline-nav">
//                 View Catalog
//               </a>
//               <a href="#contact" className="btn btn-primary">
//                 Request Quote
//               </a>
//             </div>

//             {/* Hamburger */}
//             <button
//               className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open menu"
//             >
//               <span className="block w-6 h-0.5 bg-white rounded-sm" />
//               <span className="block w-6 h-0.5 bg-white rounded-sm" />
//               <span className="block w-6 h-0.5 bg-white rounded-sm" />
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="fixed inset-0 bg-navy z-[999] flex flex-col gap-6 px-6 pt-24 pb-10">
//           <button
//             className="absolute top-6 right-6 bg-transparent border-none text-white text-3xl cursor-pointer"
//             onClick={() => setMobileOpen(false)}
//             aria-label="Close menu"
//           >
//             ✕
//           </button>
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => setMobileOpen(false)}
//               className="text-white text-[1.4rem] font-bold border-b border-[rgba(255,255,255,0.08)] pb-5"
//               style={{ fontFamily: "var(--font-syne)" }}
//             >
//               {link.label}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             onClick={() => setMobileOpen(false)}
//             className="text-cyan text-[1.4rem] font-bold"
//             style={{ fontFamily: "var(--font-syne)" }}
//           >
//             Request Quote →
//           </a>
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#features", label: "Features" },
  { href: "#specifications", label: "Specs" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= (section as HTMLElement).offsetTop - 120) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,22,40,0.95)] backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : ""
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div
                className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center
                           font-extrabold text-white text-base flex-shrink-0"
                style={{
                  // background: "linear-gradient(135deg, #1356e8, #00d4ff)",
                  background: "linear-gradient(135deg, #e81313, #ff4444)",
                  fontFamily: "var(--font-syne)",
                }}
              >
                EK
              </div>
              <div style={{ fontFamily: "var(--font-syne)" }}>
                {/* <div className="font-extrabold text-[1.2rem] text-white leading-none">
                  EduKit Pro
                </div> */}
               <div className="font-extrabold text-[1.2rem] leading-none">
  <span style={{ color: "#dc2626" }}>EduKit</span>{" "}
  <span style={{ color: "white" }}>Pro</span>
</div>
                <div className="text-[0.65rem] font-normal text-gray400 tracking-widest uppercase mt-0.5">
                  Training Systems
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-5 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.85rem] font-medium transition-colors duration-200 whitespace-nowrap"
                    style={{
                      color:
                        activeSection === link.href.slice(1)
                          ? "white"
                          : "rgba(255,255,255,0.75)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#products" className="btn-outline-nav">
                View Catalog
              </a>
              <a href="#contact" className="btn btn-primary">
                Request Quote
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-white rounded-sm" />
              <span className="block w-6 h-0.5 bg-white rounded-sm" />
              <span className="block w-6 h-0.5 bg-white rounded-sm" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-navy z-[999] flex flex-col gap-6 px-6 pt-24 pb-10">
          <button
            className="absolute top-6 right-6 bg-transparent border-none text-white text-3xl cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white text-[1.4rem] font-bold border-b border-[rgba(255,255,255,0.08)] pb-5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-cyan text-[1.4rem] font-bold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Request Quote →
          </a>
        </div>
      )}
    </>
  );
}