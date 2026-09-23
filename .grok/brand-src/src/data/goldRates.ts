import { GoldRate } from "@/types";

// NOTE: Demo rates ONLY. Replace with admin-controlled values.
// Never hard-code real market prices without the owner's confirmation.
export const goldRates: GoldRate[] = [
  { metal: "Gold", purity: "24K", pricePer10g: 78540, updatedAt: "2026-09-23T09:00:00+05:30", demo: true },
  { metal: "Gold", purity: "22K", pricePer10g: 72000, updatedAt: "2026-09-23T09:00:00+05:30", demo: true },
  { metal: "Gold", purity: "18K", pricePer10g: 58900, updatedAt: "2026-09-23T09:00:00+05:30", demo: true },
  { metal: "Silver", purity: "999", pricePer10g: 940, updatedAt: "2026-09-23T09:00:00+05:30", demo: true },
];

export function formatINR(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}
