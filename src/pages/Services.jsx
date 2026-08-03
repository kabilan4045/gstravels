import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Seo from "../components/Seo";
import ResponsiveImg from "../components/ResponsiveImg";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { iconMap } from "../components/icons";
import { services, serviceAreas, waLink } from "../data/siteData";

const featuredSlug = "corporate-travel";

export default function Services() {
  const featured = services.find((s) => s.slug === featuredSlug);
  const rest = services.filter((s) => s.slug !== featuredSlug);

  return (
    <>
      <Seo
        title="Services"
        description="Explore GS Travels' full range of services: tours & travels, corporate travel, self drive, airport pickup & drop, and cab & vehicle rental across Tamil Nadu and Andhra Pradesh."
      />

      <section className="mx-auto max-w-3xl px-4 pb-4 pt-12 sm:pt-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-display-xl text-brand-ink">Our Services</h1>
        <p className="text-lede mt-4 text-brand-ink/65">
          A complete mix of travel and transport solutions, tailored to
          individuals, families, and businesses.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        {/* Featured service gets real visual weight — it's the repeat-business core */}
        {featured && (
          <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-brand-line lg:grid-cols-2">
            <ResponsiveImg
              src="/images/fleet/cars.jpg"
              alt="GS Travels sedans used for corporate travel"
              className="h-64 w-full object-cover lg:h-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="p-8 sm:p-10">
              <span className="text-eyebrow text-brand-primary-dark">
                Featured
              </span>
              <h2 className="text-display-l mt-2 text-brand-ink">
                {featured.title}
              </h2>
              <p className="mt-3 text-brand-ink/65">{featured.long}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-md bg-brand-primary px-5 py-2.5 text-sm font-semibold text-brand-paper transition-colors hover:bg-brand-primary-dark"
                >
                  Get Quote
                </Link>
                <a
                  href={waLink(
                    undefined,
                    `Hi GS Travels, I'd like to enquire about ${featured.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink/70 underline decoration-brand-ink/20 underline-offset-4 hover:text-brand-ink"
                >
                  <MessageCircle size={14} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Remaining services — compact rows, no numbering (they aren't a sequence) */}
        <div className="mt-4 divide-y divide-brand-line border-t border-brand-line">
          {rest.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.slug} className="flex flex-col gap-5 py-8 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-primary/10 text-brand-primary-dark">
                  {Icon && <Icon size={22} />}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-ink">{s.title}</h3>
                  <p className="mt-1.5 text-base text-brand-ink/65">{s.long}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="py-1.5 text-sm font-semibold text-brand-primary-dark hover:text-brand-primary"
                    >
                      Get Quote
                    </Link>
                    <span className="text-brand-ink/20">|</span>
                    <a
                      href={waLink(
                        undefined,
                        `Hi GS Travels, I'd like to enquire about ${s.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 py-1.5 text-sm font-semibold text-brand-ink/70 hover:text-brand-ink"
                    >
                      <MessageCircle size={13} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Areas — a plain list of places, not a sequence, so no numbering */}
      <section className="border-y border-brand-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Coverage" title="Service Areas" center />
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-md border border-brand-line px-4 py-2 text-sm font-medium text-brand-ink/70"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
