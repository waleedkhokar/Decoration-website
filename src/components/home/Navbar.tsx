export default function Navbar() {
  return (
      <>
        <header className="nav" id="nav">
          <div className="wrap nav-in">
            <a className="brand" href="#top" aria-label="Hasnain Decoration — home">
              <span className="b1">
                Hasnain
                <i>Decoration</i>
              </span>
              <span className="b2">Events · Weddings · Lighting</span>
            </a>
            <div className="nav-right">
              <nav className="nav-links" aria-label="Main">
                <a className="nl" href="#about">About</a>
                <a className="nl" href="#services">Services</a>
                <a className="nl" href="#work">Moments</a>
                <a className="nl" href="#why">Why Us</a>
                <a className="nl" href="#reviews">Reviews</a>
              </nav>
              <button className="theme-btn" type="button" data-theme-toggle={true} aria-label="Switch to dark mode" aria-pressed="false">
                <svg className="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
                <svg className="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.2" />
                  <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
                </svg>
              </button>
            </div>
            <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false">
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>
        <div className="mobile-menu" id="mobileMenu" aria-hidden="true" />
      </>
  );
}
