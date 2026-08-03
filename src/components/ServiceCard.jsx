import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { iconMap } from "./icons";

export default function ServiceCard({ service, showReadMore = true }) {
  const Icon = iconMap[service.icon];

  return (
    <div className="flex flex-col border-b border-brand-line py-5 first:pt-0 last:border-b-0">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-primary/10 text-brand-primary-dark">
          {Icon && <Icon size={20} />}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-brand-ink">{service.title}</h3>
          <p className="mt-1 text-base text-brand-ink/65">{service.short}</p>
          {showReadMore && (
            <Link
              to="/services"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary-dark hover:text-brand-primary"
            >
              Read More <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
