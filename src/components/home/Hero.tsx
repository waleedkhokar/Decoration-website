export default function Hero() {
  return (
      <section className="hero">
        <div className="hero-media">
          <img className="poster" src="/assets/959581db0e4b.jpg" alt="Grand golden wedding hall with floral stage, crystal chandeliers and warm fairy lights" fetchPriority="high" />
          <video id="heroVideo" muted loop playsInline autoPlay preload="metadata" poster="/assets/959581db0e4b.jpg" aria-hidden="true">
            <source src="/assets/d951a1ccee87.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
        </div>
        <canvas id="dust" aria-hidden="true" />
        <div className="hero-in">
          <div className="hero-main">
            <p className="hero-kicker" data-hero-fade={true}>Weddings · Birthdays · Events — We Make It Beautiful</p>
            <h1>
              <span className="line">
                <span>We Make Your</span>
              </span>
              <span className="line">
                <span>Special Moments</span>
              </span>
              <span className="line">
                <span>
                  <em>Beautiful</em>
                </span>
              </span>
            </h1>
            <p className="hero-sub" data-hero-fade={true}>
              From wedding stages to birthdays and celebrations, we turn your ideas into beautiful decorations.
            </p>
            {/* <div className="hero-ctas" data-hero-fade={true}>
              <a className="btn btn-gold" href="https://wa.me/923000000000?text=Assalam-o-Alaikum!%20I%20want%20to%20book%20decoration%20for%20my%20event." target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91A9.86 9.86 0 0 0 12.04 2m0 18.03h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.24-8.25 8.24m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.25-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28" />
                </svg>
                Book on WhatsApp
              </a>
              <a className="btn btn-ghost" href="#work">See Our Work</a>
            </div> */}
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true">Scroll</div>
      </section>
  );
}
