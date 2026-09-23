import { MessageCircle } from "lucide-react";
import { waLink } from "@/store/useWishlist";

/** Sticky mobile enquiry bar + floating WhatsApp button. */
export default function EnquiryCTA() {
  return (
    <>
      <a
        href={waLink("Hello Sri Sahasra Jewellers! I'd like to make an enquiry.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-card transition hover:scale-105 lg:bottom-6 lg:right-6"
      >
        <MessageCircle size={22} />
      </a>
      <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-px border-t border-gold/20 bg-white lg:hidden">
        <a href={waLink("Hello Sri Sahasra Jewellers! I'd like to enquire about a product.")} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 bg-gold py-4 text-xs font-semibold uppercase tracking-widest text-charcoal">
          <MessageCircle size={15} /> Enquire
        </a>
        <a href="tel:+91XXXXXXXXXX" className="flex flex-1 items-center justify-center gap-2 bg-charcoal py-4 text-xs font-semibold uppercase tracking-widest text-ivory">
          Call Store
        </a>
      </div>
    </>
  );
}
