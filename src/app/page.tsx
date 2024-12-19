import HeroSection from "./components/landing/section/HeroSection";
import AboutUs from "./components/landing/section/AboutUsSection";
import WhyUs from "./components/landing/section/WhyUsSection";
import Produts from "./components/landing/section/Products";
import HowToOrder from "./components/landing/section/HowToOrder";
import ContactUs from "./components/landing/section/ContactUs";
import Testimonial from "./components/landing/section/Testimonial";

export default function Home() {
  return (
    <article className="font-poppins pt-24">
      <HeroSection />
      <AboutUs />
      <WhyUs />
      <Produts />
      <HowToOrder />
      <Testimonial />
      <ContactUs />
    </article>
  );
}
