
import HeroSection from "./components/landing/section/HeroSection";
import AboutUs from "./components/landing/section/AboutUsSection";
import WhyUs from "./components/landing/section/WhyUsSection";
import Produts from "./components/landing/section/Products";
import HowToOrder from "./components/landing/section/HowToOrder";
import ContactUs from "./components/landing/section/ContactUs";
import Navbar from "./components/landing/ui/Navbar";
import Testimonial from "./components/landing/section/Testimonial";
import Footer from "./components/landing/ui/Footer";

export default function Home() {
  return (
    <article className="font-poppins pt-24">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhyUs />
      <Produts />
      <HowToOrder />
      <Testimonial />
      <ContactUs />
      <Footer />
    </article>
  );
}
