import { createFileRoute } from "@tanstack/react-router";
import { CustomJewellery } from "@/components/CustomJewellery";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/custom-jewellery")({ component: CustomPage });

function CustomPage() {
  return (
    <>
      <PageHeader
        eyebrow="Create Something Unique"
        title="Jewellery that could only be yours."
        subtitle="From a grandmother’s stone to a line drawn on paper — custom work at Sri Sahasra begins in the showroom, not on a screen."
      />
      <CustomJewellery />
    </>
  );
}
