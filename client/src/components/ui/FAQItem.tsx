import { Plus } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

type FAQItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItem({ question, answer, isOpen, onToggle, }: FAQItemProps) {
  return (
    <div className={`overflow-hidden border-b border-white/10 last:border-b-0 ${ isOpen ? "bg-[#F5EA00]" : "bg-card-overlay" }`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className={`text-[18px] leading-[1.3] ${ isOpen ? "text-black/70" : "text-white" }`}>
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`text-[32px] leading-none ${ isOpen ? "text-black/40" : "text-white/50" }`}
        >
          <Plus size={24} />
        </motion.span>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${ isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.35, ease: "easeInOut" },
                opacity: { duration: 0.25, ease: "easeInOut" },
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: -8 }}
                animate={{ y: 0 }}
                exit={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="px-6 pb-6 text-[16px] leading-[1.4] text-black"
              >
                {answer}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}