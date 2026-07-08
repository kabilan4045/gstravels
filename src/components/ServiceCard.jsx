import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { iconMap } from "./icons";

export default function ServiceCard({ service, showReadMore = true }) {
  const Icon = iconMap[service.icon];

  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-bg text-brand-primary">
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="mt-4 text-lg font-bold text-brand-primary">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">{service.short}</p>
      {showReadMore && (
        <Link
          to="/services"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-brand-accent-dark"
        >
          Read More <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
