import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Upload } from "lucide-react";
import SectionHeading from "@/components/jewellery/SectionHeading";
import EnquiryCTA from "@/components/jewellery/EnquiryCTA";

export default function CustomJewellery() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", type: "Ring", metal: "Gold", budget: "", occasion: "", notes: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const input = "w-full border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold";
  const label = "mb-1.5 block text-xs uppercase tracking-widest text-charcoal/55";

  return (
    <div className="container-luxe py-16">
      <SectionHeading
        eyebrow="One Of A Kind"
        title="Design Your Own Jewellery"
        subtitle="Tell us your idea and our jewellery consultant will contact you to bring it to life."
      />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-2xl border border-beige bg-white p-8 shadow-card sm:p-10">
        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto text-gold-deep" size={44} />
            <h3 className="mt-5 text-2xl">Thank you, {form.name || "friend"}!</h3>
            <p className="mt-3 text-sm text-charcoal/60">
              Your custom design enquiry has been received (demo). Our consultant will contact you on {form.phone || "your number"} shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div><label className={label}>Name *</label><input required className={input} value={form.name} onChange={set("name")} /></div>
            <div><label className={label}>Phone *</label><input required type="tel" className={input} value={form.phone} onChange={set("phone")} /></div>
            <div><label className={label}>Jewellery Type</label>
              <select className={input} value={form.type} onChange={set("type")}>
                {["Ring", "Necklace", "Earrings", "Bangles", "Pendant", "Bridal Set", "Other"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div><label className={label}>Preferred Metal</label>
              <select className={input} value={form.metal} onChange={set("metal")}>
                {["Gold 22K", "Gold 18K", "Diamond", "Silver", "Platinum"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div><label className={label}>Approximate Budget</label><input className={input} placeholder="e.g. ₹50,000" value={form.budget} onChange={set("budget")} /></div>
            <div><label className={label}>Occasion</label><input className={input} placeholder="e.g. Wedding, Anniversary" value={form.occasion} onChange={set("occasion")} /></div>
            <div className="sm:col-span-2">
              <label className={label}>Reference Image</label>
              <label className="flex cursor-pointer items-center justify-center gap-2 border border-dashed border-charcoal/25 bg-ivory px-4 py-8 text-sm text-charcoal/50 transition hover:border-gold">
                <Upload size={16} /> Upload a design reference (optional)
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
            <div className="sm:col-span-2"><label className={label}>Describe Your Idea</label>
              <textarea rows={4} className={input} placeholder="Inspiration, stones, engraving, size…" value={form.notes} onChange={set("notes")} />
            </div>
            <button type="submit" className="btn-gold sm:col-span-2">Submit Enquiry</button>
            <p className="text-center text-xs text-charcoal/40 sm:col-span-2">Demo form — submissions are stored locally until the backend is connected.</p>
          </form>
        )}
      </motion.div>
      <EnquiryCTA />
    </div>
  );
}
