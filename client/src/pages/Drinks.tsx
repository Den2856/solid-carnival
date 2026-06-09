import CategoryHero from "../components/catesgory/CategoryHero";
import CategoryItemsSection from "../components/catesgory/CategoryItemsSection";
import CategoryMoreSection from "../components/catesgory/CategoryMoreSection";
import FAQSection from "../components/FAQSection";
import Navbar from "../components/Navbar";
import ReviewsSection from "../components/ReviewsSection";
import Pages from "../layout/Pages";

const drinkItems = [
  {
    id: 1,
    name: "Lemon Smoothie",
    description: "Invigorating lemon smoothie with yogurt and honey.",
    price: 5,
    image: "/drinks/1.png",
  },
  {
    id: 2,
    name: "Lemon Water",
    description: "Refreshing water infused with fresh lemon slices.",
    price: 1,
    image: "/drinks/2.png",
  },
  {
    id: 3,
    name: "Iced Lemon Tea",
    description: "Iced tea infused with the flavor of fresh lemon.",
    price: 3.5,
    image: "/drinks/3.png",
  },
  {
    id: 4,
    name: "Lemonade",
    description: "Classic lemonade made with fresh lemons and sugar.",
    price: 3,
    image: "/drinks/4.png",
  },
]

export default function Drinks() {
  return (
    <Pages>
      <Navbar />
      <div className="flex flex-col w-full h-fit gap-37.5">
        <CategoryHero
          title="Drinks"
          description="Refresh yourself with our handcrafted lemon-based drinks, designed to brighten your day with bold, citrusy flavors."
          image="/menu/drinks.png"
        />

        <CategoryItemsSection items={drinkItems} />

        <CategoryMoreSection
          currentHref="/menu-category/drinks"
        />

        <FAQSection />
        <ReviewsSection />

      </div>
    </Pages> 
  );
}