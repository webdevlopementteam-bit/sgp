import { ArrowUpRight, MapPin } from "lucide-react";

// Sister company strip, shown just above the footer on every page.
export default function GroupCompany() {
  return (
    <section aria-label="Group company" className="border-t border-slate-200 bg-white py-10 font-label sm:py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Our group company</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#0b1530] sm:text-3xl">Yashana Polymers</h2>
            <p className="mt-2 leading-relaxed text-slate-600">
              A part of Shri Ganesh Polymer — manufacturer and supplier of PC, ABS and PBT engineering polymer granules,
              backed by the same in-house compounding and quality testing.
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-4 w-4 shrink-0 text-[#1e5eff]" /> Bawana DSIIDC Industrial Area, Delhi
            </p>
          </div>
          <a
            href="https://yashanapolymers.com/"
            target="_blank"
            rel="noopener"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#0b1f4d] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white shadow-lg shadow-[#0b1f4d]/20 transition hover:bg-[#123a8f] md:self-center"
          >
            Visit yashanapolymers.com
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#8be04e] text-[#0b1f4d] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
