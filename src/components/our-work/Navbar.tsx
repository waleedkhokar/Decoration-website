export default function Navbar() {
  return (
      <>
        <header className="nav" id="nav">
          <div className="wrap nav-in">
            <a className="brand" href="#top" aria-label="Hasnain Decoration — our work">
              <span className="b1">
                Hasnain
                <i>Decoration</i>
              </span>
              <span className="b2">Events · Weddings · Lighting</span>
            </a>
            <nav className="nav-links" aria-label="Main">
              <a className="nl" href="#">Home</a>
              <a className="nl" href="#">About</a>
              <a className="nl" href="#">Services</a>
              <a className="nl active" href="#top" aria-current="page">Our Work</a>
              <a className="nl" href="#reviews">Reviews</a>
              <a className="nl" href="#contact">Contact</a>
              <a className="btn btn-gold" href="https://wa.me/923000000000?text=Assalam-o-Alaikum!%20I%20want%20to%20book%20decoration%20for%20my%20event." target="_blank" rel="noopener">Book Now</a>
            </nav>
            <div className="nav-tools">
              <button className="theme-btn" type="button" data-theme-toggle={true} aria-label="Switch to dark mode" aria-pressed="false">
                <svg className="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.4 14.5A8.6 8.6 0 1 1 9.5 3.6a7.2 7.2 0 1 0 10.9 10.9z" />
                </svg>
                <svg className="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.2" />
                  <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
                </svg>
              </button>
              <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false">
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </header>
        <div className="mobile-menu" id="mobileMenu" aria-hidden="true" />
      </>
  );
}
