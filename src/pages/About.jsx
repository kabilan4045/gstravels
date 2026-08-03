import { MapPin, Route } from "lucide-react";
import Seo from "../components/Seo";
import ResponsiveImg from "../components/ResponsiveImg";
import SectionHeading from "../components/SectionHeading";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import { iconMap } from "../components/icons";
import { services, company } from "../data/siteData";

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about GS Travels — founded in 2016 by S. Ganesh, offering tours, corporate transport, self drive, and airport cabs from bases in Gummidipoondi, Tamil Nadu and Tada, Andhra Pradesh."
      />

      {/* Intro — text + real team photo, no dark banner */}
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-12 sm:pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="text-eyebrow text-brand-primary-dark">About GS Travels</div>
            <h1 className="text-display-xl mt-3 text-brand-ink">
              Built one trip at a time.
            </h1>
            <p className="text-lede mt-5 text-brand-ink/70">
              {company.owner} started GS Travels in {company.founded} with a
              single cab and a simple promise: show up on time, every time.
              Nine years later that same promise runs a fleet spanning two
              states.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg border border-brand-line">
              <ResponsiveImg
                src="/images/team/drivers-team.jpg"
                alt="GS Travels drivers and office staff"
                className="h-64 w-full object-cover lg:h-80"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <p className="mt-2 text-xs text-brand-ink/45">
              Our drivers and office team
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Story" title="From one cab to a fleet" />
        <div className="mt-6 space-y-4 text-brand-ink/70">
          <p>
            GS Travels began in {company.founded} as a single local taxi
            working the routes around Gummidipoondi. {company.owner} drove
            the early bookings himself, and the business grew the way most
            trusted local operators do — one repeat customer, one referral,
            one corporate contract at a time.
          </p>
          <p>
            As the requests changed — a company asking for daily staff
            pickup, a family planning a multi-day pilgrimage, a traveller
            needing a self-drive car for a weekend — the fleet grew to match:
            sedans, tempo travellers, mini buses, and tour coaches. Today
            that fleet operates out of two bases, the original Gummidipoondi
            office in Tamil Nadu and a newer branch across the state line in
            Tada, Andhra Pradesh, giving faster coverage on both sides of the
            border.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="border-y border-brand-line bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-lg border border-brand-line p-8">
            <h3 className="text-display-m text-brand-ink">Our Mission</h3>
            <p className="mt-3 text-base text-brand-ink/65">
              To provide safe, comfortable, and reliable travel and transport
              solutions for every customer — from daily commuters to
              holidaying families.
            </p>
          </div>
          <div className="rounded-lg border border-brand-line p-8">
            <h3 className="text-display-m text-brand-ink">Our Vision</h3>
            <p className="mt-3 text-base text-brand-ink/65">
              To become the most trusted travel and transport brand across
              Tamil Nadu and Andhra Pradesh.
            </p>
          </div>
        </div>
        {/* TODO: mission/vision copy pending final client sign-off */}
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Leadership" title="Founder" />
        <div className="mt-8 flex items-center gap-5 border-l-2 border-brand-accent pl-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xl font-semibold text-brand-paper">
            SG
          </div>
          <div>
            <h3 className="font-semibold text-brand-ink">{company.owner}</h3>
            <p className="mt-1 text-base text-brand-ink/65">
              Founded GS Travels in {company.founded} and still oversees
              day-to-day operations across both the Gummidipoondi and Tada
              offices.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-y border-brand-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="Our services at a glance" center />
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={s.slug} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-primary/10 text-brand-primary-dark">
                    {Icon && <Icon size={20} />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink">{s.title}</h3>
                    <p className="mt-1.5 text-base text-brand-ink/65">{s.long}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two locations — real route moment */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where We Operate"
          title="Two states, one fleet"
          center
        />
        <div className="mt-10 grid grid-cols-1 items-center gap-0 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-lg border border-brand-line p-6">
            <div className="flex items-center gap-2 text-brand-primary-dark">
              <MapPin size={18} />
              <span className="text-eyebrow">Head Office</span>
            </div>
            <h3 className="mt-2 font-semibold text-brand-ink">
              {company.addresses.headOffice.region}
            </h3>
            <p className="mt-2 text-base text-brand-ink/65">
              {company.addresses.headOffice.full}
            </p>
          </div>

          <div className="flex items-center justify-center py-6 sm:flex-col sm:px-6 sm:py-0">
            <div className="h-px w-10 bg-brand-line sm:h-10 sm:w-px" />
            <Route size={18} className="mx-3 shrink-0 text-brand-accent sm:mx-0 sm:my-3" />
            <div className="h-px w-10 bg-brand-line sm:h-10 sm:w-px" />
          </div>

          <div className="overflow-hidden rounded-lg border border-brand-line">
            <ResponsiveImg
              src="/images/office/branch-tada.jpg"
              alt="GS Travels branch office building in Tada, Andhra Pradesh"
              className="h-40 w-full object-cover"
              sizes="(min-width: 640px) 40vw, 100vw"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-brand-primary-dark">
                <MapPin size={18} />
                <span className="text-eyebrow">Branch Office</span>
              </div>
              <h3 className="mt-2 font-semibold text-brand-ink">
                {company.addresses.branchOffice.region}
              </h3>
              <p className="mt-2 text-base text-brand-ink/65">
                {company.addresses.branchOffice.full}
              </p>
            </div>
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
