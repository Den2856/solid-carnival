import Badge from "../ui/Badge"

type CategoryItem = {
  id: number | string
  name: string
  description: string
  price: number
  image: string
}

type CategoryItemsSectionProps = {
  title?: string
  items: CategoryItem[]
}

function CategoryItemCard({ item }: { item: CategoryItem }) {
  return (
    <article className="flex flex-col sm:flex-row items-center gap-4 rounded-[20px] border border-white/10 bg-card-overlay px-3 py-3 md:px-4">
      <img
        src={item.image}
        alt={item.name}
        className="rounded-[15px] object-cover md:h-24 md:w-24"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[28px] font-semibold leading-none text-white md:text-[32px]">
          {item.name}
        </h3>

        <p className="mt-3 text-[16px] leading-[1.2] text-white/85 md:text-[18px]">
          {item.description}
        </p>
      </div>

      <p className="shrink-0 text-[34px] font-bold leading-none text-[#F5EA00] md:text-[40px]">
        ${item.price}
      </p>
    </article>
  )
}

export default function CategoryItemsSection({
  title = "Items",
  items,
}: CategoryItemsSectionProps) {
  return (
    <section className="flex max-sm:items-center flex-col gap-3.75">
      <Badge text={title} />


      <div className="space-y-6">
        {items.map((item) => (
          <CategoryItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}