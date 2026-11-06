import Link from "next/link";

const TARGET = "/products/pc-granules-manufacturer/";

// The static export has no server redirects, so the old /products/pc/ URL forwards from the page itself.
export const metadata = {
  title: { absolute: "PC Granules Manufacturer in Delhi | Shri Ganesh Polymer" },
  alternates: { canonical: TARGET },
};

export default function OldPcPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${TARGET}`} />
      <section className="bg-white px-5 pb-24 pt-[calc(97px+4rem)] text-center font-label text-slate-600 md:pt-[calc(137px+4rem)]">
        This page has moved to{" "}
        <Link href={TARGET} className="font-semibold text-[#1e5eff] underline">
          PC Granules Manufacturer in Delhi
        </Link>
        .
      </section>
    </>
  );
}
