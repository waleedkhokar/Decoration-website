export default function Reviews() {
  return (
      <section className="section reviews-sec" id="reviews">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="label gold reveal">Happy Families</span>
              <h2 className="display reveal">
                Families Who
                <em>Celebrated With Us</em>
              </h2>
            </div>
            <div className="rev-nav reveal">
              <div className="rev-dots" id="revDots" aria-hidden="true" />
              <button className="rev-arrow" id="revPrev" type="button" aria-label="Previous reviews">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <button className="rev-arrow" id="revNext" type="button" aria-label="Next reviews">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="rev-view reveal" id="revView">
            <div className="rev-track" id="revTrack">
              <div className="rev-slide">
                <article className="rev">
                  <span className="g-logo" aria-hidden="true">
                    <svg viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
                    </svg>
                  </span>
                  <div className="top">
                    <span className="ava" style={{ "background": "#1a73e8", "color": "#fff" }}>A</span>
                    <div>
                      <div className="nm">Ahmed Raza</div>
                      <div className="meta">Wedding · Rawalpindi · 2 weeks ago</div>
                    </div>
                  </div>
                  <div className="stars" data-rating="5" role="img" aria-label="Rated 5 out of 5" />
                  <p>Jamil made a very nice stage for my sister's wedding. Price was fair and work was on time.</p>
                </article>
              </div>
              <div className="rev-slide">
                <article className="rev">
                  <span className="g-logo" aria-hidden="true">
                    <svg viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
                    </svg>
                  </span>
                  <div className="top">
                    <span className="ava" style={{ "background": "#c2185b", "color": "#fff" }}>F</span>
                    <div>
                      <div className="nm">Fatima Khan</div>
                      <div className="meta">Mehndi · Islamabad · a week ago</div>
                    </div>
                  </div>
                  <div className="stars" data-rating="5" role="img" aria-label="Rated 5 out of 5" />
                  <p>Our mehndi looked so colourful. Flowers, lights, sitting — everything was perfect. Thank you Jamil.</p>
                </article>
              </div>
              <div className="rev-slide">
                <article className="rev">
                  <span className="g-logo" aria-hidden="true">
                    <svg viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
                    </svg>
                  </span>
                  <div className="top">
                    <span className="ava" style={{ "background": "#00897b", "color": "#fff" }}>U</span>
                    <div>
                      <div className="nm">Usman Malik</div>
                      <div className="meta">Walima · Rawalpindi · a month ago</div>
                    </div>
                  </div>
                  <div className="stars" data-rating="5" role="img" aria-label="Rated 5 out of 5" />
                  <p>Very clean and soft walima stage. Guests asked me again and again who did the decoration.</p>
                </article>
              </div>
              <div className="rev-slide">
                <article className="rev">
                  <span className="g-logo" aria-hidden="true">
                    <svg viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
                    </svg>
                  </span>
                  <div className="top">
                    <span className="ava" style={{ "background": "#673ab7", "color": "#fff" }}>A</span>
                    <div>
                      <div className="nm">Ayesha Noor</div>
                      <div className="meta">Birthday · Islamabad · 5 days ago</div>
                    </div>
                  </div>
                  <div className="stars" data-rating="5" role="img" aria-label="Rated 5 out of 5" />
                  <p>Booked for my son's birthday. Balloons and cake table were so pretty. Kids loved it.</p>
                </article>
              </div>
              <div className="rev-slide">
                <article className="rev">
                  <span className="g-logo" aria-hidden="true">
                    <svg viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
                    </svg>
                  </span>
                  <div className="top">
                    <span className="ava" style={{ "background": "#5d4037", "color": "#fff" }}>B</span>
                    <div>
                      <div className="nm">Bilal Hussain</div>
                      <div className="meta">Marriage · Rawalpindi · 3 weeks ago</div>
                    </div>
                  </div>
                  <div className="stars" data-rating="4.5" role="img" aria-label="Rated 4.5 out of 5" />
                  <p>Full home decoration for my marriage. Lights were beautiful. Team came on time and finished fast.</p>
                </article>
              </div>
              <div className="rev-slide">
                <article className="rev">
                  <span className="g-logo" aria-hidden="true">
                    <svg viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
                    </svg>
                  </span>
                  <div className="top">
                    <span className="ava" style={{ "background": "#e8710a", "color": "#fff" }}>S</span>
                    <div>
                      <div className="nm">Sana Tariq</div>
                      <div className="meta">Dholki · Rawalpindi · 2 months ago</div>
                    </div>
                  </div>
                  <div className="stars" data-rating="5" role="img" aria-label="Rated 5 out of 5" />
                  <p>Small dholki at home, but they made it look like a big function. So much colour and joy.</p>
                </article>
              </div>
            </div>
          </div>
          <p className="lead reveal" style={{ "marginTop": "1.6rem", "fontSize": ".94rem" }}>Use the arrows to read more. On phone, you can also swipe.</p>
        </div>
      </section>
  );
}
