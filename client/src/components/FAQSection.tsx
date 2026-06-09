import { useState } from "react"
import SectionBadge from "./ui/Badge"
import FAQItem from "./ui/FAQItem"



const faqItems = [
  {
    question: "Do you offer gluten-free or vegan lemon treats?",
    answer:
      "Yes, we offer selected gluten-free and vegan options. Contact us to check current availability.",
  },
  {
    question: "How fresh are your lemon-based items?",
    answer:
      "All our items are baked fresh in small batches to keep the flavor bright and the texture perfect.",
  },
  {
    question: "Can I place custom orders for special occasions?",
    answer:
      "Absolutely! We specialize in custom orders for events like birthdays, weddings, and more. Just let us know your preferences, and we’ll create lemony treats tailored to your occasion.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="info" className="flex max-sm:items-center flex-col gap-3.75">

      <SectionBadge text="FAQ" />

      <div className="overflow-hidden rounded-[15px] border border-white/10 bg-black">
        {faqItems.map((item, index) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex((prev) => (prev === index ? null : index))
            }
          />
        ))}
      </div>
    </section>
  )
}