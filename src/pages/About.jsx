import { MapPin } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import { services, company } from "../data/siteData";

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about GS Travels — founded in 2016 by S. Ganesh, offering tours, corporate transport, self drive, and airport cabs from bases in Gummidipoondi, Tamil Nadu and Tada, Andhra Pradesh."
      />

      <section className="bg-brand-primary-dark py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About GS Travels
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Story" title="Built on Trust, Since 2016" center />
        <p className="mt-6 text-slate-600">
          GS Travels was founded in 2016 by S. Ganesh with a simple goal: to
          provide dependable, comfortable travel solutions to individuals,
          families, and businesses across Gummidipoondi and the wider
          Chennai–Bangalore corridor. What began as a local cab service has
          grown into a full-fledged travel company offering tours, corporate
          transport, self-drive rentals, and airport transfers — backed by
          two operational bases in Tamil Nadu and Andhra Pradesh.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="bg-brand-bg py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-brand-primary">Our Mission</h3>
            <p className="mt-3 text-sm text-slate-600">
              To provide safe, comfortable, and reliable travel and transport
              solutions for every customer — from daily commuters to
              holidaying families.
            </p>
            <p className="mt-3 text-xs italic text-slate-400">
              Draft — pending client approval
            </p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-brand-primary">Our Vision</h3>
            <p className="mt-3 text-sm text-slate-600">
              To become the most trusted travel and transport brand across
              Tamil Nadu and Andhra Pradesh.
            </p>
            <p className="mt-3 text-xs italic text-slate-400">
              Draft — pending client approval
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Leadership" title="Founder" center />
        <div className="mt-8 inline-flex flex-col items-center rounded-xl bg-white p-8 shadow-sm">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-primary text-2xl font-bold text-white">
            SG
          </div>
          <h3 className="mt-4 text-lg font-bold text-brand-primary">
            {company.owner}
          </h3>
          <p className="text-sm text-slate-500">Founder, Established {company.founded}</p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="Our Services at a Glance" center />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.slug} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-brand-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.long}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two locations */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where We Operate"
          title="Two Operating Locations"
          center
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-brand-primary/20 bg-white p-6">
            <div className="flex items-center gap-2 text-brand-primary">
              <MapPin size={20} />
              <h3 className="font-bold">{company.addresses.headOffice.label}</h3>
            </div>
            <p className="mt-1 text-sm font-semibold text-brand-accent">
              {company.addresses.headOffice.region}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {company.addresses.headOffice.full}
            </p>
          </div>
          <div className="rounded-xl border-2 border-brand-accent/20 bg-white p-6">
            <div className="flex items-center gap-2 text-brand-primary">
              <MapPin size={20} />
              <h3 className="font-bold">{company.addresses.branchOffice.label}</h3>
            </div>
            <p className="mt-1 text-sm font-semibold text-brand-accent">
              {company.addresses.branchOffice.region}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {company.addresses.branchOffice.full}
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <CTASection
        title="Get in touch to plan your next trip"
        subtitle="Or set up corporate transport for your team."
      />
    </>
  );
}
