import { stats } from "../data/siteData";

export default function StatsBar() {
  return (
    <div className="bg-brand-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center text-white">
            <div className="text-3xl font-extrabold text-brand-accent sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm font-medium text-slate-100">
              {s.label}
            </div>
            {s.sub && <div className="text-xs text-slate-300">{s.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
