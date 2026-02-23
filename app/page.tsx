import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Specifications from "@/components/Specifications";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <Features />
      <Specifications />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
