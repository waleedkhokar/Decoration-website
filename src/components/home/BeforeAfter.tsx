export default function BeforeAfter() {
  return (
      <section className="section ba-sec" id="vision">
        <div className="wrap">
          <div className="ba-head reveal">
            <span className="ba-kicker">Experience The Magic</span>
            <h2 className="ba-title">
              From Vision to
              <em>Reality</em>
            </h2>
          </div>
          <div className="ba-frame reveal" id="baFrame">
            <img className="ba-img" src="/assets/32148ad3ba1d.jpg" alt="The same tent hall fully decorated — wedding stage, chandeliers, flowers and tables" draggable="false" />
            <img className="ba-img ba-before" src="/assets/f33ef7fa686a.jpg" alt="" aria-hidden="true" draggable="false" />
            <span className="ba-chip ba-chip-l">Before</span>
            <span className="ba-chip ba-chip-r">After</span>
            <div className="ba-handle" id="baHandle" role="slider" tabIndex={0} aria-label="Slide to compare before and after" aria-valuemin={0} aria-valuemax={100} aria-valuenow={50}>
              <span className="ba-knob">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9.5 5.5L4 12l5.5 6.5M14.5 5.5L20 12l-5.5 6.5" />
                </svg>
              </span>
            </div>
          </div>
          <div className="ba-meta reveal">
            <span className="ba-meta-l">
              Wedding Reception
              <i>•</i>
              Stage + Lights
              <i>•</i>
              Rawalpindi
            </span>
            <a className="ba-meta-link" href="#work">
              View This Event
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
  );
}
