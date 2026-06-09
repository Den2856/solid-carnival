type CategoryHeroProps = {
  title: string
  description: string
  image: string
}

export default function CategoryHero({ title, description, image, }: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[15px] min-h-60 md:min-h-80">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-transparent" />

      <div className="relative z-10 flex min-h-60 md:min-h-80 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-[56px] font-black uppercase leading-none text-white md:text-[88px]">
          {title}
        </h1>

        <p className="mt-4 max-w-190 text-[20px] font-semibold leading-[1.05] text-white md:text-[28px]">
          {description}
        </p>
      </div>
    </section>
  )
}