import Badge from "../ui/Badge";
import CategoryCard from "../ui/CategoryCard";

const CARD_DATA = [
  {
    category: "Cakes",
    desc: `
      Indulge in our lemon-infused cakes,
      where each slice bursts with fresh,
      tangy flavor and a perfect balance of sweetness.
    `,
    imgUrl: "/menu/cakes.png",
    hrefLink: "/menu-category/cakes",
  },
  {
    category: "Breads/Rolls",
    desc: `Experience a zesty twist on classic breads and rolls, baked with a hint of lemon for a light, citrusy flair.`,
    imgUrl: "/menu/breads.png",
    hrefLink: "/menu-category/breads",
  },
  {
    category: "Cookies",
    desc: `Crisp, buttery cookies with a lemony kick, offering the perfect balance of crunch and zest in every bite.`,
    imgUrl: "/menu/cookies.png",
    hrefLink: "/menu-category/cookies",

  },
  {
    category: "Drinks",
    desc: `Refresh yourself with our handcrafted lemon-based drinks, designed to brighten your day with bold, citrusy flavors.`,
    imgUrl: "/menu/drinks.png",
    hrefLink: "/menu-category/drinks",
  },

];

export default function Menu() {
  return (
    <section id="menu" className="flex max-sm:items-center flex-col gap-3.75">
      <Badge text="Menu" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {CARD_DATA.map((card) => (
          <CategoryCard
            key={card.category}
            title={card.category}
            description={card.desc}
            image={card.imgUrl}
            hrefLink={card.hrefLink}
            variant="menu"
          />
        ))}
      </div>
    </section>
  );
}