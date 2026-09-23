import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { SearchOverlay } from "@/components/SearchOverlay";
import { EnquiryModal } from "@/components/EnquiryModal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { hydrateTheme } from "@/store/ui";
import { useWishlist } from "@/store/wishlist";
import appCss from "../styles.css?url";

const APP_NAME = "Sri Sahasra Jewellers";

function RootShell() {
  useEffect(() => {
    hydrateTheme();
    void useWishlist.persist.rehydrate();
  }, []);

  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <main className="min-h-[60vh] pb-8">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
      <SearchOverlay />
      <EnquiryModal />
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Sri Sahasra Jewellers — timeless jewellery for meaningful moments. A luxury showroom in Brodipet, Guntur, Andhra Pradesh.",
      },
      { name: "theme-color", content: "#F6F0E6" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <RootShell />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
