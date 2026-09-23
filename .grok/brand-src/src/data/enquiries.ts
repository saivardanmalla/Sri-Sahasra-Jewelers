import { Enquiry } from "@/types";

// Demo enquiries for the admin dashboard.
export const demoEnquiries: Enquiry[] = [
  { id: "ENQ-1001", customer: "Lakshmi P.", phone: "98XXXXXX01", product: "Kundan Bridal Necklace Set", type: "WhatsApp", date: "2026-09-22", status: "New", staff: "—" },
  { id: "ENQ-1002", customer: "Ravi Kumar", phone: "98XXXXXX02", product: "Mens Gold Chain", type: "Call", date: "2026-09-22", status: "Contacted", staff: "Staff A" },
  { id: "ENQ-1003", customer: "Sneha R.", phone: "98XXXXXX03", product: "Solitaire Diamond Ring", type: "Store Visit", date: "2026-09-21", status: "Follow-up", staff: "Staff B" },
  { id: "ENQ-1004", customer: "Anitha M.", phone: "98XXXXXX04", product: "Temple Gold Bangles", type: "WhatsApp", date: "2026-09-20", status: "Converted", staff: "Staff A" },
  { id: "ENQ-1005", customer: "Venkatesh G.", phone: "98XXXXXX05", product: "Custom Bridal Design", type: "Appointment", date: "2026-09-19", status: "Closed", staff: "Staff C" },
];

export const demoAnalytics = {
  totalProducts: 12,
  totalEnquiries: 148,
  todaysEnquiries: 6,
  appointments: 9,
  viewsSeries: [
    { day: "Mon", views: 210 }, { day: "Tue", views: 260 }, { day: "Wed", views: 190 },
    { day: "Thu", views: 310 }, { day: "Fri", views: 280 }, { day: "Sat", views: 420 }, { day: "Sun", views: 380 },
  ],
  enquiriesByType: [
    { name: "WhatsApp", value: 62 }, { name: "Call", value: 34 },
    { name: "Store Visit", value: 28 }, { name: "Appointment", value: 24 },
  ],
  topProducts: [
    { name: "Kundan Bridal Necklace", enquiries: 26 },
    { name: "Solitaire Diamond Ring", enquiries: 21 },
    { name: "Temple Gold Bangles", enquiries: 17 },
    { name: "Mens Gold Chain", enquiries: 12 },
  ],
};
