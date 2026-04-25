import { AppointmentForm } from "./components/AppointmentForm";

const clinic = {
  name: "Your Clinic Name",
  location: "City, Area",
  phone: "+1 (555) 012-3456",
  whatsapp: "15550123456",
  email: "care@yourclinic.com",
  address: "123 Wellness Avenue, City, Area",
};

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#appointment", label: "Appointment" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    icon: "🩺",
    title: "General Consultation",
    description:
      "Comprehensive primary care, preventive checkups, chronic condition reviews, and same-day advice.",
  },
  {
    icon: "🦷",
    title: "Dental Care",
    description:
      "Cleanings, fillings, smile evaluations, and gentle dental care for adults and children.",
  },
  {
    icon: "✨",
    title: "Skin Treatment",
    description:
      "Evidence-based care for acne, allergies, rashes, pigmentation, and everyday skin wellness.",
  },
  {
    icon: "🔬",
    title: "Diagnostics",
    description:
      "Fast lab coordination, vitals monitoring, ECG support, and accurate reports for better decisions.",
  },
];

const doctors = [
  {
    name: "Dr. Aisha Morgan",
    qualification: "MD, General Medicine",
    experience: "14+ years experience",
    initials: "AM",
    gradient: "from-sky-200 via-cyan-100 to-emerald-100",
  },
  {
    name: "Dr. Daniel Lee",
    qualification: "BDS, Cosmetic Dentistry",
    experience: "11+ years experience",
    initials: "DL",
    gradient: "from-teal-200 via-emerald-100 to-blue-100",
  },
  {
    name: "Dr. Priya Shah",
    qualification: "MD, Dermatology",
    experience: "9+ years experience",
    initials: "PS",
    gradient: "from-blue-200 via-sky-100 to-green-100",
  },
];

const testimonials = [
  {
    name: "Maya R.",
    review:
      "The team was calm, punctual, and very clear with my treatment plan. Booking was effortless.",
  },
  {
    name: "Arjun K.",
    review:
      "Modern clinic, caring doctors, and quick diagnostics. I felt genuinely listened to.",
  },
  {
    name: "Sofia M.",
    review:
      "Clean environment and excellent dental care. The staff made the whole visit stress-free.",
  },
  {
    name: "Leo T.",
    review:
      "Professional service from reception to consultation. Highly recommended for families.",
  },
];

const stats = [
  { value: "12+", label: "Years of care" },
  { value: "25k+", label: "Patients served" },
  { value: "4.9/5", label: "Patient rating" },
];

function MedicalIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-sky-100 via-white to-emerald-100 p-3 shadow-2xl shadow-sky-200/50 sm:max-w-[430px] sm:rounded-[2rem] sm:p-5">
      <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute -right-12 bottom-10 h-44 w-44 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="relative flex h-full flex-col justify-between rounded-[1.35rem] bg-white/75 p-4 backdrop-blur sm:rounded-[1.5rem] sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-sky-700">Today&apos;s care team</p>
            <p className="text-xs text-slate-500">Available now</p>
          </div>
          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
            Open
          </div>
        </div>

        <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 shadow-xl shadow-emerald-200 sm:h-52 sm:w-52">
          <div className="grid h-32 w-32 place-items-center rounded-full bg-white sm:h-40 sm:w-40">
            <div className="relative h-28 w-28 rounded-full bg-sky-100">
              <div className="absolute left-1/2 top-4 h-14 w-14 -translate-x-1/2 rounded-full bg-slate-700" />
              <div className="absolute left-1/2 top-9 h-11 w-16 -translate-x-1/2 rounded-b-full rounded-t-3xl bg-amber-200" />
              <div className="absolute bottom-2 left-1/2 h-14 w-24 -translate-x-1/2 rounded-t-[2rem] bg-white shadow-lg" />
              <div className="absolute bottom-8 left-1/2 h-8 w-14 -translate-x-1/2 rounded-t-2xl border-t-4 border-sky-500" />
              <div className="absolute bottom-5 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="rounded-2xl bg-sky-50 p-3 sm:p-4">
            <p className="text-xl font-black text-sky-700 sm:text-2xl">98%</p>
            <p className="text-[11px] font-medium text-slate-600 sm:text-xs">On-time visits</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-3 sm:p-4">
            <p className="text-xl font-black text-emerald-700 sm:text-2xl">24/7</p>
            <p className="text-[11px] font-medium text-slate-600 sm:text-xs">Emergency help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#e0f7ff_0,transparent_34%),linear-gradient(180deg,#f8fdff_0%,#ffffff_45%,#f4fbf8_100%)] pb-24 text-slate-900 lg:pb-0">
      <header className="sticky top-0 z-40 border-b border-sky-100/70 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label={`${clinic.name} home`}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-400 text-xl font-black text-white shadow-lg shadow-sky-200 sm:h-11 sm:w-11">
              +
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black tracking-tight text-slate-950 sm:text-base">{clinic.name}</span>
              <span className="block truncate text-xs font-medium text-slate-500">{clinic.location}</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-sky-700">
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`}
            className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-sky-700 sm:inline-flex"
          >
            Call Now
          </a>
        </nav>
        <div className="border-t border-sky-50 lg:hidden">
          <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2" aria-label="Mobile section navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="shrink-0 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-black text-sky-700 shadow-sm">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div className="animate-fade-up text-center sm:text-left">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-sky-100 bg-white px-3 py-2 text-xs font-bold text-sky-700 shadow-sm sm:px-4 sm:text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
            <span className="truncate">Trusted medical care in {clinic.location}</span>
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,12vw,4rem)] font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:mx-0 sm:text-6xl lg:text-7xl">
            Your Health, Our Priority
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mx-0 sm:text-xl sm:leading-8">
            Compassionate doctors, modern diagnostics, and convenient appointments designed around your comfort and long-term wellbeing.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 px-7 py-4 text-base font-black text-white shadow-xl shadow-sky-200 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Book Appointment
            </a>
            <a
              href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-7 py-4 text-base font-black text-sky-700 shadow-sm transition hover:-translate-y-1 hover:border-sky-300"
            >
              Call Now
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-sky-100 bg-white/80 p-3 shadow-sm sm:rounded-3xl sm:p-5">
                <p className="text-2xl font-black text-slate-950 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up animation-delay-200">
          <MedicalIllustration />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8" aria-label="Emergency contact">
        <div className="rounded-[1.5rem] border border-red-100 bg-gradient-to-r from-red-50 via-white to-emerald-50 p-4 shadow-sm sm:flex sm:items-center sm:justify-between sm:rounded-[2rem] sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-red-100 text-xl sm:h-12 sm:w-12 sm:text-2xl">🚑</span>
            <div>
              <h2 className="text-base font-black text-slate-950 sm:text-lg">Emergency support available</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">For urgent symptoms, call our priority line and our care team will guide your next step immediately.</p>
            </div>
          </div>
          <a href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`} className="mt-4 inline-flex w-full justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-100 transition hover:-translate-y-0.5 sm:mt-0 sm:w-auto">
            Emergency: {clinic.phone}
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="relative rounded-[1.5rem] bg-gradient-to-br from-sky-600 to-emerald-500 p-1 shadow-2xl shadow-sky-100 sm:rounded-[2rem]">
            <div className="rounded-[1.25rem] bg-white p-5 sm:rounded-[1.75rem] sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">About us</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">Patient-first care with modern clinical standards.</h2>
              <p className="mt-5 leading-7 text-slate-600">
                {clinic.name} brings together experienced physicians, dental specialists, dermatology care, and diagnostics in one calm, accessible clinic. Every visit is focused on clear communication, precise care, and a comfortable patient experience.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: "✅", title: "Certified Doctors", text: "Licensed clinicians with strong specialty experience and continuous training." },
              { icon: "🏥", title: "Modern Equipment", text: "Digital systems, clean treatment rooms, and reliable diagnostic coordination." },
              { icon: "⏱️", title: "Convenient Visits", text: "Simple booking, timely consultations, and friendly follow-up support." },
              { icon: "🛡️", title: "Safe Environment", text: "Strict hygiene protocols and patient privacy at every step of care." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100 sm:rounded-3xl sm:p-6">
                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white/70 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Complete care for everyday health needs"
          description="Choose from trusted medical, dental, skin, and diagnostic services delivered by a coordinated clinical team."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[1.5rem] border border-sky-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100 sm:rounded-[2rem] sm:p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 text-2xl transition group-hover:scale-110 sm:h-14 sm:w-14 sm:text-3xl" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="doctors" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Doctors"
          title="Meet your care specialists"
          description="A friendly team of certified doctors combining clinical excellence with clear, empathetic communication."
        />
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="overflow-hidden rounded-[1.5rem] border border-sky-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100 sm:rounded-[2rem]">
              <div className={`grid h-48 place-items-center bg-gradient-to-br sm:h-64 ${doctor.gradient}`}>
                <div className="grid h-24 w-24 place-items-center rounded-full border-8 border-white/75 bg-white text-3xl font-black text-sky-700 shadow-xl sm:h-32 sm:w-32 sm:text-4xl">
                  {doctor.initials}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-950">{doctor.name}</h3>
                <p className="mt-2 text-sm font-bold text-sky-700">{doctor.qualification}</p>
                <p className="mt-1 text-sm text-slate-600">{doctor.experience}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="appointment" className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">Appointment</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">Book a visit in under a minute</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Tell us your preferred service and time. Our reception team will confirm availability and share visit instructions by phone or email.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Same-day slots when available",
                "Secure appointment request storage",
                "Clear follow-up from clinic staff",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <AppointmentForm services={services.map((service) => service.title)} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Patients trust our calm, clear approach"
          description="Real feedback from people who value timely care, clean spaces, and doctors who explain every step."
        />
        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-sm">
              <div className="flex text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">“{testimonial.review}”</p>
              <p className="mt-5 font-black text-slate-950">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">Contact</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">Visit {clinic.name}</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              We are easy to reach from {clinic.location}. Call, email, or request an appointment and our care team will help you plan your visit.
            </p>
            <div className="mt-8 grid gap-4">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                <span className="text-sm font-bold text-emerald-300">Address</span>
                <p className="mt-1 text-lg font-black">{clinic.address}</p>
              </a>
              <a href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                <span className="text-sm font-bold text-emerald-300">Phone</span>
                <p className="mt-1 text-lg font-black">{clinic.phone}</p>
              </a>
              <a href={`mailto:${clinic.email}`} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                <span className="text-sm font-bold text-emerald-300">Email</span>
                <p className="mt-1 text-lg font-black">{clinic.email}</p>
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-2 shadow-2xl">
            <iframe
              title={`${clinic.name} map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`}
              className="h-[300px] w-full rounded-[1.5rem] border-0 sm:h-[430px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-white px-4 pb-8 pt-10 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-sky-100 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black text-slate-950">{clinic.name}</p>
            <p className="mt-1 text-sm text-slate-500">Clean, compassionate care in {clinic.location}.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-600">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-sky-700">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {["f", "in", "ig"].map((social) => (
              <a key={social} href="#top" className="grid h-10 w-10 place-items-center rounded-full bg-sky-50 text-sm font-black text-sky-700 transition hover:bg-sky-600 hover:text-white" aria-label={`${social} social link`}>
                {social}
              </a>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-7xl text-sm text-slate-500">© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
      </footer>

      <a
        href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent("Hello, I would like to book an appointment.")}`}
        className="fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl text-white shadow-2xl shadow-emerald-300 transition hover:-translate-y-1 hover:bg-emerald-600 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16 sm:text-3xl"
        aria-label="Chat on WhatsApp"
      >
        ☎
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sky-100 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-14px_40px_rgba(14,165,233,0.14)] backdrop-blur lg:hidden" aria-label="Mobile quick actions">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <a href="#appointment" className="rounded-2xl bg-gradient-to-r from-sky-600 to-emerald-500 px-3 py-3 text-center text-xs font-black text-white shadow-lg shadow-sky-100">
            Book
          </a>
          <a href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`} className="rounded-2xl border border-sky-100 bg-sky-50 px-3 py-3 text-center text-xs font-black text-sky-700">
            Call
          </a>
          <a href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent("Hello, I would like to book an appointment.")}`} className="rounded-2xl border border-emerald-100 bg-emerald-50 px-3 py-3 text-center text-xs font-black text-emerald-700">
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
