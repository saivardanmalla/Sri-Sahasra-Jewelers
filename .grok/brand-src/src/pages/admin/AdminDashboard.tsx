import { useState } from "react";
import {
  LayoutDashboard, Gem, Inbox, CalendarDays, Users, TrendingUp,
  Settings, LogOut, Menu, X,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, CartesianGrid,
} from "recharts";
import { demoAnalytics, demoEnquiries } from "@/data/enquiries";
import { goldRates, formatINR } from "@/data/goldRates";

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", key: "dash" },
  { icon: Gem, label: "Products", key: "products" },
  { icon: Inbox, label: "Enquiries", key: "enquiries" },
  { icon: CalendarDays, label: "Appointments", key: "appointments" },
  { icon: Users, label: "Customers", key: "customers" },
  { icon: TrendingUp, label: "Gold Rates", key: "rates" },
  { icon: Settings, label: "Settings", key: "settings" },
];

const COLORS = ["#C6A15B", "#A8802E", "#E3C888", "#8a6c2c"];
const statusColor: Record<string, string> = {
  New: "bg-gold/20 text-gold-deep",
  Contacted: "bg-blue-100 text-blue-700",
  "Follow-up": "bg-amber-100 text-amber-700",
  Converted: "bg-green-100 text-green-700",
  Closed: "bg-gray-100 text-gray-500",
};

export default function AdminDashboard() {
  const [tab, setTab] = useState("dash");
  const [open, setOpen] = useState(false);

  const stats = [
    { label: "Total Products", value: demoAnalytics.totalProducts },
    { label: "Total Enquiries", value: demoAnalytics.totalEnquiries },
    { label: "Today's Enquiries", value: demoAnalytics.todaysEnquiries },
    { label: "Appointments", value: demoAnalytics.appointments },
  ];

  return (
    <div className="flex min-h-screen bg-ivory">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-charcoal text-ivory transition-transform lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 items-center justify-between border-b border-ivory/10 px-6">
          <span className="font-serif text-lg">Sahasra <span className="gold-text">Admin</span></span>
          <button className="lg:hidden" onClick={() => setOpen(false)}><X size={18} /></button>
        </div>
        <nav className="p-4">
          {nav.map((n) => (
            <button
              key={n.key}
              onClick={() => { setTab(n.key); setOpen(false); }}
              className={`mb-1 flex w-full items-center gap-3 rounded px-4 py-3 text-sm transition ${
                tab === n.key ? "bg-gold/20 text-gold-light" : "text-ivory/60 hover:bg-ivory/5 hover:text-ivory"
              }`}
            >
              <n.icon size={17} /> {n.label}
            </button>
          ))}
          <button className="mt-8 flex w-full items-center gap-3 px-4 py-3 text-sm text-ivory/50 hover:text-ivory">
            <LogOut size={17} /> Logout (demo)
          </button>
        </nav>
      </aside>
      {open && <div className="fixed inset-0 z-30 bg-charcoal/40 lg:hidden" onClick={() => setOpen(false)} />}

      {/* Main */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="eyebrow">Admin Panel</p>
            <h1 className="mt-1 text-3xl">{nav.find((n) => n.key === tab)?.label}</h1>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(true)}><Menu size={22} /></button>
        </div>

        {tab === "dash" && (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border border-beige bg-white p-6 shadow-card">
                  <p className="text-xs uppercase tracking-widest text-charcoal/45">{s.label}</p>
                  <p className="gold-text mt-3 font-serif text-4xl">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="border border-beige bg-white p-6 shadow-card">
                <h3 className="mb-4 text-lg">Weekly Product Views</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={demoAnalytics.viewsSeries}>
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C6A15B" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#C6A15B" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#F1EAE0" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="views" stroke="#A8802E" fill="url(#g)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="border border-beige bg-white p-6 shadow-card">
                <h3 className="mb-4 text-lg">Enquiries by Channel</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie data={demoAnalytics.enquiriesByType} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={3}>
                      {demoAnalytics.enquiriesByType.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-2 flex flex-wrap justify-center gap-4 text-xs text-charcoal/60">
                  {demoAnalytics.enquiriesByType.map((d, i) => (
                    <span key={d.name} className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i % COLORS.length] }} /> {d.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border border-beige bg-white p-6 shadow-card lg:col-span-2">
                <h3 className="mb-4 text-lg">Most Enquired Products</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={demoAnalytics.topProducts} layout="vertical">
                    <CartesianGrid stroke="#F1EAE0" horizontal={false} />
                    <XAxis type="number" tick={{ fontSize: 12 }} />
                    <YAxis type="category" dataKey="name" width={180} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="enquiries" fill="#C6A15B" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}

        {tab === "enquiries" && (
          <div className="overflow-x-auto border border-beige bg-white shadow-card">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-beige bg-ivory text-left text-xs uppercase tracking-widest text-charcoal/50">
                  <th className="px-5 py-4">Customer</th><th className="px-5 py-4">Phone</th><th className="px-5 py-4">Product</th>
                  <th className="px-5 py-4">Type</th><th className="px-5 py-4">Date</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Staff</th>
                </tr>
              </thead>
              <tbody>
                {demoEnquiries.map((e) => (
                  <tr key={e.id} className="border-b border-beige last:border-0 hover:bg-ivory/60">
                    <td className="px-5 py-4 font-medium">{e.customer}</td>
                    <td className="px-5 py-4 text-charcoal/60">{e.phone}</td>
                    <td className="px-5 py-4">{e.product}</td>
                    <td className="px-5 py-4 text-charcoal/60">{e.type}</td>
                    <td className="px-5 py-4 text-charcoal/60">{e.date}</td>
                    <td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor[e.status]}`}>{e.status}</span></td>
                    <td className="px-5 py-4 text-charcoal/60">{e.staff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "rates" && (
          <div className="max-w-xl border border-beige bg-white p-8 shadow-card">
            <h3 className="text-lg">Today's Rates (Admin Controlled)</h3>
            <p className="mt-2 text-sm text-charcoal/55">Update demo values below — these feed the homepage rate section.</p>
            <div className="mt-6 space-y-4">
              {goldRates.map((r) => (
                <div key={r.purity} className="flex items-center gap-4 border-b border-beige pb-4">
                  <span className="w-24 text-sm font-medium">{r.metal} {r.purity}</span>
                  <input
                    type="number"
                    defaultValue={r.pricePer10g}
                    className="flex-1 border border-charcoal/15 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  />
                  <span className="text-xs text-charcoal/45">/ 10g</span>
                </div>
              ))}
            </div>
            <button className="btn-gold mt-6">Save Rates (demo)</button>
          </div>
        )}

        {["products", "appointments", "customers", "settings"].includes(tab) && (
          <div className="border border-dashed border-charcoal/20 bg-white p-16 text-center">
            <p className="text-charcoal/50">
              {tab === "products" && "Product CRUD, image upload, publish/unpublish — coming in Phase 4 (backend connected)."}
              {tab === "appointments" && "Appointment calendar & management — coming in Phase 4."}
              {tab === "customers" && "CRM with enquiry & wishlist history — coming in Phase 4."}
              {tab === "settings" && "Store info, WhatsApp number, hours, social links & offer banners — coming in Phase 4."}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
