import SectionBadge from "./ui/Badge"
import ReviewCard from "./ui/ReviewCard"

const reviewItems = [
  {
    name: "Emily R.",
    text: "The lemon cake I had from Zest was the best I’ve ever tasted—perfectly balanced between sweet and tangy. A must-try for any citrus lover!",
    rating: 5,
  },
  {
    name: "James P.",
    text: "The lemon rolls are so light and fresh! I’ve never tasted anything like them, and the subtle lemon flavor makes them irresistible.",
    rating: 5,
  },
  {
    name: "Sofia M.",
    text: "I can’t get enough of their lemon cookies! Every bite is packed with a perfect burst of zest. It’s my new go-to treat!",
    rating: 5,
  },
]

export default function ReviewsSection() {
  return (
    <section className="flex max-sm:items-center flex-col gap-3.75">
      <SectionBadge text="Reviews" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {reviewItems.map((item, index) => (
          <ReviewCard
            key={`${item.name}-${index}`}
            name={item.name}
            text={item.text}
            rating={item.rating ?? 5}
            className={index === 2 ? "md:col-span-2" : ""}
          />
        ))}
      </div>
    </section>
  )
}