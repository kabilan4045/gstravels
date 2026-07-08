import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import StatsBar from "../components/StatsBar";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import VehicleCard from "../components/VehicleCard";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import { services, vehicles, serviceAreas, waLink } from "../data/siteData";

export default function Home() {
  return (
    <>
      <Seo
        title="Tours, Travels & Corporate Cabs in Gummidipoondi"
        description="GS Travels offers tours & travels, corporate travel, self drive, airport pickup & drop, and cab rental across Gummidipoondi, Chennai, Bangalore, Tada, Sullurpeta and all over Tamil Nadu since 2016."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary-dark via-brand-primary to-brand-primary-light">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-brand-accent-light">
              Since 2016
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Your Trusted Travel Partner Across Tamil Nadu & Andhra Pradesh
            </h1>
            <p className="mt-5 text-lg text-slate-200">
              Tours & Travels, Corporate Transport, Self Drive & Airport Cabs
              — serving Gummidipoondi, Chennai, Bangalore, Tada, Sullurpeta
              and beyond since 2016.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-md bg-brand-accent px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-accent-dark"
              >
                Get a Quote
              </Link>
              <a
                href={waLink(undefined, "Hi GS Travels, I'd like to enquire about a trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* About snapshot */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About GS Travels" title="A Name You Can Rely On" />
            <p className="mt-4 text-slate-600">
              Founded in 2016 by S. Ganesh, GS Travels has grown into a
              dependable name for tours, corporate transport, and cab hire
              across Gummidipoondi and neighboring regions. From family
              holidays to daily corporate commutes, we deliver safe,
              comfortable, and punctual journeys.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-brand-accent-dark"
            >
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex h-64 items-center justify-center rounded-xl bg-brand-bg text-brand-primary/40 lg:h-80">
            {/* TODO: replace with real company/fleet photo */}
            <span className="text-sm font-medium">Photo coming soon</span>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            description="A full mix of travel and transport solutions for individuals, families, and businesses."
            center
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Fleet preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Our Fleet" title="Vehicles for Every Journey" />
          <Link
            to="/fleet"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-brand-accent-dark"
          >
            View Full Fleet <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.slice(0, 4).map((v) => (
            <VehicleCard key={v.category} vehicle={v} />
          ))}
        </div>
      </section>

      {/* Service areas strip */}
      <section className="bg-brand-primary py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-brand-accent-light">
            Service Areas
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white"
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
