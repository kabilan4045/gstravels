import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, company, telLink } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          {/* Placeholder logo slot — swap for client logo (PNG/JPG/SVG) */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-sm font-bold text-white">
            GS
          </div>
          <span className="text-lg font-bold tracking-tight text-brand-primary sm:text-xl">
            GS TRAVELS
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-accent"
                    : "text-brand-slate hover:text-brand-accent"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink(company.phones[0])}
            className="flex items-center gap-2 rounded-md border border-brand-primary px-3 py-2 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
          >
            <Phone size={16} />
            {company.phones[0]}
          </a>
          <Link
            to="/contact"
            className="rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-dark"
          >
            Get Quote
          </Link>
        </div>

        <button
          className="p-2 text-brand-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-brand-bg text-brand-accent"
                      : "text-brand-slate hover:bg-brand-bg"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={telLink(company.phones[0])}
                className="flex items-center justify-center gap-2 rounded-md border border-brand-primary px-3 py-2 text-sm font-semibold text-brand-primary"
              >
                <Phone size={16} />
                {company.phones[0]}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-md bg-brand-accent px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Get Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
