export default function Showcase() {
  return (
      <section className="section magic" id="showcase">
        <div className="wrap">
          <div className="center-head">
            <span className="label gold centered reveal">Experience The Magic</span>
            <h2 className="display reveal">
              From Vision to
              <em>Reality</em>
            </h2>
            <p className="lead reveal" style={{ "marginInline": "auto" }}>A plain hall goes in. A beautiful event comes out. Drag the gold line and see the change yourself.</p>
          </div>
          {/* Main before / after — wedding reception */}
          <div className="reveal">
            <div className="ba" data-ba={true} data-ba-main={true} role="group" aria-label="Before and after — wedding reception decoration. Drag to compare.">
              <img className="ba-after" src="/assets/650eaa94670c.jpg" alt="The same tent hall after decoration — crystal chandeliers, flower stage, set tables and chairs with a flower-lined walkway" draggable="false" />
              <div className="ba-before-wrap" aria-hidden="true">
                <img src="/assets/46fee1e230be.jpg" alt="" draggable="false" />
              </div>
              <span className="ba-chip before">Before</span>
              <span className="ba-chip after">After</span>
              <div className="ba-line" aria-hidden="true" />
              <div className="ba-handle" tabIndex={0} role="slider" aria-label="Compare before and after — use left and right arrow keys" aria-valuemin={0} aria-valuemax={100} aria-valuenow={50}>
                <span className="diamond" aria-hidden="true" />
                <span className="arrows" aria-hidden="true">‹›</span>
              </div>
            </div>
            <div className="ba-meta">
              <span className="m">
                Wedding Reception
                <i>•</i>
                Stage + Lights
                <i>•</i>
                Rawalpindi
              </span>
              <a className="ba-book" href="https://wa.me/923000000000?text=Assalam-o-Alaikum!%20I%20like%20this%20wedding%20reception%20style.%20Please%20tell%20me%20the%20price." target="_blank" rel="noopener">
                Book This Style
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <p className="ba-hint reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
            </svg>
            Hold and drag the gold line — left is before, right is after.
          </p>
          {/* Second before / after — birthday */}
          <div className="ba-small-wrap reveal">
            <h3 className="ba-small-title">
              A Birthday at Home,
              <em>Made Special</em>
            </h3>
            <div className="ba" data-ba={true} role="group" aria-label="Before and after — birthday decoration. Drag to compare.">
              <img className="ba-after" src="/assets/46535e40a577.jpg" alt="Birthday party after decoration — gold and white balloons, backdrop and cake table" draggable="false" />
              <div className="ba-before-wrap" aria-hidden="true">
                <img src="/assets/816811cbfc3c.jpg" alt="" draggable="false" />
              </div>
              <span className="ba-chip before">Before</span>
              <span className="ba-chip after">After</span>
              <div className="ba-line" aria-hidden="true" />
              <div className="ba-handle" tabIndex={0} role="slider" aria-label="Compare before and after — use left and right arrow keys" aria-valuemin={0} aria-valuemax={100} aria-valuenow={50}>
                <span className="diamond" aria-hidden="true" />
                <span className="arrows" aria-hidden="true">‹›</span>
              </div>
            </div>
            <div className="ba-meta">
              <span className="m">
                Birthday Party
                <i>•</i>
                Balloons + Backdrop
                <i>•</i>
                Islamabad
              </span>
              <a className="ba-book" href="https://wa.me/923000000000?text=Assalam-o-Alaikum!%20I%20like%20this%20birthday%20style.%20Please%20tell%20me%20the%20price." target="_blank" rel="noopener">
                Book This Style
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
