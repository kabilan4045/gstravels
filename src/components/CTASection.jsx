import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { company, telLink } from "../data/siteData";

export default function CTASection({
  title = "Planning a trip or need daily company transport?",
  subtitle = "Let's get you moving.",
}) {
  return (
    <section className="bg-brand-primary-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="text-slate-300">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-dark"
          >
            Get Quote
          </Link>
          <a
            href={telLink(company.phones[0])}
            className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone size={16} />
            Call {company.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
