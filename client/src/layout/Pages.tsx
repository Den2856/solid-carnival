
export default function Pages({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-3 gap-3 sm:p-5 sm:gap-5 flex-1 flex flex-row max-sm:flex-col h-full">
      {children}
    </section>
  );
}