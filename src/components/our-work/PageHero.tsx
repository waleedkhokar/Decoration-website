export default function PageHero() {
  return (
      <section className="page-hero">
        <div className="hero-media">
          <img className="poster" src="/assets/959581db0e4b.jpg" alt="Grand golden wedding hall with floral stage, crystal chandeliers and warm fairy lights" fetchPriority="high" />
          <video id="heroVideo" muted loop playsInline autoPlay preload="metadata" poster="/assets/959581db0e4b.jpg" aria-hidden="true">
            <source src="/assets/d951a1ccee87.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
        </div>
        <div className="hero-in">
          <p className="hero-kicker" data-hero-fade={true}>Hasnain Decoration — Our Portfolio</p>
          <h1>
            <span className="line">
              <span>Our Work —</span>
            </span>
            <span className="line">
              <span>Happy Events</span>
            </span>
            <span className="line">
              <span>
                We
                <em>Decorated</em>
              </span>
            </span>
          </h1>
          <p className="hero-sub" data-hero-fade={true}>
            See our stages, lights and setups. Every photo is a real happy day.
          </p>
          <div className="hero-chips" data-hero-fade={true}>
            <span>
              <b>15</b>
              Years of Work
            </span>
            <span>Rawalpindi · Islamabad</span>
            <span>Drag the gold line below</span>
          </div>
        </div>
      </section>
  );
}
