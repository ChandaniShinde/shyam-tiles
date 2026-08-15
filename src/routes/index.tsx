import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ArrowRight,
  ArrowUp,
  Menu,
  X,
  Star,
  ChevronDown,
  Sparkles,
  Truck,
  ShieldCheck,
  Users,
  Award,
  Layers,
  Home as HomeIcon,
  Building2,
  Package,
} from "lucide-react";

import hero from "@/assets/paving-hero.svg";
import logoImage from "@/assets/jd/d30cc59d-fa85-4e59-b493-e55c0e9ae31a.png";
import jd1 from "@/assets/jd/1zwjdxh.jpg";
import jd2 from "@/assets/jd/42pft5e.jpg";
import jd3 from "@/assets/jd/2wf4n8x.jpg";
import jd4 from "@/assets/jd/29zbt0z.jpg";
import jd5 from "@/assets/jd/2on93mq.jpg";
import jd6 from "@/assets/jd/1xkxmzp.jpg";
import jd7 from "@/assets/jd/3o721en.jpg";
import jd8 from "@/assets/jd/1vbzoo1ltd.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+919766000008";
const WHATSAPP = "919766000008";
const WA_MESSAGE = "Hello Shyam Tiles, I am interested in your products. Please share more details.";
const EMAIL = "pedepreetesh9@gmail.com";
const ADDRESS = "Plot No. D-69, Pandurang Industries, Near Ruby Hotel, MIDC, Nanded, Maharashtra 431603";
const MAP_QUERY = "Shyam+Tiles+Plot+D-69+Pandurang+Industries+Nanded";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 5000, suffix: "+", label: "Sq. M. Paved" },
  { value: 24, suffix: "/7", label: "Site Support" },
];

const categories = [
  { icon: Building2, name: "Parking Tiles", desc: "Anti-skid, heavy-duty tiles for parking lots, campuses and commercial access points.", img: jd5 },
  { icon: Layers, name: "Paver Blocks (Gattu)", desc: "Durable concrete pavers suited for driveways, pathways and public circulation zones.", img: jd6 },
  { icon: ShieldCheck, name: "Kerb Stones", desc: "Precision-finished edging that strengthens pavements and improves site presentation.", img: jd4 },
  { icon: Package, name: "Concrete Blocks / Cement Blocks (Vit)", desc: "Reliable masonry blocks for boundary walls, retaining structures and fast construction.", img: jd7 },
  { icon: HomeIcon, name: "Interlocking Pavers", desc: "Flexible surface solutions for plazas, courtyards, industrial yards and landscaping.", img: jd8 },
];

const projectTypes = [
  "Parking Lots",
  "Driveways",
  "Industrial Yards",
  "Commercial Pavements",
  "Public Spaces",
];

const features = [
  { icon: Award, title: "Premium Grade Materials", desc: "High-strength paving and block products made for long-term performance." },
  { icon: ShieldCheck, title: "Built for Heavy Use", desc: "Engineered to handle vehicle load, wear and changing weather conditions." },
  { icon: Truck, title: "Reliable Supply", desc: "Consistent material availability and prompt dispatch for projects of every scale." },
  { icon: Users, title: "Trusted by Builders", desc: "Preferred by contractors, developers and site engineers across the region." },
  { icon: Layers, title: "Tailored Solutions", desc: "Expert guidance for parking layouts, surfacing and material selection." },
  { icon: MessageCircle, title: "Responsive Support", desc: "Clear quotations, on-site advice and after-sales support when you need it." },
];

const services = [
  { icon: HomeIcon, title: "Site Consultation", desc: "Practical recommendations for paving layouts, durability and finish selection." },
  { icon: Building2, title: "Project Supply", desc: "End-to-end supply for commercial complexes, housing developments and public works." },
  { icon: Truck, title: "Bulk Delivery", desc: "Reliable transportation and loading support for large-scale construction sites." },
  { icon: Package, title: "Material Planning", desc: "Accurate quantity estimates to keep your project efficient and cost-controlled." },
  { icon: Sparkles, title: "Surface Finishing Advice", desc: "Guidance on finishes, edge details and installation-ready specifications." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Products sourced and supplied to meet demanding site standards." },
];

const testimonials = [
  { name: "Pretesh", role: "Owner, Shyam Tiles", text: "The parking tile and paver supply was timely and the finish was exactly what our site required.", rating: 5 },
  { name: "Pretesh", role: "Owner, Shyam Tiles", text: "We used their kerb stones and blocks for a commercial frontage and the quality stood out immediately.", rating: 5 },
  { name: "Pretesh", role: "Owner, Shyam Tiles", text: "Reliable delivery, fair pricing and strong material quality for every phase of our project.", rating: 5 },
];

const faqs = [
  { q: "What products do you supply?", a: "We specialise in parking tiles, paver blocks (gattu), kerb stones, concrete blocks and interlocking pavers for commercial and residential paving needs." },
  { q: "Do you provide delivery for large projects?", a: "Yes — we handle bulk supply and site delivery across Nanded and surrounding regions with dependable logistics." },
  { q: "Can you help with product selection?", a: "Absolutely. We guide clients on the right paving and block solution based on load, finish and project scope." },
  { q: "How can I get a quotation?", a: "Call or WhatsApp us with your project details and we will prepare a detailed quotation for the required materials." },
];

/* ---------------- Helpers ---------------- */

function useReveal() {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  };
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const start = performance.now();
            const dur = 1600;
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.floor(eased * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------------- Sections ---------------- */

function BrandMark() {
  return (
    <div className="flex items-center">
      <img
        src={logoImage}
        alt="Shyam Tiles logo"
        className="h-12 w-auto max-w-[220px] object-contain"
      />
    </div>
  );
}

function Header({ dark, toggleDark }: { dark: boolean; toggleDark: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-muted md:inline-flex"
          >
            {dark ? "☀" : "☾"}
          </button>
          <a
            href={`tel:${PHONE}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90 md:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_MESSAGE)}`}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-medium text-primary shadow-gold transition hover:opacity-90 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-4 mb-4 rounded-3xl p-4 lg:hidden"
          >
            <div className="flex flex-col">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-accent"
                >
                  {n.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground">
                  <Phone className="h-4 w-4" /> Call
                </a>
                    <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_MESSAGE)}`} className="flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-medium text-primary">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => toggleDark()}
                      aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                      className="w-full flex items-center justify-center gap-3 rounded-full border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/6"
                    >
                      <span className="text-lg">{dark ? "☀️" : "🌙"}</span>
                      <span>{dark ? "Light Mode" : "Dark Mode"}</span>
                    </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-24">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img src={hero} alt="Shyam Tiles paving and construction materials" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </motion.div>

      <div className="mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col justify-center px-5 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-hero-foreground">
            <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} /> Premium Paving & Construction Materials
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-hero-foreground sm:text-6xl lg:text-7xl">
            Stronger surfaces for <span className="text-gradient-gold">every project</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-hero-muted sm:text-xl">
            Shyam Tiles supplies durable parking tiles, paver blocks, kerb stones, concrete blocks and interlocking pavers for commercial, residential and civic paving solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary shadow-gold transition hover:scale-[1.02]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-card"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 text-hero-foreground">
              <div className="font-display text-3xl font-bold sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-hero-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-hero-muted">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const r = useReveal();
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <motion.div {...r} className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-gradient-gold opacity-30 blur-2xl" />
          <div className="grid grid-cols-2 gap-4">
            <img src={jd8} alt="Shyam Tiles paving materials" className="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover shadow-elegant" loading="lazy" />
            <img src={jd2} alt="Parking and paving surfaces" className="aspect-square w-full rounded-2xl object-cover shadow-soft" loading="lazy" />
            <img src={jd7} alt="Concrete and block materials" className="aspect-square w-full rounded-2xl object-cover shadow-soft" loading="lazy" />
          </div>
        </motion.div>

        <motion.div {...r}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Shyam Tiles
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">
            Trusted paving and construction materials for demanding sites.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Since our beginnings in Nanded MIDC, Shyam Tiles has evolved into a dependable partner for contractors, developers and owners seeking high-quality paving solutions. We supply durable materials that balance strength, finish and long-term performance.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From parking areas and driveways to commercial pavements and public spaces, our focus is simple: provide the right product, at the right time, with expert guidance from planning to delivery.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { icon: Award, t: "Certified Products" },
              { icon: Users, t: "Personal Service" },
              { icon: ShieldCheck, t: "Best Pricing" },
              { icon: Sparkles, t: "Expert Guidance" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15">
                  <x.icon className="h-5 w-5" style={{ color: "var(--gold)" }} />
                </div>
                <span className="text-sm font-semibold text-primary">{x.t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  const r = useReveal();
  return (
    <motion.div {...r} className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Core Products"
          title="Purpose-built materials for paving and construction"
          sub="A focused range of durable products designed for parking areas, access roads, public spaces and structural masonry applications."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group hover-lift overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                <div className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl glass">
                  <c.icon className="h-5 w-5 text-hero-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                  Explore <ArrowRight className="h-4 w-4" style={{ color: "var(--gold)" }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="brands" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Project Applications"
          title="Built for today’s demanding construction environments"
          sub="From small private driveways to large commercial sites, our materials are chosen for reliability and performance."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {projectTypes.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group grid aspect-[3/1.4] place-items-center rounded-2xl border border-border bg-card px-4 transition hover:border-accent hover:shadow-soft"
            >
              <span className="font-display text-lg font-bold text-muted-foreground transition group-hover:text-foreground">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(60% 50% at 10% 10%, oklch(0.92 0.08 85 / 0.4), transparent 60%), radial-gradient(50% 40% at 100% 100%, oklch(0.79 0.15 78 / 0.15), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Quality that keeps projects moving" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="hover-lift group rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold shadow-gold transition group-hover:scale-110">
                <f.icon className="h-6 w-6 text-primary" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [jd1, jd2, jd3, jd4, jd5, jd6, jd7, jd8];
  const [lightbox, setLightbox] = useState<string | null>(null);
  const spans = [
    "row-span-2", "", "", "row-span-2", "", "", "", "",
  ];
  return (
    <section id="gallery" className="py-24 lg:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Project Gallery"
          title="A closer look at our paving solutions"
          sub="Material finishes and site-ready surfaces that support durable construction."
        />
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {imgs.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setLightbox(src)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl bg-muted shadow-soft ${spans[i] ?? ""}`}
            >
              <img
                src={src}
                loading="lazy"
                alt={`Shyam Tiles paving material photo ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 transition group-hover:bg-primary/30" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-primary/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Shyam Tiles paving materials"
              className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-elegant"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass text-hero-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Our Services" title="From planning to project-ready delivery" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="hover-lift group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-gold opacity-0 blur-2xl transition group-hover:opacity-30" />
              <s.icon className="h-8 w-8" style={{ color: "var(--gold)" }} strokeWidth={2} />
              <h3 className="mt-4 font-display text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 lg:py-32" style={{ background: "var(--primary)" }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 30%, oklch(0.79 0.15 78 / 0.5), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center text-primary-foreground lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
          Testimonials
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Trusted by contractors and property owners across Nanded</h2>

        <div className="relative mt-14 h-64 sm:h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: testimonials[i].rating }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-current" style={{ color: "var(--gold)" }} />
                ))}
              </div>
              <p className="mt-6 text-xl leading-relaxed text-primary-foreground sm:text-2xl">"{testimonials[i].text}"</p>
              <div className="mt-6 font-display text-lg font-semibold">{testimonials[i].name}</div>
              <div className="text-sm text-primary-foreground-muted">{testimonials[i].role}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonial ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary-foreground" : "w-1.5 bg-primary-foreground-muted"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Answers to common questions" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold text-primary sm:text-lg">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const r = useReveal();
  return (
    <section id="contact" className="relative py-24 lg:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Visit Us" title="Meet the team behind your next paving project" sub="Drop by for product guidance, project advice and delivery support." />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.div {...r} className="space-y-4 lg:col-span-2">
            {[
              { icon: MapPin, title: "Address", val: ADDRESS },
              { icon: Phone, title: "Phone", val: "+91 97660 00008", href: `tel:${PHONE}` },
              { icon: Mail, title: "Email", val: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Clock, title: "Business Hours", val: "Mon – Sat · 9:30 AM – 8:30 PM" },
            ].map((c) => {
              const Wrap = c.href ? "a" : "div";
              return (
                <Wrap
                  key={c.title}
                  {...(c.href ? { href: c.href } : {})}
                  className="hover-lift flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.title}</div>
                    <div className="mt-1 text-base font-medium text-primary">{c.val}</div>
                  </div>
                </Wrap>
              );
            })}

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_MESSAGE)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary shadow-gold">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary">
                <MapPin className="h-4 w-4" /> Directions
              </a>
            </div>
          </motion.div>

          <motion.div {...r} className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="Shyam Tiles Nanded — Map"
                src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`}
                className="h-[420px] w-full lg:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-primary-foreground" style={{ background: "var(--primary)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center">
            <BrandMark />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground-muted">
            Nanded’s trusted source for durable parking tiles, paver blocks, kerb stones, concrete blocks and interlocking pavers.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground-muted">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.slice(0, 5).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-primary-foreground-muted transition hover:text-accent">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground-muted">Products</div>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.name} className="text-primary-foreground-muted">{c.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground-muted">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground-muted">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {ADDRESS}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> +91 97660 00008</li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" /> Mon–Sat · 9:30 AM – 8:30 PM</li>
          </ul>
          <div className="mt-4 overflow-hidden rounded-2xl border border-primary-foreground/10">
            <iframe
              title="map-footer"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=14&output=embed`}
              className="h-32 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-primary-foreground-muted sm:flex-row lg:px-8">
          <div>© {new Date().getFullYear()} Shyam Tiles, Nanded. All rights reserved.</div>
          <div>Crafted for dependable paving and construction outcomes.</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-24 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--brand-whatsapp)] text-primary-foreground shadow-elegant transition hover:scale-110 sm:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-24 right-24 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition hover:scale-110 sm:bottom-6 sm:right-24"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-0 border-t border-border bg-card sm:hidden">
        <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-primary">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_MESSAGE)}`} className="flex items-center justify-center gap-2 bg-gradient-gold py-3.5 text-sm font-semibold text-primary">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}

function Index() {
  const [dark, setDark] = useState(false);
  // Initialise theme from localStorage on client mount
  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      if (saved) setDark(saved === "dark");
    } catch (e) {
      // ignore
    }
  }, []);

  // Apply theme class and persist preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {}
  }, [dark]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header dark={dark} toggleDark={() => setDark(!dark)} />
      <main>
        <Hero />
        <About />
        <Products />
        <Brands />
        <WhyUs />
        <Gallery />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
