import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { company, telLink } from "../data/siteData";

export default function CTASection({
  title = "Planning a trip or need daily company transport?",
  subtitle = "Let's get you moving.",
}) {
  return (
    <section className="bg-brand-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-display-l text-brand-paper">{title}</h2>
        <p className="text-brand-paper/60">{subtitle}</p>
        <div className="mt-2 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Link
            to="/contact"
            className="w-full rounded-md bg-brand-accent px-7 py-3 text-center text-sm font-semibold text-brand-deep transition-colors hover:bg-white sm:w-auto"
          >
            Get Quote
          </Link>
          <a
            href={telLink(company.phones[0])}
            className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-brand-paper/80 underline decoration-brand-paper/30 underline-offset-4 transition-colors hover:text-brand-paper sm:py-0"
          >
            <Phone size={15} />
            Call {company.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
