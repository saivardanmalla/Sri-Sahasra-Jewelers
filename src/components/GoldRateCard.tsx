import { formatINR } from "@/lib/utils";
import { GOLD_RATES } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function GoldRateCard() {
  return (
    <section className="container-luxe py-20">
      <Reveal>
        <div className="border border-border bg-bg-elevated px-6 py-10 sm:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Today’s Gold Rate</p>
              <h2 className="mt-3 font-serif text-4xl">Demonstration rates</h2>
              <p className="mt-3 max-w-md text-sm text-muted">
                Rates shown are for demonstration purposes. They are not current market prices and should not be
                used for purchase decisions.
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted">Updated Today · Demo</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {GOLD_RATES.map((r) => (
              <div key={r.purity} className="border border-border bg-cream px-6 py-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted">{r.purity}</p>
                <p className="mt-3 font-serif text-4xl tabular-nums">
                  {formatINR(r.per10g)}
                  <span className="ml-2 text-lg text-muted">/ 10g</span>
                </p>
                <p className="mt-2 text-xs text-muted">Demo value</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
