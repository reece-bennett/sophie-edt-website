import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import baedtLogo from "@/assets/baedt-logo.jpeg";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/book", label: "Book" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="relative mx-auto max-w-7xl px-6 py-5 md:py-7">
        {/* BAEDT badge — pinned top-left */}
        <Link
          to="/"
          aria-label="BAEDT member"
          className="absolute left-4 top-4 md:left-6 md:top-6"
          onClick={() => setOpen(false)}
        >
          <img
            src={baedtLogo}
            alt="British Association of Equine Dental Technicians (BAEDT) member"
            className="h-12 w-12 rounded-full bg-white object-contain p-1 shadow-sm ring-1 ring-border/60 sm:h-16 sm:w-16 md:h-20 md:w-20"
          />
        </Link>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Brand — centred logo + name */}
          <Link
            to="/"
            className="group flex flex-col items-center gap-4 text-center md:mx-auto md:flex-row md:gap-6 md:text-left"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="Sophie Bennett Equine Dentistry logo"
              className="h-28 w-28 rounded-full object-cover shadow-md ring-1 ring-border/60 transition-transform group-hover:scale-[1.03] sm:h-32 sm:w-32 md:h-36 md:w-36"
            />
            <div className="flex flex-col items-center md:items-start">
              <div className="font-display text-2xl leading-tight text-primary sm:text-3xl md:text-4xl">
                Sophie Bennett
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs md:tracking-[0.32em]">
                Equine Dentistry
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="absolute right-4 top-5 rounded-md p-2 text-primary md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="py-3 text-center text-sm font-medium text-muted-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Book appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
