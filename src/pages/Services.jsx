import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { iconMap } from "../components/icons";
import { services, serviceAreas, waLink } from "../data/siteData";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore GS Travels' full range of services: tours & travels, corporate travel, self drive, airport pickup & drop, and cab & vehicle rental across Tamil Nadu and Andhra Pradesh."
      />

      <section className="bg-brand-primary-dark py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-slate-300">
            A complete mix of travel and transport solutions, tailored to
            individuals, families, and businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.slug}
                className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-start"
              >
                <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-start">
                  <span className="text-4xl font-extrabold text-brand-primary/15">
                    {s.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-bg text-brand-primary">
                    {Icon && <Icon size={24} />}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{s.long}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="rounded-md bg-brand-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-accent-dark"
                    >
                      Get Quote
                    </Link>
                    <a
                      href={waLink(
                        undefined,
                        `Hi GS Travels, I'd like to enquire about ${s.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-brand-primary px-4 py-2 text-xs font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
                    >
                      <MessageCircle size={14} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Coverage" title="Service Areas" center />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {serviceAreas.map((area, i) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
