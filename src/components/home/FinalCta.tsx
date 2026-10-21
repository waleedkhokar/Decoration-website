/*
 * Phone fix built into this file (no home.css change needed):
 * on screens under 900px the two photos become a row on top of the
 * section, fully inside the screen, in taller portrait frames so
 * the photos show almost fully. WARNING: keep quote marks out of
 * the CSS below - quotes inside a <style> tag get escaped by the
 * server and cause a React hydration error.
 */
const CTA_CSS = `
@media (max-width:900px){
  .section.cta{padding-top:0}
  .cta .cta-photos{position:relative;inset:auto;display:flex;gap:1rem;justify-content:center;padding:2.6rem 1.25rem 0}
  .cta .cta-photos .cta-photo{position:relative;top:auto;left:auto;right:auto;width:44%;max-width:215px;height:225px}
  .cta .cta-photos .cta-photo-l{transform:rotate(-3deg)}
  .cta .cta-photos .cta-photo-r{transform:rotate(3deg)}
}
`;

export default function FinalCta() {
  return (
      <section className="section cta" id="contact">
        <style>{CTA_CSS}</style>
        <div className="cta-shine" aria-hidden="true" />
        <div className="cta-photos" aria-hidden="true">
          <img className="cta-photo cta-photo-l" src="/assets/birthday/14.jpg" alt="" loading="lazy" />
          <img className="cta-photo cta-photo-r" src="/assets/bridal/5.jpg" alt="" loading="lazy" />
        </div>
        <div className="wrap">
          <span className="label reveal" style={{ "color": "rgba(16,16,16,.65)" }}>Book Your Date</span>
          <h2>
            <span className="cta-line">
              <span>Your Day Can Look</span>
            </span>
            <span className="cta-line">
              <span>
                <em>This Beautiful</em>
                Too
              </span>
            </span>
          </h2>
          <p className="reveal">Tell Jamil your date. You get honest advice, a fair price, and decoration your guests will never forget.</p>
                  </div>
      </section>
  );
}
