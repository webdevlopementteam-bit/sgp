"use client";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Check, Clock, FlaskConical, Layers, Mail, MapPin, MessageCircle, Phone, Plus, Target } from "lucide-react";
import { Reveal } from "./ui";

const whyIcons = [Clock, BadgeCheck, FlaskConical, Target, MapPin, Layers];

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#1e5eff]" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">{children}</span>
    </div>
  );
}

function Heading({ children, className = "" }) {
  return (
    <h2 className={`font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl ${className}`}>
      {children}
    </h2>
  );
}

// Long-form product copy from lib/products.js (`content`). FAQ answers stay in the DOM inside
// <details>, so crawlers read the same text as the FAQPage schema even while they are closed.
export default function ProductContent({ p }) {
  const c = p.content;

  return (
    <>
      {/* ---------- what it is ---------- */}
      <section className="relative bg-white pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>The material</Eyebrow></Reveal>
            <Reveal i={1}><Heading className="mt-5">{c.what.title}</Heading></Reveal>
          </div>
          <Reveal i={2}>
            <p className="text-lg leading-relaxed text-slate-600 lg:pt-9">{c.what.text}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- grades ---------- */}
      <section className="relative bg-[#f6f8fb] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><Eyebrow>Grades</Eyebrow></Reveal>
          <Reveal i={1}><Heading className="mt-5">{c.range.title}</Heading></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {c.range.items.map((g, i) => (
              <Reveal key={g.name} i={i} className="h-full">
                <div className="relative h-full overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200 sm:p-7">
                  <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: p.accent }} />
                  <h3 className="font-display text-xl font-semibold text-[#0b1530]">{g.name}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal i={1}>
            <p className="mt-6 max-w-3xl leading-relaxed text-slate-600">{c.range.note}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- properties + uses ---------- */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl bg-white p-6 ring-1 ring-slate-200 sm:p-9">
              <Heading className="sm:text-3xl">{c.properties.title}</Heading>
              <p className="mt-4 leading-relaxed text-slate-600">{c.properties.text}</p>
              <ul className="mt-6 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                {c.properties.items.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: `${p.accent}1a`, color: p.accent }}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal i={1} className="h-full">
            <div className="h-full rounded-3xl bg-[#f6f8fb] p-6 ring-1 ring-slate-200 sm:p-9">
              <Heading className="sm:text-3xl">{c.uses.title}</Heading>
              <p className="mt-4 leading-relaxed text-slate-600">{c.uses.text}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- choosing a grade ---------- */}
      <section className="relative bg-[#0b1f4d] py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{c.choose.title}</h2>
            </Reveal>
            <Reveal i={1}>
              <p className="mt-4 leading-relaxed text-blue-100/80">{c.choose.lead}</p>
              <p className="mt-4 leading-relaxed text-blue-100/80">{c.choose.note}</p>
            </Reveal>
          </div>
          <ul className="space-y-3">
            {c.choose.items.map((g, i) => (
              <Reveal key={g.name} i={i}>
                <li className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-[#8be04e]">{g.name}</h3>
                  <p className="mt-1.5 leading-relaxed text-blue-100/85">{g.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- why us ---------- */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><Eyebrow>Why SGP</Eyebrow></Reveal>
          <Reveal i={1}><Heading className="mt-5 max-w-3xl">{c.why.title}</Heading></Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {c.why.items.map((w, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <div key={w.name} className="h-full bg-white p-6 sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eef4ff] text-[#1e5eff]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{w.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- quote ---------- */}
      <section className="relative bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="flex flex-col gap-7 rounded-3xl bg-[#f6f8fb] p-6 ring-1 ring-slate-200 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <Heading>{c.quote.title}</Heading>
                <p className="mt-4 leading-relaxed text-slate-600">{c.quote.text}</p>
                <p className="mt-2 leading-relaxed text-slate-600">{c.quote.note}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:w-72 lg:flex-col">
                <a href="tel:+919818058610" className="inline-flex items-center gap-2.5 rounded-full bg-[#0b1f4d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123a8f]">
                  <Phone className="h-4 w-4" /> +91 98180 58610
                </a>
                <a href="mailto:info@shriganeshpolymer.in" className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#1e5eff] hover:text-[#1e5eff]">
                  <Mail className="h-4 w-4 shrink-0" /> <span className="[overflow-wrap:anywhere]">info@shriganeshpolymer.in</span>
                </a>
                <a href="https://wa.me/919818058610" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#1e5eff] hover:text-[#1e5eff]">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="relative bg-white pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <Reveal i={1}><Heading className="mt-5">Frequently Asked Questions</Heading></Reveal>
            <Reveal i={2}>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1e5eff] underline-offset-4 hover:underline">
                Ask us anything else <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {c.faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold leading-snug text-slate-900">{f.q}</h3>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#eef4ff] text-[#1e5eff] transition-transform duration-300 group-open:rotate-45">
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <p className="pb-5 pr-10 leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
