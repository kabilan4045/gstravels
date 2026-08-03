import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import Seo from "../components/Seo";
import ResponsiveImg from "../components/ResponsiveImg";
import StatsBar from "../components/StatsBar";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import { iconMap } from "../components/icons";
import { services, serviceAreas, waLink } from "../data/siteData";

const featuredService = services.find((s) => s.slug === "corporate-travel");
const otherServices = services.filter((s) => s.slug !== "corporate-travel");
const FeaturedIcon = featuredService ? iconMap[featuredService.icon] : null;

const fleetPreview = [
  {
    name: "Tempo Traveller",
    capacity: "12+1 Pax",
    photo: "/images/fleet/tempo-traveller-front.jpg",
  },
  {
    name: "Cars",
    capacity: "4 Pax",
    photo: "/images/fleet/cars.jpg",
  },
  {
    name: "Tour Bus",
    capacity: "35–50 Pax*",
    photo: "/images/fleet/tour-bus.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Tours, Travels & Corporate Cabs in Gummidipoondi"
        description="GS Travels offers tours & travels, corporate travel, self drive, airport pickup & drop, and cab rental across Gummidipoondi, Chennai, Bangalore, Tada, Sullurpeta and all over Tamil Nadu since 2016."
      />

      {/* Hero — signature element: real fleet photo, full-bleed.
          Mobile gets its own composition: shorter viewport, a flatter scrim
          (the left-to-right desktop gradient doesn't work when text spans
          the full width), a lower focal crop, and stacked full-width CTAs. */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-brand-deep sm:min-h-[85vh]">
        <ResponsiveImg
          src="/images/fleet/hero-lineup.jpg"
          alt="GS Travels tempo traveller fleet lined up at the Gummidipoondi yard"
          className="absolute inset-0 h-full w-full object-cover object-[center_62%] sm:object-center"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-brand-deep/60 sm:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-brand-deep via-brand-deep/80 to-brand-deep/20 sm:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent sm:from-brand-deep/90 sm:via-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-eyebrow flex flex-wrap items-center gap-x-2 gap-y-1 text-brand-accent">
              <span>Gummidipoondi, TN</span>
              <span aria-hidden className="text-brand-paper/30">
                &middot;
              </span>
              <span>Tada, AP</span>
              <span aria-hidden className="text-brand-paper/30">
                &middot;
              </span>
              <span>Since 2016</span>
            </div>
            <h1 className="text-display-xl mt-4 text-brand-paper">
              From one taxi in Gummidipoondi to a fleet that covers two states.
            </h1>
            <p className="text-lede mt-5 max-w-xl text-brand-paper/75">
              GS Travels has grown from a single local cab into sedans,
              tempo travellers, mini buses and tour coaches — run out of two
              bases in Tamil Nadu and Andhra Pradesh. Self-drive rentals to
              50-seater tour buses, we've got it covered.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-x-8 sm:gap-y-4">
              <Link
                to="/contact"
                className="rounded-md bg-brand-accent px-7 py-3.5 text-center text-sm font-semibold text-brand-deep transition-colors hover:bg-white sm:py-3"
              >
                Plan a Trip
              </Link>
              <a
                href={waLink(undefined, "Hi GS Travels, I'd like to enquire about a trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2 text-sm font-semibold text-brand-paper/80 underline decoration-brand-paper/30 underline-offset-4 transition-colors hover:text-brand-paper sm:justify-start sm:py-0"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="About GS Travels" title="Owner-run, since 2016" />
            <p className="mt-5 text-brand-ink/70">
              S. Ganesh started GS Travels in 2016 with a single cab and a
              simple promise: show up on time, every time. Nine years on,
              that promise still runs the company — the same family that
              answered the phone in year one still handles bookings today,
              now backed by a full fleet and a second base across the state
              line in Tada, Andhra Pradesh.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary-dark hover:text-brand-primary"
            >
              Read the full story <ArrowRight size={14} />
            </Link>
            <div className="mt-8 border-t border-brand-line pt-6">
              <StatsBar />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg border border-brand-line">
              <ResponsiveImg
                src="/images/fleet/tempo-traveller-rear-branding.jpg"
                alt="GS Travels tempo travellers with branded roundel decals, Gummidipoondi yard"
                className="h-64 w-full object-cover lg:h-80"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <p className="mt-2 text-xs text-brand-ink/45">
              GS Travels tempo travellers — Gummidipoondi yard
            </p>
          </div>
        </div>
      </section>

      {/* Services preview — featured + list, not six identical cards */}
      <section className="border-y border-brand-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Built for daily commutes and once-a-year trips alike"
            description="Corporate accounts are where most of our repeat business comes from — everything else flexes around it."
          />
          <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
            {featuredService && (
              <div className="overflow-hidden rounded-lg border border-brand-line lg:col-span-3">
                <ResponsiveImg
                  src="/images/fleet/cars.jpg"
                  alt="GS Travels sedans used for corporate travel"
                  className="h-56 w-full object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
                <div className="p-6 sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-primary/10 text-brand-primary-dark">
                    {FeaturedIcon && <FeaturedIcon size={22} />}
                  </div>
                  <h3 className="text-display-m mt-4 text-brand-ink">
                    {featuredService.title}
                  </h3>
                  <p className="mt-2 text-base text-brand-ink/65">
                    {featuredService.long}
                  </p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary-dark hover:text-brand-primary"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
            <div className="lg:col-span-2">
              {otherServices.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet preview */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Our Fleet" title="Vehicles for every journey" />
          <Link
            to="/fleet"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-primary-dark hover:text-brand-primary"
          >
            View Full Lineup <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {fleetPreview.map((v) => (
            <div key={v.name} className="overflow-hidden rounded-lg border border-brand-line">
              <ResponsiveImg
                src={v.photo}
                alt={`GS Travels ${v.name}`}
                className="h-48 w-full object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <div className="p-4">
                <h3 className="font-semibold text-brand-ink">{v.name}</h3>
                <p className="text-sm text-brand-ink/55">{v.capacity}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service areas strip — understated, not a colored band */}
      <section className="border-y border-brand-line py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-eyebrow text-center text-brand-ink/45">
            Where We Operate
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-md border border-brand-line px-3 py-1.5 text-sm text-brand-ink/70"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <CTASection />
    </>
  );
}
