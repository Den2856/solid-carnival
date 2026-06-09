import CategoryHero from "../components/catesgory/CategoryHero"
import CategoryItemsSection from "../components/catesgory/CategoryItemsSection"
import CategoryMoreSection from "../components/catesgory/CategoryMoreSection"
import FAQSection from "../components/FAQSection"
import Navbar from "../components/Navbar"
import ReviewsSection from "../components/ReviewsSection"
import Pages from "../layout/Pages"


const cookieItems = [
  {
    id: 1,
    name: "Lemon Chocolate Cookies",
    description: "Tangy lemon and rich chocolate combined in one cookie.",
    price: 2,
    image: "/cookies/1.png",
  },
  {
    id: 2,
    name: "Lemon Shortbread Cookies",
    description: "Buttery shortbread cookies with a hint of lemon zest.",
    price: 1.5,
    image: "/cookies/2.png",
  },
  {
    id: 3,
    name: "Lemon Sugar Cookies",
    description: "Soft lemon sugar cookies with a delicate crunch.",
    price: 1,
    image: "/cookies/3.png",
  },
  {
    id: 4,
    name: "Lemon Crinkle Cookies",
    description: "Soft, zesty lemon crinkle cookies with a sugary coating.",
    price: 1.25,
    image: "/cookies/4.png",
  },
]


export default function Cookies() {
  return (
    <Pages>
      <Navbar />
      <div className="flex flex-col w-full h-fit gap-37.5">
        <CategoryHero
          title="Cookies"
          description="Indulge in our lemon-infused cookies, where each bite bursts with fresh, tangy flavor and a perfect balance of sweetness."
          image="/menu/cookies.png"
        />

        <CategoryItemsSection items={cookieItems} />

        <CategoryMoreSection
          currentHref="/menu-category/cookies"
        />

        <FAQSection />
        <ReviewsSection />

      </div>
    </Pages> 
  );
}