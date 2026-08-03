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
      className={`sticky top-0 z-50 border-b bg-brand-paper/95 backdrop-blur transition-colors ${
        scrolled ? "border-brand-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src="/images/brand/logo.png"
            alt="GS Travels"
            className="h-11 w-auto sm:h-12"
          />
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
                    ? "text-brand-primary-dark"
                    : "text-brand-ink/70 hover:text-brand-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={telLink(company.phones[0])}
            className="flex items-center gap-2 text-sm font-medium text-brand-ink/70 transition-colors hover:text-brand-ink"
          >
            <Phone size={15} />
            {company.phones[0]}
          </a>
          <Link
            to="/contact"
            className="rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-brand-paper transition-colors hover:bg-brand-primary-dark"
          >
            Get Quote
          </Link>
        </div>

        <button
          className="p-2 text-brand-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-line bg-brand-paper lg:hidden">
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
                      ? "bg-brand-primary/10 text-brand-primary-dark"
                      : "text-brand-ink/70 hover:bg-brand-primary/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={telLink(company.phones[0])}
                className="flex items-center justify-center gap-2 rounded-md border border-brand-line px-3 py-2 text-sm font-semibold text-brand-ink"
              >
                <Phone size={16} />
                {company.phones[0]}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-md bg-brand-primary px-4 py-2 text-center text-sm font-semibold text-brand-paper"
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
