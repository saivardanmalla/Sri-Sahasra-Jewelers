# Sri Sahasra Jewellers — Premium Jewellery Web App

A luxury digital showroom for **Sri Sahasra Jewellers**, Brodipet, Guntur — built with
React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Zustand + Recharts.

## Run Locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Demo Routes

| Route | Purpose |
|---|---|
| `/` | Luxury homepage (hero, categories, collections, new arrivals, gold rates, store) |
| `/shop` | Catalogue with search, metal filters & sorting (supports `?q=` and `?cat=`) |
| `/product/:slug` | Immersive product page with WhatsApp enquiry, wishlist, share |
| `/collections` | Editorial collection showcase |
| `/bridal` | Bridal experience + consultation CTA |
| `/custom` | Custom jewellery enquiry flow |
| `/services` | Services grid |
| `/gold-exchange` | Exchange process walkthrough |
| `/contact` | Store info + appointment booking |
| `/wishlist` | Persisted customer wishlist |
| `/admin` | Demo admin dashboard (analytics, enquiries, gold rates) |

## Before Launch — Replace With Verified Business Data

All demo values are clearly marked (`demo: true` in data files, "Demo" tags in UI):

1. **Contact details** — phone & WhatsApp number in `src/store/useWishlist.ts` (`BUSINESS`)
2. **Address & hours** — same file + Google Maps query
3. **Product catalogue** — `src/data/products.ts` (names, weights, purities, prices)
4. **Gold/silver rates** — `src/data/goldRates.ts` (admin-controlled)
5. **Imagery** — replace `DemoImage` placeholders with real store photography
6. **Social links** — `src/components/layout/Footer.tsx`
7. **Reviews** — only publish real, moderated reviews (never fake)

## Architecture Notes

- **Phase 1–3 complete**: design system, navigation, homepage, catalogue, product
  details, search/filters, wishlist, bridal, custom, appointments, services, store experience.
- **Phase 4 demo**: admin dashboard with analytics, enquiry table, rate management.
- **Phase 5 (next)**: connect Supabase/Node backend — swap `src/data/*` for API calls,
  add auth (admin 2FA, role-based access), enquiry persistence, image upload.
- **Phase 6 (next)**: SEO polish (sitemap, robots.txt, canonicals), accessibility audit,
  Core Web Vitals optimization.

## Design System

- **Palette**: Ivory `#FAF7F2` · Champagne `#E9DDC9` · Charcoal `#1C1A17` · Gold `#C6A15B`
- **Type**: Playfair Display (headings) · Inter (body)
- Gold is used as an *accent* — never overwhelming the UI.
