import { whyChooseUs } from "../data/siteData";
import { iconMap } from "./icons";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="What nine years on the road actually taught us"
            />
          </div>
          <div className="lg:col-span-3">
            <dl className="divide-y divide-brand-line border-t border-brand-line">
              {whyChooseUs.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.title} className="flex gap-4 py-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-primary/10 text-brand-primary-dark">
                      {Icon && <Icon size={20} />}
                    </div>
                    <div>
                      <dt className="font-semibold text-brand-ink">{item.title}</dt>
                      <dd className="mt-1 text-base text-brand-ink/65">
                        {item.description}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
