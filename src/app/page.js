import About from "./component/About";
import BackToTopBtn from "./component/BackToTopBtn";
import Cars from "./component/Cars";
import Cta from "./component/Cta";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Testimonial from "./component/Testimonial";
import Why from "./component/Why";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
      <div className="h-[1000px]"></div>
    </main>
  );
}
