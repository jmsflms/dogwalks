const services = [
  { icon: "☀", title: "Little walk", detail: "A cheerful 20-minute neighborhood walk", price: "$8" },
  { icon: "♥", title: "Walk + hugs", detail: "A 30-minute walk with playtime and plenty of fuss", price: "$12" },
  { icon: "⌂", title: "Hello visit", detail: "A 15-minute garden break, fresh water and company", price: "$6" },
];

const steps = [
  ["1", "Email Louie’s grown-up", "Tell us about your dog, where you live and when you need help."],
  ["2", "Meet first", "Louie and his parent or guardian meet you and your dog before the first booking."],
  ["3", "Happy paws", "Your dog gets friendly, careful attention close to home."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Louie's Little Walks home"><span className="brand-paw">●</span> Louie’s Little Walks</a>
        <div className="nav-links"><a href="#services">Services</a><a href="#safety">Safety</a><a className="button button-small" href="mailto:louie@gmail.com?subject=Dog walking enquiry">Ask about a walk</a></div>
      </nav>
      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Winter Park, Florida</span>
          <h1>Little walks.<br /><em>Very happy dogs.</em></h1>
          <p className="intro">Friendly neighborhood dog walks, playtime and caring check-ins from Louie—with a parent always involved.</p>
          <div className="hero-actions"><a className="button" href="mailto:louie@gmail.com?subject=Dog walking enquiry&body=Hi! Please tell us your name, neighborhood, your dog’s name and size, and the day you need help.">Ask about a walk <span>→</span></a><a className="text-link" href="#services">See prices ↓</a></div>
          <p className="mini-note">For friendly, small-to-medium dogs Louie can safely manage.</p>
        </div>
        <div className="logo-wrap"><img src="/louies-logo.png" alt="Louie's Little Walks — walks, love and wagging tails" /><span className="spark spark-one">★</span><span className="spark spark-two">♥</span></div>
      </section>
      <section className="section services" id="services">
        <div className="section-heading"><span className="eyebrow">Simple local help</span><h2>Pick the right kind of visit</h2><p>Introductory neighborhood prices. Payment is arranged with Louie’s parent or guardian.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><span className="service-icon" aria-hidden="true">{service.icon}</span><h3>{service.title}</h3><p>{service.detail}</p><strong>{service.price}</strong></article>)}</div>
      </section>
      <section className="section how">
        <div className="section-heading centered"><span className="eyebrow">How it works</span><h2>Easy for humans. Fun for dogs.</h2></div>
        <div className="step-grid">{steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="section safety" id="safety">
        <div><span className="eyebrow">Safety first</span><h2>A little business with grown-up backup.</h2></div>
        <ul><li>A parent or guardian approves and helps manage every booking.</li><li>New dogs need a free meet-and-greet with their owner present.</li><li>Dogs must be friendly, healthy, vaccinated, licensed and comfortable on a leash.</li><li>No aggressive dogs, dogs that pull very strongly, off-leash walks or extreme weather walks.</li><li>Owners provide a secure collar or harness, leash and emergency contact details.</li></ul>
      </section>
      <section className="cta"><span className="cta-paw">●</span><div><span className="eyebrow">Ready for a wagging tail?</span><h2>Say hello to Louie.</h2></div><a className="button button-white" href="mailto:louie@gmail.com?subject=Dog walking enquiry">Email Louie’s grown-up →</a></section>
      <footer><div><strong>Louie’s Little Walks</strong><span>Winter Park, Florida</span></div><p>Services are provided by a minor under parent or guardian supervision. Availability and suitability are confirmed before every booking. This is a small neighborhood service, not veterinary care, boarding or professional dog training.</p><a href="mailto:louie@gmail.com">louie@gmail.com</a></footer>
    </main>
  );
}
