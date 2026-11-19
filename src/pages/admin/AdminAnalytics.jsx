import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  MousePointerClick,
  Smartphone,
  Monitor,
  Tablet,
  Search,
  ExternalLink,
  Calendar,
} from "lucide-react";

const TOP_GSC_QUERIES = [
  { query: "mern stack development services", impressions: 340, clicks: 28, ctr: "8.2%", position: 4.2 },
  { query: "custom saas development company", impressions: 290, clicks: 21, ctr: "7.2%", position: 5.1 },
  { query: "nextjs development agency", impressions: 245, clicks: 19, ctr: "7.7%", position: 3.8 },
  { query: "generative ai solutions devzore", impressions: 180, clicks: 15, ctr: "8.3%", position: 2.9 },
  { query: "enterprise rag system development", impressions: 160, clicks: 12, ctr: "7.5%", position: 4.8 },
  { query: "how much does a website cost 2026", impressions: 145, clicks: 9, ctr: "6.2%", position: 6.4 },
  { query: "custom erp software developers", impressions: 120, clicks: 8, ctr: "6.7%", position: 5.9 },
];

const TOP_PAGES = [
  { url: "/mern-stack-development", views: 540, bounce: "38%", avgTime: "2m 45s" },
  { url: "/saas-development", views: 480, bounce: "41%", avgTime: "2m 18s" },
  { url: "/generative-ai", views: 410, bounce: "35%", avgTime: "3m 12s" },
  { url: "/web-development", views: 390, bounce: "42%", avgTime: "1m 55s" },
  { url: "/blog/why-your-business-needs-a-professional-website-in-2026", views: 320, bounce: "46%", avgTime: "3m 40s" },
  { url: "/contact", views: 280, bounce: "24%", avgTime: "1m 10s" },
];

const WEEKLY_STATS = [
  { day: "Mon", impressions: 160, clicks: 14 },
  { day: "Tue", impressions: 210, clicks: 18 },
  { day: "Wed", impressions: 280, clicks: 24 },
  { day: "Thu", impressions: 260, clicks: 22 },
  { day: "Fri", impressions: 320, clicks: 29 },
  { day: "Sat", impressions: 190, clicks: 16 },
  { day: "Sun", impressions: 220, clicks: 19 },
];

const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState("Last 7 Days");

  const totalImpressions = WEEKLY_STATS.reduce((acc, curr) => acc + curr.impressions, 0);
  const totalClicks = WEEKLY_STATS.reduce((acc, curr) => acc + curr.clicks, 0);
  const avgCtr = ((totalClicks / totalImpressions) * 100).toFixed(1);

  return (
    <div className="space-y-3.5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-[#0796A8]" />
            Search Console & Traffic Analytics
          </h1>
          <p className="mt-1 text-slate-500 text-sm">
            Live search visibility, organic impressions, user engagement, and high-performing landing pages.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {["Last 7 Days", "Last 28 Days", "Last 3 Months"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                timeRange === range
                  ? "bg-[#071923] text-white"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-slate-200 rounded-xl p-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#0796A8]" />
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Total Impressions</p>
            <Eye className="w-4 h-4 text-[#0796A8]" />
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-xl font-bold text-slate-900">{totalImpressions.toLocaleString()}</h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +24%
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">24h target: 1000+ growing daily</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Total Clicks</p>
            <MousePointerClick className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-xl font-bold text-slate-900">{totalClicks}</h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +18%
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">Direct search clicks into DevZore</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-violet-500" />
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Average CTR</p>
            <BarChart3 className="w-4 h-4 text-violet-600" />
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-xl font-bold text-slate-900">{avgCtr}%</h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Industry High
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">Driven by intent-rich meta titles</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Avg Search Position</p>
            <TrendingUp className="w-4 h-4 text-amber-600" />
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <h3 className="text-xl font-bold text-slate-900">4.6</h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Page 1 Top 5
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">Across 67 indexed URLs</p>
        </div>
      </div>

      {/* Weekly Impression Bar Chart */}
      <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Weekly Impressions & Clicks Growth</h2>
            <p className="text-xs text-slate-500 mt-0.5">Day-by-day organic reach in Google search results</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="w-3 h-3 rounded-sm bg-[#0796A8]" /> Impressions
            </span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="w-3 h-3 rounded-sm bg-emerald-500" /> Clicks
            </span>
          </div>
        </div>

        {/* Visual Bar chart */}
        <div className="grid grid-cols-7 gap-3 h-32 items-end pt-4 pb-2 border-b border-slate-100">
          {WEEKLY_STATS.map((item) => {
            const heightPercent = Math.round((item.impressions / 350) * 100);
            return (
              <div key={item.day} className="flex flex-col items-center gap-2 h-full justify-end group">
                <div className="w-full max-w-[48px] flex items-end justify-center gap-1.5 h-full">
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className="w-1/2 bg-[#0796A8] rounded-t-md hover:bg-[#068292] transition-all relative cursor-pointer"
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition whitespace-nowrap bg-white px-1.5 py-0.5 rounded shadow border">
                      {item.impressions}
                    </span>
                  </div>
                  <div
                    style={{ height: `${Math.round((item.clicks / 35) * 100)}%` }}
                    className="w-1/2 bg-emerald-500 rounded-t-md hover:bg-emerald-600 transition-all cursor-pointer"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-600">{item.day}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid: Top Queries & Device Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Google Queries */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900">Top Performing Search Queries (GSC)</h3>
              <p className="text-xs text-slate-500 mt-0.5">High-intent search terms driving traffic to DevZore</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 font-semibold border-b border-slate-200">
                  <th className="py-1.5 px-3 text-[10px]">Search Query</th>
                  <th className="py-1.5 px-2 text-[10px] text-center">Impressions</th>
                  <th className="py-1.5 px-2 text-[10px] text-center">Clicks</th>
                  <th className="py-1.5 px-2 text-[10px] text-center">CTR</th>
                  <th className="py-1.5 px-2 text-[10px] text-right">Avg Pos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {TOP_GSC_QUERIES.map((q) => (
                  <tr key={q.query} className="hover:bg-slate-50/70 transition">
                    <td className="py-2 px-3 text-xs font-medium text-slate-800">{q.query}</td>
                    <td className="py-2 px-2 text-xs text-center font-mono text-xs">{q.impressions}</td>
                    <td className="py-2 px-2 text-xs text-center font-mono text-xs font-semibold text-emerald-600">{q.clicks}</td>
                    <td className="py-2 px-2 text-xs text-center font-mono text-xs">{q.ctr}</td>
                    <td className="py-2 px-2 text-xs text-right font-mono text-xs text-slate-600">#{q.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Device & User Engagement Breakdown */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-6">
          <div>
            <h3 className="font-bold text-slate-900">Traffic by Device</h3>
            <p className="text-xs text-slate-500 mt-0.5">Visitor device distribution</p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#0796A8]" /> Mobile Devices
                </span>
                <span>58%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#0796A8] rounded-full" style={{ width: "58%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Monitor className="w-4 h-4 text-blue-600" /> Desktop Browsers
                </span>
                <span>39%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "39%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Tablet className="w-4 h-4 text-violet-600" /> Tablets & iPads
                </span>
                <span>3%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-violet-600 rounded-full" style={{ width: "3%" }} />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Live Client Lead Goals</h4>
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <p className="text-xs font-semibold text-emerald-800">24h Inbound Inquiries</p>
              <p className="text-xs text-emerald-600 mt-1">High conversion from MERN & Next.js service pages to WhatsApp & Contact forms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
