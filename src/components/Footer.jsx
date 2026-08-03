import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { company, telLink, mailLink, navLinks } from "../data/siteData";

const coreServices = [
  "Tours & Travels",
  "Corporate Travel",
  "Self Drive",
  "Airport Pickup & Drop",
];

const badges = ["24/7 Service Available", "Experienced Drivers", "Since 2016"];

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-paper/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <img src="/images/brand/logo-on-dark.png" alt="GS Travels" className="h-11 w-auto" />
          <p className="mt-4 text-base leading-relaxed text-brand-paper/55">
            Reliable tours, travels, and corporate cab services across
            Gummidipoondi, Chennai, Bangalore, Tada, Sullurpeta, and all over
            Tamil Nadu since 2016.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={company.social.facebook}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-accent hover:text-brand-deep"
              aria-label="Facebook"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={company.social.instagram}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-accent hover:text-brand-deep"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={company.social.youtube}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-accent hover:text-brand-deep"
              aria-label="YouTube"
            >
              <YoutubeIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-eyebrow text-brand-paper/90">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks
              .filter((l) => l.to !== "/")
              .map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-brand-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/fleet" className="hover:text-brand-accent">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-eyebrow text-brand-paper/90">Core Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {coreServices.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-eyebrow text-brand-paper/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-base">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent" />
              <span>
                <strong className="block text-brand-paper/90">Head Office</strong>
                {company.addresses.headOffice.full}
              </span>
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent" />
              <span>
                <strong className="block text-brand-paper/90">Branch Office</strong>
                {company.addresses.branchOffice.full}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-brand-accent" />
              <a href={telLink(company.phones[0])} className="hover:text-brand-accent">
                {company.phones[0]}
              </a>
              {" / "}
              <a href={telLink(company.phones[1])} className="hover:text-brand-accent">
                {company.phones[1]}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-brand-accent" />
              <a href={mailLink()} className="hover:text-brand-accent">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p className="text-brand-paper/40">© 2026 GS Travels. All rights reserved.</p>
          <p className="text-brand-paper/40">{badges.join("  ·  ")}</p>
        </div>
      </div>
    </footer>
  );
}
