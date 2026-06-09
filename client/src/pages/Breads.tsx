import CategoryHero from "../components/catesgory/CategoryHero";
import CategoryItemsSection from "../components/catesgory/CategoryItemsSection";
import CategoryMoreSection from "../components/catesgory/CategoryMoreSection";
import FAQSection from "../components/FAQSection";
import Navbar from "../components/Navbar";
import ReviewsSection from "../components/ReviewsSection";
import Pages from "../layout/Pages";

const breadsItems = [
  {
    id: 1,
    name: "Lemon Rosemary Focaccia",
    description: "Artisanal focaccia infused with lemon zest and rosemary.",
    price: 15,
    image: "/breads/1.png",
  },
  {
    id: 2,
    name: "Lemon Brioche Buns",
    description: "Soft brioche buns infused with the zest of fresh lemon.",
    price: 10,
    image: "/breads/2.png",
  },
  {
    id: 3,
    name: "Lemon Pull-Apart Rolls",
    description: "Tangy lemon pull-apart rolls with a golden crisp exterior.",
    price: 8,
    image: "/breads/3.png",
  },
  {
    id: 4,
    name: "Lemon Sweet Bread",
    description: "Moist, sweet bread infused with the zest of fresh lemon.",
    price: 12,
    image: "/breads/4.png",
  },
]

export default function Breads() {
  return (
    <Pages>
      <Navbar />
      <div className="flex flex-col w-full h-fit gap-37.5">
        <CategoryHero
          title="Breads"
          description="Experience a zesty twist on classic breads and rolls, baked with a hint of lemon for a light, citrusy flair."
          image="/menu/breads.png"
        />

        <CategoryItemsSection items={breadsItems} />

        <CategoryMoreSection
          currentHref="/menu-category/breads"
        />

        <FAQSection />
        <ReviewsSection />

      </div>
    </Pages> 
  );
}