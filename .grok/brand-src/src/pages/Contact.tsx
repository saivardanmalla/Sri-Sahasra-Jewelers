import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, CheckCircle2, Navigation, MessageCircle } from "lucide-react";
import { BUSINESS, waLink } from "@/store/useWishlist";
import SectionHeading from "@/components/jewellery/SectionHeading";
import EnquiryCTA from "@/components/jewellery/EnquiryCTA";
import DemoImage from "@/components/jewellery/DemoImage";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", purpose: "Jewellery Shopping", visitors: "2", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  const input = "w-full border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold";
  const label = "mb-1.5 block text-xs uppercase tracking-widest text-charcoal/55";

  return (
    <div className="container-luxe py-16">
      <SectionHeading eyebrow="We'd Love To Meet You" title="Visit & Appointments" />

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <DemoImage label="Sri Sahasra Storefront" ratio="aspect-[16/10]" />
          <div className="mt-8 space-y-5 text-sm">
            <p className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold-deep" />{BUSINESS.addressLines.join(", ")}</p>
            <p className="flex items-start gap-3"><Clock size={18} className="mt-0.5 shrink-0 text-gold-deep" />{BUSINESS.hours}</p>
            <p className="flex items-start gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-gold-deep" />{BUSINESS.phone} (replace with verified number)</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapsQuery)}`} target="_blank" rel="noreferrer" className="btn-gold"><Navigation size={15} /> Get Directions</a>
            <a href={waLink("Hello Sri Sahasra Jewellers!")} target="_blank" rel="noreferrer" className="btn-outline"><MessageCircle size={15} /> WhatsApp</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="border border-beige bg-white p-8 shadow-card">
          {submitted ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="mx-auto text-gold-deep" size={44} />
              <h3 className="mt-5 text-2xl">Appointment Requested</h3>
              <p className="mt-3 text-sm text-charcoal/60">
                Thank you{form.name ? `, ${form.name}` : ""}! We'll confirm your {form.date} {form.time} appointment by phone shortly. (Demo)
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl">Book a Store Appointment</h3>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-6 grid gap-4 sm:grid-cols-2">
                <div><label className={label}>Name *</label><input required className={input} value={form.name} onChange={set("name")} /></div>
                <div><label className={label}>Phone *</label><input required type="tel" className={input} value={form.phone} onChange={set("phone")} /></div>
                <div><label className={label}>Date *</label><input required type="date" className={input} value={form.date} onChange={set("date")} /></div>
                <div><label className={label}>Preferred Time</label><input type="time" className={input} value={form.time} onChange={set("time")} /></div>
                <div><label className={label}>Purpose</label>
                  <select className={input} value={form.purpose} onChange={set("purpose")}>
                    {["Jewellery Shopping", "Bridal Consultation", "Custom Jewellery", "Gold Exchange", "Repair", "Other"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label className={label}>Visitors</label>
                  <select className={input} value={form.visitors} onChange={set("visitors")}>
                    {["1", "2", "3", "4", "5+"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2"><label className={label}>Message</label>
                  <textarea rows={3} className={input} placeholder="Anything we should prepare?" value={form.message} onChange={set("message")} />
                </div>
                <button type="submit" className="btn-gold sm:col-span-2">Request Appointment</button>
              </form>
            </>
          )}
        </motion.div>
      </div>
      <EnquiryCTA />
    </div>
  );
}
