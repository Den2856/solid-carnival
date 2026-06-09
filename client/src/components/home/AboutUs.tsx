import AboutCard from "../ui/AboutCard";
import Badge from "../ui/Badge";

const ABOUT_CARDS = [
  {
    title: "Lemony Innovation",
    desc: `
      At Zest, we don’t just bake with lemons—we innovate.
      Our passion for citrus inspires us to create bold, lemon-infused treats that blend creativity with flavor,
      delivering an unexpected twist on classic favorites.
    `,
    iconUrl: "/about/light.svg",
  },
  {
    title: "Crafted With Zing",
    desc: `
      From tangy tarts and zesty cakes to refreshing lemon bars and pies,
      every treat is crafted with the finest, freshest lemons. We hand-make each item to bring out the natural zing,
      giving every bite a burst of citrusy goodness that stands out
    `,
    iconUrl: "/about/hammer.svg",
  },
  {
    title: "Bright Flavours, Fresh Daily",
    desc: `
      We believe that freshness is key to delivering the best lemony flavor.
      That’s why everything at Zest is made fresh daily,
      ensuring our treats offer the bright, vibrant taste of lemons in every single bite, all day, every day.
    `,
    iconUrl: "/about/sunset.svg",
  },
];

export default function AboutUs() {
  return (
    <section id="services" className="flex max-sm:items-center flex-col gap-3.75">
      <Badge text="About Us" />
      <div className="grid grid-cols-1 gap-6">
        {ABOUT_CARDS.map((card) => (
          <AboutCard
            key={card.title}
            title={card.title}
            description={card.desc}
            iconUrl={card.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}