import { Check } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, Input, NativeSelect, Textarea } from "@/components/ui/field";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-border bg-bg-elevated px-8 py-16 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-gold/30 text-gold-deep">
          <Check size={22} />
        </div>
        <h3 className="font-serif text-3xl">Thank you!</h3>
        <p className="mt-3 text-sm text-muted">
          Your enquiry has been received.
          <br />
          Our team will contact you soon.
        </p>
        <p className="mt-3 text-xs text-muted">Demonstration only — no message was sent.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 border border-border bg-bg-elevated p-6 sm:p-8">
      <Field label="Name" htmlFor="c-name">
        <Input id="c-name" name="name" required autoComplete="name" />
      </Field>
      <Field label="Phone" htmlFor="c-phone">
        <Input id="c-phone" name="phone" type="tel" required autoComplete="tel" />
      </Field>
      <Field label="Email" htmlFor="c-email">
        <Input id="c-email" name="email" type="email" autoComplete="email" />
      </Field>
      <Field label="Jewellery Interest" htmlFor="c-interest">
        <NativeSelect id="c-interest" name="interest" defaultValue="Gold Jewellery">
          <option>Gold Jewellery</option>
          <option>Diamond Jewellery</option>
          <option>Bridal Jewellery</option>
          <option>Custom Jewellery</option>
          <option>Visit the store</option>
        </NativeSelect>
      </Field>
      <Field label="Message" htmlFor="c-message">
        <Textarea id="c-message" name="message" rows={5} />
      </Field>
      <Button type="submit" className="w-full sm:w-auto">
        Send Enquiry
      </Button>
    </form>
  );
}
