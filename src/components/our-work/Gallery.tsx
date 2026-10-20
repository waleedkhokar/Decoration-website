export default function Gallery() {
  return (
      <section className="section dark" id="gallery">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label reveal">Events Gallery</span>
              <h2 className="display reveal">
                All Kinds of
                <em>Events</em>
              </h2>
            </div>
            <p className="lead reveal">Tap any photo to see it big. Use the left and right arrows to see more — each photo tells you what we did.</p>
            <div className="gal-nav reveal">
              <button className="gal-arrow" id="galPrev" type="button" aria-label="Previous events">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <button className="gal-arrow" id="galNext" type="button" aria-label="Next events">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          {/* Event cards are rendered from the EVENTS list in the script below.
               To add more later: just add one more line to that list. */}
          <div className="events-view">
            <div className="events-grid" id="eventsGrid" />
          </div>
          <div className="more-row">
            <button className="btn btn-ghost" id="moreEvents" type="button">View More Events</button>
          </div>
        </div>
      </section>
  );
}
