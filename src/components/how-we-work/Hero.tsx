export default function Hero() {
  return (
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker rv rv-u">Weddings · Birthdays · Events — We Make It Beautiful</p>
            <h1 className="rv rv-u d1">
              We Make Your
              <br />
              Special Moments
              <br />
              <em>Beautiful</em>
            </h1>
            <p className="lead rv rv-u d2">From wedding stages to birthdays and celebrations, we turn your ideas into beautiful decorations.</p>
            <div className="hero-btns rv rv-u d3">
              <a className="btn btn-gold" href="https://wa.me/923000000000?text=Assalam-o-Alaikum!%20I%20want%20to%20book%20decoration%20for%20my%20event." target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.25 8.24zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.58 1.74-1.14.27-.56.27-1.04.19-1.14-.08-.1-.23-.16-.48-.28z" />
                </svg>
                Book on WhatsApp
              </a>
              <a className="btn btn-line" href="#how-we-work">See Our Work</a>
            </div>
          </div>
          <div className="hero-photo rv rv-r">
            <div className="frame">
              <img src="/assets/db209ae613b0.jpg" alt="A wedding stage decorated by Hasnain Decoration with red and white flowers, gold arches and warm lights" fetchPriority="high" />
            </div>
            <div className="hero-badge">
              <div>
                <div className="stars" aria-hidden="true">★★★★★</div>
                <b>5.0</b>
              </div>
              <small>
                <strong style={{ "color": "#FAF7F1" }}>Hasnain Decoration</strong>
                <br />
                Loved by happy families in Rawalpindi & Islamabad
              </small>
            </div>
          </div>
        </div>
      </section>
  );
}
