
type ReviewCardProps = {
  name: string
  text: string
  rating?: number
  className?: string
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, index) => (
        <img src="/star.svg" alt={`Star-${index + 1}`} className="size-5" />
      ))}
    </div>
  )
}

export default function ReviewCard({ name, text, rating = 5, className = "", }: ReviewCardProps) {
  return (
    <div className={`rounded-[15px] border border-white/10 bg-card-overlay p-6 ${className}`}>
      <h3 className="mb-3 text-[28px] leading-none text-white">{name}</h3>

      <div className="mb-6">
        <Stars rating={rating} />
      </div>

      <p className="max-w-[95%] text-[16px] leading-[1.35] text-white/90">
        {text}
      </p>
    </div>
  )
}