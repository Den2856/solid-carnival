import CategoryCard from "../ui/CategoryCard";
import Badge from "../ui/Badge";

type CategoryMoreSectionProps = {
  currentHref: string;
};

const categories = [
  {
    id: 1,
    title: "Drinks",
    description: "Refresh yourself with our handcrafted lemon-based drinks, designed to brighten your day with bold, citrusy flavors.",
    image: "/menu/drinks.png",
    hrefLink: "/menu-category/drinks",
  },
  {
    id: 2,
    title: "Breads/Rolls",
    description: "Soft, fresh, and zesty breads and rolls with a bright lemon touch.",
    image: "/menu/breads.png",
    hrefLink: "/menu-category/breads",
  },
  {
    id: 3,
    title: "Cookies",
    description: "Crispy and chewy lemon cookies packed with citrus flavor.",
    image: "/menu/cookies.png",
    hrefLink: "/menu-category/cookies",
  },
  {
    id: 4,
    title: "Cakes",
    description: "Indulge in our lemon-infused cakes, where each slice bursts with fresh, tangy flavor and a perfect balance of sweetness.",
    image: "/menu/cakes.png",
    hrefLink: "/menu-category/cakes",
  }
];


export default function CategoryMoreSection({ currentHref, }: CategoryMoreSectionProps) {

  const filteredItems = categories.filter((item) => item.hrefLink !== currentHref);

  return (
    <section className="flex max-sm:items-center flex-col gap-3.75">
      <Badge text="More" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredItems.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            hrefLink={item.hrefLink}
            variant="more"
          />
        ))}
      </div>
    </section>
  );
}