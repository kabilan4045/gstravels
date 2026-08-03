import Seo from "../components/Seo";
import ResponsiveImg from "../components/ResponsiveImg";
import SectionHeading from "../components/SectionHeading";
import VehicleCard from "../components/VehicleCard";
import CTASection from "../components/CTASection";
import { vehicles } from "../data/siteData";

const fleetDetails = {
  Cars: {
    photo: "/images/fleet/cars.jpg",
    bestFor: "airport runs & self-drive",
    hasPhoto: true,
  },
  "Tempo Traveller": {
    photo: "/images/fleet/tempo-traveller-front.jpg",
    bestFor: "corporate staff commute",
    hasPhoto: true,
  },
  "Mini Bus": {
    photo: null,
    bestFor: "mid-size group outings",
    hasPhoto: false,
  },
  "Tour Bus": {
    photo: "/images/fleet/tour-bus.jpg",
    bestFor: "large-group tours",
    hasPhoto: true,
  },
  Vans: {
    photo: null,
    bestFor: "flexible small groups",
    hasPhoto: false,
  },
};

const realPhotoStrip = [
  { src: "/images/fleet/tour-bus.jpg", caption: "Ashok Leyland tour coach" },
  { src: "/images/fleet/tempo-traveller-rear.jpg", caption: "Tempo Traveller lineup, Gummidipoondi" },
  { src: "/images/team/drivers-team.jpg", caption: "Our drivers and office team" },
  { src: "/images/fleet/tempo-traveller-rear-branding.jpg", caption: "Branded roundel decals" },
];

export default function Fleet() {
  return (
    <>
      <Seo
        title="Fleet & Gallery"
        description="Browse the GS Travels fleet — cars, tempo travellers, mini buses, tour buses, and vans available for self drive, corporate, and group travel."
      />

      {/* Hero band uses a real vehicle photo, differentiating from other pages' plain intros */}
      <section className="relative flex min-h-[280px] items-center overflow-hidden bg-brand-deep sm:min-h-[320px]">
        <ResponsiveImg
          src="/images/fleet/tour-bus.jpg"
          alt="GS Travels Ashok Leyland tour coach"
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-brand-deep/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-display-xl text-brand-paper">Our Fleet</h1>
          <p className="text-lede mx-auto mt-4 max-w-2xl text-brand-paper/75">
            Built to handle everything from solo self-drive trips to
            50-seater corporate and tour group movements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Vehicle Categories" title="Choose the right vehicle" />
        <div className="mt-8">
          {vehicles.map((v, i) => (
            <VehicleCard
              key={v.category}
              vehicle={v}
              photo={fleetDetails[v.category]?.photo}
              bestFor={fleetDetails[v.category]?.bestFor}
              hasPhoto={fleetDetails[v.category]?.hasPhoto}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
        <p className="mt-8 border-t border-brand-line pt-6 text-eyebrow text-brand-ink/40">
          * Exact seating capacity to be confirmed with client.
        </p>
      </section>

      <section className="border-y border-brand-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="A glimpse of the real fleet" center />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {realPhotoStrip.map((p) => (
              <div
                key={p.src}
                className="overflow-hidden rounded-lg border border-brand-line transition-shadow hover:shadow-md"
              >
                <ResponsiveImg
                  src={p.src}
                  alt={p.caption}
                  className="h-48 w-full object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <p className="p-3 text-sm font-medium text-brand-ink/55">{p.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for the right vehicle for your trip?"
        subtitle="Get Quote or reach us on WhatsApp."
      />
    </>
  );
}
