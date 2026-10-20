export default function Navbar() {
  return (
      <header className="nav">
        <div className="nav-in">
          <a className="logo" href="#" aria-label="Hasnain Decoration — home">
            <span className="name">
              Hasnain
              <em>Decoration</em>
            </span>
            <span className="sub">EVENTS · WEDDINGS · LIGHTING</span>
          </a>
          <nav className="nav-links" aria-label="Main">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#moments">Moments</a>
            <a href="#why-us">Why Us</a>
            <a href="#reviews">Reviews</a>
          </nav>
          <button className="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <button className="theme-btn" id="themeBtn" type="button" aria-label="Switch dark / light mode">
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
        </div>
        <nav className="mobile-menu" id="mobileMenu" aria-label="Menu">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#moments">Moments</a>
          <a href="#why-us">Why Us</a>
          <a href="#reviews">Reviews</a>
        </nav>
      </header>
  );
}
