import { Link } from "@tanstack/react-router";
import { site, whatsappUrl } from "@/lib/site";
import logo from "@/assets/logo.png";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 rounded-full bg-cream object-cover" />
            <div>
              <div className="font-display text-xl">Sophie Bennett</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">Equine Dentistry</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Calm, sympathetic dental care for horses and ponies. Fully qualified, fully insured, covering Gloucestershire and all surrounding counties.
          </p>
          <div className="mt-4 h-px gold-line" />
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-accent">{site.credentials}</p>
        </div>

        <div>
          <h4 className="font-display text-lg">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/book" className="hover:text-accent">Book appointment</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone size={14} className="text-accent" /><a href={`tel:${site.phone}`} className="hover:text-accent">{site.phoneDisplay}</a></li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-accent" /><a href={`mailto:${site.email}`} className="break-all hover:text-accent">{site.email}</a></li>
            <li className="flex items-center gap-2"><MessageCircle size={14} className="text-accent" /><a href={whatsappUrl("Hi Sophie, I'd like to book an appointment for my horse.")} target="_blank" rel="noreferrer" className="hover:text-accent">WhatsApp</a></li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-accent" />{site.area}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
