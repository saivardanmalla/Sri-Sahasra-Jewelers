import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import PageLoader from "@/components/layout/PageLoader";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetails from "@/pages/ProductDetails";
import CollectionsPage from "@/pages/Collections";
import Bridal from "@/pages/Bridal";
import CustomJewellery from "@/pages/CustomJewellery";
import Services from "@/pages/Services";
import GoldExchange from "@/pages/GoldExchange";
import Contact from "@/pages/Contact";
import WishlistPage from "@/pages/Wishlist";

const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/bridal" element={<Bridal />} />
          <Route path="/custom" element={<CustomJewellery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gold-exchange" element={<GoldExchange />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
