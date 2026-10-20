export default function PhoneShowcase() {
  return (
      <section className="section phone-sec" id="team">
        <div className="wrap phone-grid">
          <div className="phone-wrap reveal">
            <div className="phone-frame">
              <div className="phone-screen">
                <video data-phone-video={true} muted loop playsInline preload="none" poster="/assets/959581db0e4b.jpg" aria-label="A wedding stage decorated by Hasnain Decoration">
                  <source src="/assets/1d6c23c6cea0.mp4" type="video/mp4" />
                </video>
                <span className="phone-notch" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="phone-copy">
            <span className="label gold reveal">Premium Decoration Team</span>
            <h2 className="phone-title reveal">
              We Are The Best
              <em>Decoration and Event Planners in Rawalpindi and Islamabad</em>
            </h2>
            <p className="reveal">
              Hasnain Decoration is a trusted decoration team with
              <strong>15 years of experience</strong>
              . From small home functions to big wedding halls, we plan every small detail with care.
            </p>
            <p className="reveal">
              We have decorated
              <strong>hundreds of happy events</strong>
              .
              <strong>Jamil plans every event himself</strong>
              and stays until the work is fully done. You get beautiful work,
              <strong>on time</strong>
              , at a
              <strong>fair price</strong>
              .
            </p>
            <a className="btn btn-gold reveal" href="https://wa.me/923000000000?text=Assalam-o-Alaikum!%20I%20want%20to%20book%20my%20event." target="_blank" rel="noopener">Book Your Event</a>
          </div>
        </div>
      </section>
  );
}
