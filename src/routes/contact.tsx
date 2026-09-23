import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { StoreSection } from "@/components/StoreSection";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let’s Find Your Perfect Jewellery"
        title="Write to us, or walk into Brodipet."
        subtitle="Enquiries on this page stay on your device — a demonstration of how the conversation would begin."
      />
      <section className="container-luxe grid gap-12 pb-8 lg:grid-cols-2">
        <ContactForm />
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Showroom</p>
          <h2 className="mt-3 font-serif text-4xl">{SITE.locationLine}</h2>
          <p className="mt-4 text-sm text-muted">
            Phone placeholder: {SITE.phonePlaceholder}
            <br />
            {SITE.hoursPlaceholder}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{SITE.demoNotice}</p>
        </div>
      </section>
      <StoreSection />
    </>
  );
}
