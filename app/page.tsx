import ScrollProgress from "@/components/ScrollProgress";
import Nav           from "@/components/Nav";
import Hero          from "@/components/Hero";
import Marquee       from "@/components/Marquee";
import About         from "@/components/About";
import Categories    from "@/components/Categories";
import WhyUs         from "@/components/WhyUs";
import Process       from "@/components/Process";
import Testimonials  from "@/components/Testimonials";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Categories />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
