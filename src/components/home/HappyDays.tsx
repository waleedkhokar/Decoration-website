"use client";

import { useRef, useState } from "react";

/**
 * Happy Days section — SELF-CONTAINED.
 * The stacking cards slider (its styles + its logic) lives entirely
 * inside this one file. Effects.tsx and home.css do NOT need any
 * change for it — replace only this file and it works.
 *
 * NOTE: the CSS below uses NO quote marks in its selectors on purpose —
 * quotes inside a <style> tag get escaped by the server and cause a
 * React hydration error. Keep them out.
 *
 * To change a card photo: change that card's <img src="..." /> below.
 */

const HDS_CSS = `
.hds-wrap{display:flex;flex-direction:column;overflow-x:clip}
.hds-stack{position:relative;height:336px}
.hds-card{
  position:absolute;top:0;left:0;width:76%;height:100%;
  border-radius:1.4rem;overflow:hidden;text-align:left;
  display:flex;flex-direction:column;
  box-shadow:0 34px 64px -34px rgba(16,16,16,.5);
  transition:transform .65s cubic-bezier(.22,.9,.28,1),opacity .65s cubic-bezier(.22,.9,.28,1),box-shadow .65s cubic-bezier(.22,.9,.28,1);
}
.hds-card.hds-noanim{transition:none}
.hds-card-1{background:linear-gradient(155deg,#372c1b,#1e1712);color:#faf7f1}
.hds-card-2{background:linear-gradient(155deg,#1f4d33,#11301f);color:#faf7f1}
.hds-card-3{background:linear-gradient(155deg,#5c2126,#371319);color:#faf7f1}
.hds-card-4{background:linear-gradient(155deg,#20354f,#101c2c);color:#faf7f1}
.hds-card img{width:100%;height:152px;object-fit:cover;flex:none}
.hds-body{padding:1.1rem 1.3rem 1.25rem;display:flex;flex-direction:column;gap:.5rem}
.hds-card h3{font-family:var(--serif);font-weight:600;font-size:1.3rem;line-height:1.25}
.hds-card p{color:rgba(250,247,241,.78);font-size:.92rem;line-height:1.55}
.hds-card[data-pos=front]{transform:translateX(0) scale(1);opacity:1;z-index:3}
.hds-card[data-pos=back]{transform:translateX(31.5%) scale(.94) rotate(1.2deg);opacity:.55;z-index:2;pointer-events:none}
.hds-card[data-pos=hidden]{transform:translateX(46%) scale(.9);opacity:0;z-index:1;pointer-events:none}
.hds-card[data-pos=exit]{transform:translateX(-30%) scale(.95);opacity:0;z-index:4;pointer-events:none}
@media (hover:hover){
  .hds-stack:hover .hds-card[data-pos=back]{transform:translateX(37%) scale(.95) rotate(1.2deg);opacity:.8}
  .hds-stack:hover .hds-card[data-pos=front]{transform:translateY(-4px);box-shadow:0 46px 76px -34px rgba(16,16,16,.62)}
}
.hds-card[data-pos=front] .hds-body h3{animation:hdsUp .7s cubic-bezier(.22,.9,.28,1) both}
.hds-card[data-pos=front] .hds-body p{animation:hdsUp .7s cubic-bezier(.22,.9,.28,1) .08s both}
@keyframes hdsUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.hds-nav{display:flex;align-items:center;gap:.7rem;margin-top:1.05rem}
.hds-arrow{
  width:46px;height:46px;border-radius:50%;flex:none;cursor:pointer;
  display:inline-flex;align-items:center;justify-content:center;
  background:#26201a;color:#faf7f1;border:1px solid rgba(38,32,25,.25);
  transition:transform .3s,background .3s,color .3s;
}
.hds-arrow svg{width:20px;height:20px}
.hds-arrow:hover{background:#c8a24b;color:#241c11;transform:translateY(-2px)}
@media (max-width:900px){.hds-stack{height:340px}}
@media (max-width:560px){
  .hds-stack{height:352px}
  .hds-card img{height:118px}
  .hds-body{padding:.95rem 1.1rem 1.1rem}
  .hds-card h3{font-size:1.12rem}
  .hds-card p{font-size:.88rem;line-height:1.5}
}
@media (prefers-reduced-motion: reduce){
  .hds-card{transition:none}
  .hds-card[data-pos=front] .hds-body h3,.hds-card[data-pos=front] .hds-body p{animation:none}
}
`;

const CARD_COUNT = 4;

export default function HappyDays() {
  const [front, setFront] = useState(0);
  const [exitIdx, setExitIdx] = useState(-1);
  const [noAnimIdx, setNoAnimIdx] = useState(-1);
  const busyRef = useRef(false);
  const touchXRef = useRef<number | null>(null);

  function posFor(i: number) {
    if (i === exitIdx) return "exit";
    const rel = (i - front + CARD_COUNT) % CARD_COUNT;
    return rel === 0 ? "front" : rel === 1 ? "back" : "hidden";
  }

  function go(dir: number) {
    if (busyRef.current) return;
    const old = front;
    const next = (front + dir + CARD_COUNT) % CARD_COUNT;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setFront(next);
    if (dir > 0 && !reduced) {
      busyRef.current = true;
      setExitIdx(old);
      window.setTimeout(() => {
        setExitIdx(-1);
        setNoAnimIdx(old);
        window.setTimeout(() => {
          setNoAnimIdx(-1);
          busyRef.current = false;
        }, 50);
      }, 380);
    }
  }

  return (
      <section className="section" id="about">
        <div className="wrap">
          <div className="why-card" data-anim="left">
            <span className="label on-dark">About Us</span>
            <h2 className="why-big hd2-big">
              <span className="wb-w">We Decorate Your</span>
              <span className="wb-g">Happy Days</span>
            </h2>
            <p className="why-lead">We are a small family team, not a big company. When you book us, Jamil himself comes to your event and checks every small thing.</p>
            <p className="why-lead hd2-lead2">One team for your full event — stage, lights, flowers and more, done by hand, with care. That is why families trust us again and again.</p>
          </div>
          <div className="why-overlap">
            <figure className="why-photo-card" data-anim="left">
              <img src="/assets/weddings/2.jpg" alt="Wedding decoration by Hasnain Decoration" loading="lazy" />
              <figcaption>Wedding decoration by Hasnain Decoration</figcaption>
            </figure>
            {/* Stacking cards slider — all styles + logic are in this file (see top).
                One card in front, the next card peeking from the right.
                Arrows or a phone swipe bring the next card in from the right,
                covering the old one. To change a card photo, change its img src. */}
            <div className="hds-wrap" data-anim="right">
              <div
                className="hds-stack"
                role="group"
                aria-label="Why families choose us"
                onTouchStart={(e) => { touchXRef.current = e.changedTouches[0].clientX; }}
                onTouchEnd={(e) => {
                  if (touchXRef.current === null) return;
                  const dx = e.changedTouches[0].clientX - touchXRef.current;
                  if (Math.abs(dx) > 42) go(dx < 0 ? 1 : -1);
                  touchXRef.current = null;
                }}
              >
                <article className={"hds-card hds-card-1" + (noAnimIdx === 0 ? " hds-noanim" : "")} data-pos={posFor(0)}>
                  <img src="/assets/stage/24.jpeg" alt="Wedding stage decoration" loading="lazy" />
                  <div className="hds-body">
                    <h3>Small Moments, Lifetime Memories</h3>
                    <p>We convert your small moments into unforgettable memories for a lifetime.</p>
                  </div>
                </article>
                <article className={"hds-card hds-card-2" + (noAnimIdx === 1 ? " hds-noanim" : "")} data-pos={posFor(1)}>
                  <img src="/assets/lighting/15.jpg" alt="Event lights decoration" loading="lazy" />
                  <div className="hds-body">
                    <h3>Reasonable Prices, 100% Satisfaction Guarantee</h3>
                    <p>Fair price for every budget — and we keep working until you are fully happy.</p>
                  </div>
                </article>
                <article className={"hds-card hds-card-3" + (noAnimIdx === 2 ? " hds-noanim" : "")} data-pos={posFor(2)}>
                  <img src="/assets/weddings/1.jpg" alt="Wedding decoration" loading="lazy" />
                  <div className="hds-body">
                    <h3>Best Quality Services</h3>
                    <p>Fresh flowers, strong setup and a clean finish, every time.</p>
                  </div>
                </article>
                <article className={"hds-card hds-card-4" + (noAnimIdx === 3 ? " hds-noanim" : "")} data-pos={posFor(3)}>
                  <img src="/assets/stage/25.jpeg" alt="Wedding stage decoration" loading="lazy" />
                  <div className="hds-body">
                    <h3>Highly Professional Team</h3>
                    <p>Trained, on-time team — and Jamil checks every small thing.</p>
                  </div>
                </article>
              </div>
              <div className="hds-nav">
                <button className="hds-arrow" type="button" aria-label="Previous card" onClick={() => go(-1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button className="hds-arrow" type="button" aria-label="Next card" onClick={() => go(1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <style>{HDS_CSS}</style>
            </div>
          </div>
        </div>
      </section>
  );
}
