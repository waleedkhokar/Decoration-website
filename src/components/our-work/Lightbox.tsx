export default function Lightbox() {
  return (
      <div className="lb" id="lightbox" role="dialog" aria-modal="true" aria-label="See our work — big view" aria-hidden="true">
        <button className="lb-btn lb-close" id="lbClose" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
        <button className="lb-btn lb-prev" id="lbPrev" aria-label="Previous photo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button className="lb-btn lb-next" id="lbNext" aria-label="Next photo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="lb-stage">
          <div className="lb-media" id="lbMedia" />
          <div className="lb-cap">
            <span className="tag" id="lbTag" />
            <p id="lbCaption" />
          </div>
          <div className="lb-count" id="lbCount" />
        </div>
      </div>
  );
}
