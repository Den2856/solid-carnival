

type AboutCardProps = {
  title: string;
  description: string;
  iconUrl: string;
};

export default function AboutCard({ title, description, iconUrl }: AboutCardProps) {
  
  return (
    <div className="rounded-[15px] bg-card-overlay border border-dark flex flex-row p-6.25 gap-6.25 items-center">
      <div className="relative flex items-center justify-center size-fit">
        <img
          src={iconUrl}
          alt={title}
          className="size-12 object-contain"
        />
      </div>


      <div className="flex flex-col gap-6.25 w-fit">
        <h2 className="text-main text-[28px] font-semibold leading-none">
          {title}
        </h2>

        <p className="text-[16px] leading-tight text-white">
          {description}
        </p>
      </div>
    </div>
  );
}