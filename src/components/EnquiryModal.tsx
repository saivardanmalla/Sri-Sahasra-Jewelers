import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, Input, Textarea } from "@/components/ui/field";
import { useUI } from "@/store/ui";

export function EnquiryModal() {
  const open = useUI((s) => s.enquiryOpen);
  const target = useUI((s) => s.enquiryTarget);
  const close = useUI((s) => s.closeEnquiry);
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  function onClose() {
    close();
    window.setTimeout(() => setSent(false), 250);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-fg/50 px-4 backdrop-blur-sm"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="w-full max-w-md border border-border bg-bg p-7 shadow-soft sm:p-9"
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="eyebrow">Showroom enquiry</p>
                <h2 id="enquiry-title" className="mt-2 font-serif text-3xl">
                  {sent ? "Thank you!" : "Interested in this Jewellery?"}
                </h2>
              </div>
              <button type="button" onClick={onClose} className="size-10 text-fg" aria-label="Close enquiry">
                <X size={18} />
              </button>
            </div>

            {sent ? (
              <div className="py-4 text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-gold/30 text-gold-deep">
                  <Check size={22} />
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  Your enquiry has been received.
                  <br />
                  Our team will contact you soon.
                </p>
                <p className="mt-3 text-xs text-muted">Demonstration only — no message was sent.</p>
                <Button className="mt-8" onClick={onClose}>
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {target?.productName && (
                  <p className="border border-border bg-cream px-4 py-3 text-sm">
                    Product: <span className="font-medium">{target.productName}</span>
                  </p>
                )}
                <Field label="Name" htmlFor="enq-name">
                  <Input id="enq-name" name="name" required autoComplete="name" />
                </Field>
                <Field label="Phone" htmlFor="enq-phone">
                  <Input id="enq-phone" name="phone" type="tel" required autoComplete="tel" />
                </Field>
                <Field label="Message" htmlFor="enq-message">
                  <Textarea id="enq-message" name="message" rows={4} placeholder="Tell us what you have in mind" />
                </Field>
                <Button type="submit" className="w-full">
                  Send Enquiry
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
