import { Link } from "react-router-dom";

type CategoryCardVariant = "menu" | "more";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
  hrefLink: string;
  variant?: CategoryCardVariant;
};

const variantStyles = {
  menu: {
    root: "h-[280px] rounded-[15px]",
    content: "p-8",
    title: "text-5xl",
    description: "mt-4 text-[18px]",
  },
  more: {
    root: "h-[200px] rounded-[15px]",
    content: "p-5",
    title: "text-[32px]",
    description: "mt-3 text-[16px]",
  },
};

export default function CategoryCard({
  title,
  description,
  image,
  hrefLink,
  variant = "menu",
}: CategoryCardProps) {
  const styles = variantStyles[variant];

  return (
    <Link
      to={hrefLink}
      className={`group relative block w-full overflow-hidden ${styles.root}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/40 transition-opacity duration-500" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className={`absolute inset-x-0 bottom-0 z-20 ${styles.content}`}>
        <h3
          className={`text-white font-semibold leading-none transition-transform duration-500 ease-out group-hover:-translate-y-1 ${styles.title}`}
        >
          {title}
        </h3>

        <div className="overflow-hidden">
          <p
            className={`${styles.description} max-h-0 translate-y-6 leading-tight text-white/95 opacity-0 transition-all duration-500 ease-out group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100`}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}