// // "use client";
// // import Image from "next/image";
// // import FadeUp from "./FadeUp";

// // const products = [
// //   {
// //     title: "Digital & Analog Multimeter",
// //     desc: "Digital & analog multimeters for measuring voltage, current, and resistance accurately.",
// //     img: "/multimeter.webp",
// //     badge: "New",
// //     link: "https://lovosis.in/products/test-measuring-instrument/digital-analog-multimeter",
// //   },
// //   {
// //     title: "Digital Storage Oscilloscope",
// //     desc: "Digital storage oscilloscope for observing and analyzing electronic signals.",
// //     img: "/Oscilloscope.webp",
// //     badge: "Popular",
// //     link: "https://lovosis.in/products/test-measuring-instrument/digital-storage-oscilloscope",
// //   },
// //   {
// //     title: "Power Supply",
// //     desc: "DC power supply for providing adjustable voltage and current to circuits.",
// //     img: "/powersupply.webp",
// //     badge: "Featured",
// //     link: "https://lovosis.in/products/test-measuring-instrument/power-supply",
// //   },
// //   {
// //     title: "Function Generators",
// //     desc: "Function generators for producing various electrical waveforms in labs.",
// //     img: "/function-generator.webp",
// //     badge: "Featured",
// //     link: "https://lovosis.in/products/test-measuring-instrument/function-generators/function-generator",
// //   },
// // ];

// // export default function Products() {
// //   return (
// //     <section id="products" className="py-24 bg-white">
// //       <div className="container-custom">
// //         <div className="text-center mb-14">
// //           <span className="badge">Our Product Range</span>
// //           <h2 className="section-title">
// //             Our <span className="text-[#1356e8]">Premium</span> Products
// //           </h2>
// //           <p className="section-sub mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
// //             Complete range of training systems for every discipline of electrical and electronics engineering.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
// //           {products.map((p, i) => (
// //             <FadeUp key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
// //               <div className="bg-white border-[1.5px] border-gray100 rounded-[18px] overflow-hidden
// //                              transition-all duration-300 hover:border-[#1356e8]
// //                              hover:shadow-[0_12px_48px_rgba(19,86,232,0.12)]
// //                              hover:-translate-y-1 group h-full flex flex-col">

// //                 <div className="overflow-hidden aspect-[4/3] relative">
// //                   <Image
// //                     src={p.img}
// //                     alt={p.title}
// //                     fill
// //                     className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
// //                   />
// //                   <div className="absolute top-3 left-3 bg-[#1356e8] text-white text-[0.7rem]
// //                                  font-bold tracking-widest uppercase px-3 py-1 rounded-full">
// //                     {p.badge}
// //                   </div>
// //                 </div>

// //                 <div className="p-6 flex flex-col flex-1">
// //                   <h3
// //                     className="text-[1rem] font-bold text-navy mb-2"
// //                     style={{ fontFamily: "var(--font-syne)" }}
// //                   >
// //                     {p.title}
// //                   </h3>
// //                   <p
// //                     className="text-[0.88rem] text-gray600 leading-[1.6] mb-5 flex-1"
// //                     style={{ fontFamily: "var(--font-dm-sans)" }}
// //                   >
// //                     {p.desc}
// //                   </p>
// //                   <a
// //                     href={p.link}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="inline-flex items-center gap-2 text-[#1356e8] font-semibold text-[0.88rem]
// //                                transition-all duration-200 hover:gap-3"
// //                     style={{ fontFamily: "var(--font-syne)" }}
// //                   >
// //                     View Product
// //                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
// //                       <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //                     </svg>
// //                   </a>
// //                 </div>
// //               </div>
// //             </FadeUp>
// //           ))}
// //         </div>

// //         <FadeUp>
// //           <div
// //             className="rounded-[24px] px-16 py-14 flex flex-col md:flex-row justify-between items-center
// //                        gap-8 mt-20 relative overflow-hidden"
// //             style={{ background: "linear-gradient(135deg, #1356e8 0%, #0d3dba 100%)" }}
// //           >
// //             <div
// //               className="absolute pointer-events-none"
// //               style={{
// //                 right: "-80px", top: "-80px", width: "300px", height: "300px",
// //                 background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)",
// //               }}
// //             />
// //             <div>
// //               <h2
// //                 className="text-white font-extrabold max-w-[480px]"
// //                 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
// //               >
// //                 Need Custom Lab Setup for Your Institution?
// //               </h2>
// //               <p className="text-[rgba(255,255,255,0.7)] mt-2 text-[0.95rem]"
// //                 style={{ fontFamily: "var(--font-dm-sans)" }}>
// //                 We offer complete turnkey lab solutions with installation, training, and AMC support.
// //               </p>
// //             </div>
// //             <div className="flex flex-col sm:flex-row gap-3.5 flex-shrink-0">
// //               <a href="#contact" className="btn btn-white">Request Custom Quote</a>
// //               <a href="#contact" className="btn btn-amber">Talk to an Expert →</a>
// //             </div>
// //           </div>
// //         </FadeUp>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import FadeUp from "./FadeUp";

// const products = [
//   {
//     slug: "digital-analog-multimeter",
//     title: "Digital & Analog Multimeter",
//     desc: "Digital & analog multimeters for measuring voltage, current, and resistance accurately.",
//     img: "/multimeter.webp",
//     badge: "New",
//   },
//   {
//     slug: "digital-storage-oscilloscope",
//     title: "Digital Storage Oscilloscope",
//     desc: "Digital storage oscilloscope for observing and analyzing electronic signals.",
//     img: "/Oscilloscope.webp",
//     badge: "Popular",
//   },
//   {
//     slug: "power-supply",
//     title: "Power Supply",
//     desc: "DC power supply for providing adjustable voltage and current to circuits.",
//     img: "/powersupply.webp",
//     badge: "Featured",
//   },
//   {
//     slug: "function-generators",
//     title: "Function Generators",
//     desc: "Function generators for producing various electrical waveforms in labs.",
//     img: "/function-generator.webp",
//     badge: "Featured",
//   },
// ];

// export default function Products() {
//   return (
//     <section id="products" className="py-24 bg-white">
//       <div className="container-custom">
//         <div className="text-center mb-14">
//           <span className="badge">Our Product Range</span>
//           <h2 className="section-title">
//             Our <span className="text-[#1356e8]">Premium</span> Products
//           </h2>
//           <p className="section-sub mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
//             Complete range of training systems for every discipline of electrical and electronics engineering.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
//           {products.map((p, i) => (
//             <FadeUp key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
//               <div className="bg-white border-[1.5px] border-gray100 rounded-[18px] overflow-hidden
//                              transition-all duration-300 hover:border-[#1356e8]
//                              hover:shadow-[0_12px_48px_rgba(19,86,232,0.12)]
//                              hover:-translate-y-1 group h-full flex flex-col">

//                 <div className="overflow-hidden aspect-[4/3] relative">
//                   <Image
//                     src={p.img}
//                     alt={p.title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
//                   />
//                   <div className="absolute top-3 left-3 bg-[#1356e8] text-white text-[0.7rem]
//                                  font-bold tracking-widest uppercase px-3 py-1 rounded-full">
//                     {p.badge}
//                   </div>
//                 </div>

//                 <div className="p-6 flex flex-col flex-1">
//                   <h3
//                     className="text-[1rem] font-bold text-navy mb-2"
//                     style={{ fontFamily: "var(--font-syne)" }}
//                   >
//                     {p.title}
//                   </h3>
//                   <p
//                     className="text-[0.88rem] text-gray600 leading-[1.6] mb-5 flex-1"
//                     style={{ fontFamily: "var(--font-dm-sans)" }}
//                   >
//                     {p.desc}
//                   </p>
//                   <Link
//                     href={`/products/${p.slug}`}
//                     className="inline-flex items-center gap-2 text-[#1356e8] font-semibold text-[0.88rem]
//                                transition-all duration-200 hover:gap-3"
//                     style={{ fontFamily: "var(--font-syne)" }}
//                   >
//                     View Product
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                       <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </FadeUp>
//           ))}
//         </div>

//         <FadeUp>
//           <div
//             className="rounded-[24px] px-16 py-14 flex flex-col md:flex-row justify-between items-center
//                        gap-8 mt-20 relative overflow-hidden"
//             style={{ background: "linear-gradient(135deg, #1356e8 0%, #0d3dba 100%)" }}
//           >
//             <div
//               className="absolute pointer-events-none"
//               style={{
//                 right: "-80px", top: "-80px", width: "300px", height: "300px",
//                 background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)",
//               }}
//             />
//             <div>
//               <h2
//                 className="text-white font-extrabold max-w-[480px]"
//                 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
//               >
//                 Need Custom Lab Setup for Your Institution?
//               </h2>
//               <p className="text-[rgba(255,255,255,0.7)] mt-2 text-[0.95rem]"
//                 style={{ fontFamily: "var(--font-dm-sans)" }}>
//                 We offer complete turnkey lab solutions with installation, training, and AMC support.
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3.5 flex-shrink-0">
//               <a href="#contact" className="btn btn-white">Request Custom Quote</a>
//               <a href="#contact" className="btn btn-amber">Talk to an Expert →</a>
//             </div>
//           </div>
//         </FadeUp>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "./FadeUp";

const products = [
  {
    slug: "digital-analog-multimeter",
    title: "Digital & Analog Multimeter",
    desc: "Digital & analog multimeters for measuring voltage, current, and resistance accurately.",
    img: "/multimeter.webp",
    badge: "New",
  },
  {
    slug: "digital-storage-oscilloscope",
    title: "Digital Storage Oscilloscope",
    desc: "Digital storage oscilloscope for observing and analyzing electronic signals.",
    img: "/Oscilloscope.webp",
    badge: "Popular",
  },
  {
    slug: "power-supply",
    title: "Power Supply",
    desc: "DC power supply for providing adjustable voltage and current to circuits.",
    img: "/powersupply.webp",
    badge: "Featured",
  },
  {
    slug: "function-generators",
    title: "Function Generators",
    desc: "Function generators for producing various electrical waveforms in labs.",
    img: "/function-generator.webp",
    badge: "Featured",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="badge">Our Product Range</span>
          <h2 className="section-title">
            Our <span >Premium</span> Products
          </h2>
          <p className="section-sub mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Complete range of training systems for every discipline of electrical and electronics engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((p, i) => (
            <FadeUp key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="bg-white border-[1.5px] border-gray100 rounded-[18px] overflow-hidden
                             transition-all duration-300 hover:border-[#1356e8]
                             hover:shadow-[0_12px_48px_rgba(19,86,232,0.12)]
                             hover:-translate-y-1 group h-full flex flex-col">

                <div className="overflow-hidden aspect-[4/3] relative">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                  />
                  <div className="absolute top-3 left-3 bg-[#1356e8] text-white text-[0.7rem]
                                 font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {p.badge}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-[1rem] font-bold text-navy mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[0.88rem] text-gray600 leading-[1.6] mb-5 flex-1"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {p.desc}
                  </p>
                  <Link
                    href={`/products/${p.slug}`}
                    className="inline-flex items-center gap-2 text-[#1356e8] font-semibold text-[0.88rem]
                               transition-all duration-200 hover:gap-3"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    View Product
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div
            className="rounded-[24px] px-16 py-14 flex flex-col md:flex-row justify-between items-center
                       gap-8 mt-20 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1356e8 0%, #0d3dba 100%)" }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                right: "-80px", top: "-80px", width: "300px", height: "300px",
                background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)",
              }}
            />
            <div>
              <h2
                className="text-white font-extrabold max-w-[480px]"
                style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
              >
                Need Custom Lab Setup for Your Institution?
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] mt-2 text-[0.95rem]"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                We offer complete turnkey lab solutions with installation, training, and AMC support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 flex-shrink-0">
              <a href="#contact" className="btn btn-white">Request Custom Quote</a>
              <a href="#contact" className="btn btn-amber">Talk to an Expert →</a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}