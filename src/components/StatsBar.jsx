import { stats } from "../data/siteData";

export default function StatsBar() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4">
      {stats.map((s) => (
        <div key={s.label} className="min-w-[6rem]">
          <div className="text-display-m text-brand-primary-dark">{s.value}</div>
          <div className="mt-0.5 text-sm font-medium text-brand-ink/70">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
