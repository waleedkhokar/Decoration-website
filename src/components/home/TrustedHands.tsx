export default function TrustedHands() {
  return (
      <section className="section" id="why">
        <div className="wrap">
          <div className="why-card" data-anim="left">
            <span className="label on-dark">Why Hasnain Decoration</span>
            <h2 className="why-big">
              <span className="wb-w">15 Years of</span>
              <span className="wb-g">Trusted Hands</span>
            </h2>
            <p className="why-lead">
              We are a small family team, not a big company. When you book us, Jamil himself comes to your event and checks every small thing. That is why families trust us again and again.
            </p>
            <div className="why-tags">
              <span>On Time</span>
              <span>Fair Price</span>
              <span>Jamil Checks Every Work</span>
              <span>We Listen First</span>
            </div>
          </div>
          <div className="why-overlap">
            <div className="why-photo" data-float={true}>
              <figure className="why-photo-card" data-anim="left">
                <img src="/assets/55969aa0f490.jpg" alt="Our team setting up a wedding stage — fixing flowers and hanging lights by hand" loading="lazy" />
                <figcaption>Jamil at work — setting a stage by hand</figcaption>
              </figure>
            </div>
            <div className="why-stats" data-anim="right">
              <div className="counter">
                <div className="big">
                  <span data-count="15">0</span>
                  <sup>+</sup>
                </div>
                <div className="cap">Years of Experience</div>
                <div className="sub">Decorating happy events for 15 years</div>
              </div>
              <div className="counter">
                <div className="big">
                  <span data-count="100">0</span>
                  <sup>%</sup>
                </div>
                <div className="cap">Happy Families</div>
                <div className="sub">Families who book us, love our work</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
