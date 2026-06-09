

export default function Badge({ text }: { text: string }) {
  return (
    <div className="flex flex-row gap-2 w-fit border items-center border-dark bg-[linear-gradient(0deg,#0D0D0D_0%,#000_48.81%)] rounded-[15px] py-2 px-3.75">
      <img
        src="/links/six.svg"
        alt="Six"
        className="animate-spin size-5 [animation-duration:15s] will-change-transform"
      />
      <span className="text-main ">{text}</span>
    </div>
  );
}