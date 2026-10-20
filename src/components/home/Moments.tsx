export default function Moments() {
  return (
      <section className="section dark" id="work">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label reveal">Our Recent Work</span>
              <h2 className="display reveal">
                Moments We
                <em>Recently Decorated</em>
              </h2>
            </div>
            <div className="mom-head-right reveal">
              <p className="lead">Tap any photo or video to see it big. Use the arrows to see more moments.</p>
              <div className="mom-nav">
                <button className="mom-arrow" id="momPrev" type="button" aria-label="See previous moments">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <span className="mom-pos" id="momPos">1 / 2</span>
                <button className="mom-arrow" id="momNext" type="button" aria-label="See next moments">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Moments are rendered from the MOMENTS list in the script below.
               To add more later: just add one more line to that list. */}
          <div className="mom-tabs reveal" role="tablist" aria-label="Filter moments by event type">
            <button className="mom-tab active" type="button" role="tab" aria-selected="true" data-filter="all">All</button>
            <button className="mom-tab" type="button" role="tab" aria-selected="false" data-filter="weddings">Weddings</button>
            <button className="mom-tab" type="button" role="tab" aria-selected="false" data-filter="mehndi">Mehndi</button>
            <button className="mom-tab" type="button" role="tab" aria-selected="false" data-filter="corporate">Corporate</button>
            <button className="mom-tab" type="button" role="tab" aria-selected="false" data-filter="birthdays">Birthdays</button>
            <button className="mom-tab" type="button" role="tab" aria-selected="false" data-filter="milad">Milad</button>
          </div>
          <div className="moments-grid" id="momentsGrid" />
        </div>
      </section>
  );
}
