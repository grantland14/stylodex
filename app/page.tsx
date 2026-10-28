const CHECKS = [
  { title: "Live and selling", body: "Every brand on a list is checked against its own store. Closed or off-category brands drop out." },
  { title: "Real prices and sizes", body: "Prices come from each brand's own store, in US dollars, with sizes and where it ships." },
  { title: "Recommended elsewhere too", body: "A brand only makes a list if sources outside Stylodex also put it alongside the original." },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:pt-20">
        <h1 className="max-w-2xl text-4xl font-normal leading-[1.1] tracking-tight md:text-5xl">
          Find brands like the ones you already love
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          Verified alternatives to the brands and stores you know, with real prices, sizes and shipping for each one.
        </p>
      </section>
      <section className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-serif text-3xl">How every list is checked</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {CHECKS.map((c) => (
              <div key={c.title} className="border-t border-ink pt-4">
                <h3 className="font-medium">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
