import AboutUs from "../components/home/AboutUs";
import FAQSection from "../components/FAQSection";
import Hero from "../components/home/Hero";
import Menu from "../components/home/Menu";
import Navbar from "../components/Navbar";
import ReviewsSection from "../components/ReviewsSection";
import Pages from "../layout/Pages";


export default function Home() {
  return (
    <Pages>
      <Navbar />
      <div className="flex flex-col w-full h-fit gap-37.5">
        <Hero title="ZEST" />
        <Menu />
        <AboutUs />
        <FAQSection />
        <ReviewsSection />
      </div>
    </Pages> 
  );
}