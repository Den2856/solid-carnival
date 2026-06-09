import CategoryHero from "../components/catesgory/CategoryHero"
import CategoryItemsSection from "../components/catesgory/CategoryItemsSection"
import CategoryMoreSection from "../components/catesgory/CategoryMoreSection"
import FAQSection from "../components/FAQSection"
import Navbar from "../components/Navbar"
import ReviewsSection from "../components/ReviewsSection"
import Pages from "../layout/Pages"


const cakeItems = [
  {
    id: 1,
    name: "Lemon Merringue Cake",
    description: "Lemon sponge cake with lemon curd and toasted meringue.",
    price: 25,
    image: "/cakes/1.png",
  },
  {
    id: 2,
    name: "Lemon Poppy Cake",
    description: "Lemon poppy seed cake with a bright citrus flavor.",
    price: 20,
    image: "/cakes/2.png",
  },
  {
    id: 3,
    name: "Lemon Chiffon Cake",
    description: "Light chiffon cake infused with fresh lemon zest.",
    price: 22,
    image: "/cakes/3.png",
  },
  {
    id: 4,
    name: "Lemon Pound Cake",
    description: "Rich, buttery lemon pound cake with a sweet, tangy flavor.",
    price: 18,
    image: "/cakes/4.png",
  },
]


export default function Cakes() {
  return (
    <Pages>
      <Navbar />
      <div className="flex flex-col w-full h-fit gap-37.5">
        <CategoryHero
          title="Cakes"
          description="Indulge in our lemon-infused cakes, where each slice bursts with fresh, tangy flavor and a perfect balance of sweetness."
          image="/menu/cakes.png"
        />

        <CategoryItemsSection items={cakeItems} />

        <CategoryMoreSection
          currentHref="/menu-category/cakes"
        />

        <FAQSection />
        <ReviewsSection />

      </div>
    </Pages> 
  );
}