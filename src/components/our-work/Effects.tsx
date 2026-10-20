// @ts-nocheck
"use client";
/**
 * PORTED PAGE LOGIC — converted 1:1 from the frozen design's inline script.
 * Only wiring changed: GSAP / ScrollTrigger / Three.js now come from the npm
 * packages (the original loaded GSAP + Three.js r128 from CDN), and the code
 * runs in useEffect after React has mounted the same DOM.
 */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

export default function OurWorkEffects() {
  useEffect(() => {
    (window as any).gsap = gsap;
    (window as any).THREE = THREE;
    try { gsap.registerPlugin(ScrollTrigger); } catch (e) {}
    const w = window as any;
    if (w.hdOurWork) return;
    w.hdOurWork = true;
    // React does not always apply the muted attribute; ensure hero/inline
    // autoplay videos can actually autoplay like in the static original.
    document.querySelectorAll("video[autoplay]").forEach((v) => {
      const vid = v as HTMLVideoElement;
      vid.muted = true;
      const p = vid.play();
      if (p && p.catch) p.catch(() => {});
    });
    /* ================= original logic begins ================= */
(function () {
        "use strict";
        var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        /* ================================================================
           EVENTS — our gallery.
           To add more photos later, just add one more line to this list:
             { src:"assets/your-photo.jpg", tag:"Wedding Stage",
               caption:"What we did — City", wide:true },
           ================================================================ */
        var EVENTS = [
          { src: "/assets/db209ae613b0.jpg", tag: "Wedding Stage", caption: "Wedding stage with red and gold flowers and warm lights — Rawalpindi", wide: true },
          { src: "/assets/db209ae613b0.jpg", video: "/assets/1d6c23c6cea0.mp4", tag: "Stage Video", caption: "Watch a real wedding stage light up — Rawalpindi" },
          { src: "/assets/c26ad174bffa.jpg", tag: "Mehndi", caption: "Mehndi setup with flowers, colours and sitting — Islamabad" },
          { src: "/assets/47d61be90ba0.jpg", tag: "Walima", caption: "Walima stage with soft white flowers — Rawalpindi" },
          { src: "/assets/e8848e5fd429.jpg", tag: "Dholki", caption: "Dholki at home with flowers and drapes — Rawalpindi" },
          { src: "/assets/d2b227e04b55.jpg", tag: "Birthday", caption: "Birthday balloons and cake table — Islamabad" },
          { src: "/assets/0a01cf0b3e52.jpg", tag: "Milad", caption: "Milad decoration with soft lights — Rawalpindi" },
          { src: "/assets/108ab74a2603.jpg", tag: "Home Lights", caption: "Full home lights for a marriage night — Rawalpindi", wide: true },
          { src: "/assets/959581db0e4b.jpg", tag: "Any Event", caption: "Grand hall setup for a big happy event — Islamabad" }
        ];

        /* ---------- render gallery in small batches (lazy + fast) ----------
           Only the first 4 cards are made at first. "View More Events"
           adds the rest, then the button hides. */
        var grid = document.getElementById("eventsGrid");
        var moreBtn = document.getElementById("moreEvents");
        var BATCH = 4, shownCount = 0;

        function renderCard(ev, i) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "event-card reveal" + (ev.wide ? " wide" : "");
          btn.setAttribute("aria-label", "See big: " + ev.caption);
          btn.innerHTML =
            '<img src="' + ev.src + '" alt="' + ev.caption + '" loading="lazy" />' +
            '<span class="shade"></span>' +
            (ev.video ? '<span class="play-badge"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.8v14.4c0 .9 1 1.5 1.8 1L20 13a1.2 1.2 0 0 0 0-2L8.8 3.9C8 3.4 7 4 7 4.8z"/></svg></span>' : '') +
            '<span class="cap"><span class="tag">' + ev.tag + '</span><p>' + ev.caption + '</p></span>';
          btn.addEventListener("click", function () { openLB(i); });
          grid.appendChild(btn);
        }
        function renderBatch() {
          var end = Math.min(shownCount + BATCH, EVENTS.length);
          for (var i = shownCount; i < end; i++) renderCard(EVENTS[i], i);
          shownCount = end;
          if (moreBtn && shownCount >= EVENTS.length) moreBtn.style.display = "none";
          goGal(galIndex);
        }

        /* ---------- gallery arrows: slide the row by one card ---------- */
        var galPrev = document.getElementById("galPrev");
        var galNext = document.getElementById("galNext");
        var galIndex = 0;
        function galGap() { return parseFloat(getComputedStyle(grid).columnGap) || 19.2; }
        function galStep() {
          var c = grid.querySelector(".event-card");
          return c ? c.getBoundingClientRect().width + galGap() : 320;
        }
        function galMaxShift() {
          var view = grid.parentElement;
          return Math.max(0, grid.scrollWidth - view.clientWidth);
        }
        function goGal(i) {
          if (!grid) return;
          var maxShift = galMaxShift();
          var maxIndex = Math.ceil(maxShift / galStep());
          galIndex = Math.max(0, Math.min(maxIndex, i));
          var shift = Math.min(galIndex * galStep(), maxShift);
          grid.style.transform = "translateX(-" + shift + "px)";
          if (galPrev) galPrev.classList.toggle("off", galIndex <= 0);
          if (galNext) galNext.classList.toggle("off", galIndex >= maxIndex);
        }
        if (galPrev) galPrev.addEventListener("click", function () { goGal(galIndex - 1); });
        if (galNext) galNext.addEventListener("click", function () { goGal(galIndex + 1); });
        var galRsTimer = null;
        window.addEventListener("resize", function () {
          clearTimeout(galRsTimer);
          galRsTimer = setTimeout(function () { goGal(galIndex); }, 120);
        });

        if (grid) renderBatch();
        if (moreBtn) moreBtn.addEventListener("click", renderBatch);

        /* ---------- lightbox ---------- */
        var lb = document.getElementById("lightbox");
        var lbMedia = document.getElementById("lbMedia");
        var lbTag = document.getElementById("lbTag");
        var lbCaption = document.getElementById("lbCaption");
        var lbCount = document.getElementById("lbCount");
        var lbIndex = 0, lbOpen = false, lastFocus = null;

        function showLB(i) {
          lbIndex = (i + EVENTS.length) % EVENTS.length;
          var ev = EVENTS[lbIndex];
          if (ev.video) {
            lbMedia.innerHTML = '<video src="' + ev.video + '" poster="' + ev.src + '" controls autoplay muted loop playsinline></video>';
            var lv = lbMedia.querySelector("video");
            var lp = lv && lv.play(); if (lp) lp.catch(function () {});
          } else {
            lbMedia.innerHTML = '<img src="' + ev.src + '" alt="' + ev.caption + '" />';
          }
          lbTag.textContent = ev.tag;
          lbCaption.textContent = ev.caption;
          lbCount.textContent = (lbIndex + 1) + " / " + EVENTS.length;
        }
        function openLB(i) {
          lastFocus = document.activeElement;
          showLB(i);
          lb.classList.add("open");
          lb.setAttribute("aria-hidden", "false");
          lbOpen = true;
          document.body.style.overflow = "hidden";
          document.getElementById("lbClose").focus();
        }
        function closeLB() {
          lb.classList.remove("open");
          lb.setAttribute("aria-hidden", "true");
          lbOpen = false;
          lbMedia.innerHTML = "";
          document.body.style.overflow = "";
          if (lastFocus && lastFocus.focus) lastFocus.focus();
        }
        document.getElementById("lbClose").addEventListener("click", closeLB);
        document.getElementById("lbPrev").addEventListener("click", function () { showLB(lbIndex - 1); });
        document.getElementById("lbNext").addEventListener("click", function () { showLB(lbIndex + 1); });
        lb.addEventListener("click", function (e) { if (e.target === lb) closeLB(); });
        document.addEventListener("keydown", function (e) {
          if (!lbOpen) return;
          if (e.key === "Escape") closeLB();
          else if (e.key === "ArrowLeft") showLB(lbIndex - 1);
          else if (e.key === "ArrowRight") showLB(lbIndex + 1);
        });
        var lbTouchX = null;
        lb.addEventListener("touchstart", function (e) { lbTouchX = e.changedTouches[0].clientX; }, { passive: true });
        lb.addEventListener("touchend", function (e) {
          if (lbTouchX === null) return;
          var dx = e.changedTouches[0].clientX - lbTouchX;
          if (Math.abs(dx) > 42) showLB(lbIndex + (dx < 0 ? 1 : -1));
          lbTouchX = null;
        }, { passive: true });

        /* ---------- before / after sliders (drag with finger or mouse) ---------- */
        document.querySelectorAll("[data-ba]").forEach(function (ba) {
          var slider = ba.querySelector(".ba-handle");
          var dragging = false;
          var touched = false;
          function setP(pct) {
            pct = Math.max(0, Math.min(100, pct));
            ba.style.setProperty("--p", pct + "%");
            if (slider) slider.setAttribute("aria-valuenow", Math.round(pct));
            return pct;
          }
          function fromEvent(e) {
            var r = ba.getBoundingClientRect();
            return ((e.clientX - r.left) / r.width) * 100;
          }
          ba.addEventListener("pointerdown", function (e) {
            touched = true;
            dragging = true;
            try { ba.setPointerCapture(e.pointerId); } catch (err) {}
            setP(fromEvent(e));
          });
          ba.addEventListener("pointermove", function (e) { if (dragging) setP(fromEvent(e)); });
          ba.addEventListener("pointerup", function () { dragging = false; });
          ba.addEventListener("pointercancel", function () { dragging = false; });
          if (slider) {
            slider.addEventListener("keydown", function (e) {
              var cur = parseFloat(getComputedStyle(ba).getPropertyValue("--p")) || 50;
              if (e.key === "ArrowLeft") { touched = true; setP(cur - 4); e.preventDefault(); }
              else if (e.key === "ArrowRight") { touched = true; setP(cur + 4); e.preventDefault(); }
            });
          }
          /* Main slider only: one slow demo move 50 -> 65 -> 50 when it first
             comes on screen, so people see the bar can move. It stops forever
             the moment a visitor touches or drags the slider. */
          if (!reduced && ba.hasAttribute("data-ba-main") && "IntersectionObserver" in window) {
            var played = false;
            new IntersectionObserver(function (entries, io) {
              if (entries[0].isIntersecting && !played) {
                played = true; io.disconnect();
                var start = null;
                function step(ts) {
                  if (touched) return;
                  if (!start) start = ts;
                  var t = Math.min(1, (ts - start) / 2100);
                  var wave = Math.sin(t * Math.PI);
                  if (!dragging) setP(50 + wave * 15);
                  if (t < 1) requestAnimationFrame(step); else if (!dragging) setP(50);
                }
                requestAnimationFrame(step);
              }
            }, { threshold: 0.45 }).observe(ba);
          }
        });

        /* ---------- reviews carousel: 3 visible, arrows + swipe ---------- */
        var track = document.getElementById("revTrack");
        var revPrev = document.getElementById("revPrev");
        var revNext = document.getElementById("revNext");
        var revDots = document.getElementById("revDots");
        var TOTAL = track ? track.children.length : 0;
        var rIndex = 0;

        function visibleCount() {
          if (window.innerWidth >= 1024) return 3;
          if (window.innerWidth >= 700) return 2;
          return 1;
        }
        function maxIndex() { return Math.max(0, TOTAL - visibleCount()); }
        function paintDots() {
          if (!revDots) return;
          var pages = maxIndex() + 1, html = "";
          for (var i = 0; i < pages; i++) html += "<span" + (i === rIndex ? ' class="on"' : "") + "></span>";
          revDots.innerHTML = html;
        }
        function goRev(i) {
          rIndex = Math.max(0, Math.min(maxIndex(), i));
          var v = visibleCount();
          track.style.transform = "translateX(-" + (rIndex * (100 / v)) + "%)";
          revPrev.classList.toggle("off", rIndex <= 0);
          revNext.classList.toggle("off", rIndex >= maxIndex());
          paintDots();
        }
        if (track) {
          revPrev.addEventListener("click", function () { goRev(rIndex - 1); });
          revNext.addEventListener("click", function () { goRev(rIndex + 1); });
          var revTouchX = null;
          var revView = document.getElementById("revView");
          revView.addEventListener("touchstart", function (e) { revTouchX = e.changedTouches[0].clientX; }, { passive: true });
          revView.addEventListener("touchend", function (e) {
            if (revTouchX === null) return;
            var dx = e.changedTouches[0].clientX - revTouchX;
            if (Math.abs(dx) > 42) goRev(rIndex + (dx < 0 ? 1 : -1));
            revTouchX = null;
          }, { passive: true });
          var rsTimer = null;
          window.addEventListener("resize", function () {
            clearTimeout(rsTimer);
            rsTimer = setTimeout(function () { goRev(rIndex); }, 120);
          });
          goRev(0);
        }

        /* ---------- paint star ratings (supports halves, e.g. 4.5) ---------- */
        var STAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z"/></svg>';
        var ROW = '<span class="row">' + STAR + STAR + STAR + STAR + STAR + '</span>';
        document.querySelectorAll(".stars[data-rating]").forEach(function (el) {
          var r = parseFloat(el.getAttribute("data-rating")) || 5;
          var pct = Math.max(0, Math.min(100, (r / 5) * 100));
          el.innerHTML = '<span class="bg">' + ROW + '</span><span class="fg" style="width:' + pct + '%">' + ROW + '</span>';
        });

        /* ---------- nav: dark on scroll ---------- */
        var nav = document.getElementById("nav");
        function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 40); }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        /* ---------- theme toggle: navbar button ---------- */
        var themeBtns = document.querySelectorAll("[data-theme-toggle]");
        function paintTheme() {
          var d = document.documentElement.classList.contains("dark");
          themeBtns.forEach(function (b) {
            b.setAttribute("aria-pressed", d ? "true" : "false");
            b.setAttribute("aria-label", d ? "Switch to light mode" : "Switch to dark mode");
          });
        }
        themeBtns.forEach(function (b) {
          b.addEventListener("click", function () {
            var d = !document.documentElement.classList.contains("dark");
            document.documentElement.classList.toggle("dark", d);
            try { localStorage.setItem("hd-theme", d ? "dark" : "light"); } catch (e) {}
            paintTheme();
          });
        });
        paintTheme();

        /* ---------- mobile menu (links injected on open, removed on close) ---------- */
        var burger = document.getElementById("burger");
        var menu = document.getElementById("mobileMenu");
        var MENU_HTML =
          '<a class="mm" href="#">Home <small>01</small></a>' +
          '<a class="mm" href="#">About <small>02</small></a>' +
          '<a class="mm" href="#">Services <small>03</small></a>' +
          '<a class="mm active" href="#top">Our Work <small>04</small></a>' +
          '<a class="mm" href="#reviews">Reviews <small>05</small></a>' +
          '<a class="mm" href="#contact">Contact <small>06</small></a>' +
          '<div class="mm-cta"><a class="btn btn-gold" href="https://wa.me/923000000000?text=Assalam-o-Alaikum!%20I%20want%20to%20book%20decoration%20for%20my%20event." target="_blank" rel="noopener">Book Now</a></div>';
        var menuTimer = null;
        function openMenu() {
          clearTimeout(menuTimer);
          if (!menu.innerHTML) {
            menu.innerHTML = MENU_HTML;
            menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
          }
          menu.setAttribute("aria-hidden", "false");
          requestAnimationFrame(function () { requestAnimationFrame(function () { menu.classList.add("open"); }); });
          burger.classList.add("open");
          burger.setAttribute("aria-expanded", "true");
          document.body.style.overflow = "hidden";
        }
        function closeMenu() {
          menu.classList.remove("open");
          menu.setAttribute("aria-hidden", "true");
          burger.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
          menuTimer = setTimeout(function () { menu.innerHTML = ""; }, 700);
        }
        burger.addEventListener("click", function () {
          if (menu.classList.contains("open")) closeMenu(); else openMenu();
        });

        /* ---------- hero video: mobile gets the lighter file ---------- */
        var video = document.getElementById("heroVideo");
        if (video) {
          if (window.matchMedia("(max-width: 700px)").matches) {
            video.querySelector("source").src = "/assets/533368952579.mp4";
            video.load();
          }
          video.addEventListener("canplay", function () { video.classList.add("on"); });
          var tryPlay = function () { var p = video.play(); if (p) p.catch(function () {}); };
          if (video.readyState >= 3) { video.classList.add("on"); tryPlay(); }
          else tryPlay();
        }

        /* ---------- phone video: loads + plays only when on screen ---------- */
        var phoneVideo = document.getElementById("phoneVideo");
        if (phoneVideo && "IntersectionObserver" in window) {
          new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (en.isIntersecting) {
                if (phoneVideo.preload !== "auto") { phoneVideo.preload = "auto"; phoneVideo.load(); }
                var pr = phoneVideo.play(); if (pr) pr.catch(function () {});
              } else if (!phoneVideo.paused) phoneVideo.pause();
            });
          }, { rootMargin: "140px" }).observe(phoneVideo);
          phoneVideo.addEventListener("canplay", function () { phoneVideo.classList.add("on"); });
        }

        /* ---------- GSAP: hero entrance + scroll reveals ---------- */
        if (window.gsap && !reduced) {
          gsap.registerPlugin(ScrollTrigger);
          var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.from(".page-hero h1 .line > span", { yPercent: 115, duration: 1.1, stagger: 0.13, delay: 0.15 })
            .from("[data-hero-fade]", { y: 24, opacity: 0, duration: 0.85, stagger: 0.12 }, "-=0.55")
            .from(".nav", { y: -24, opacity: 0, duration: 0.8 }, "-=0.85");

          gsap.utils.toArray(".reveal").forEach(function (el) {
            gsap.from(el, {
              y: 42, opacity: 0, duration: 1, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%" }
            });
          });

          /* final CTA: heading lines rise in, side photos slide + float in */
          gsap.from(".cta h2 .line > span", {
            yPercent: 115, duration: 1.05, stagger: 0.14, ease: "power3.out",
            scrollTrigger: { trigger: ".cta", start: "top 72%" }
          });
          document.querySelectorAll(".cta-photo").forEach(function (ph) {
            var fromLeft = ph.classList.contains("left");
            var rot = fromLeft ? -4 : 4;
            gsap.fromTo(ph,
              { x: fromLeft ? -90 : 90, opacity: 0, rotation: rot },
              {
                x: 0, opacity: 1, rotation: rot, duration: 1.25, ease: "power3.out",
                scrollTrigger: {
                  trigger: ".cta", start: "top 72%",
                  onLeaveBack: function () { if (ph._float) { ph._float.kill(); ph._float = null; } }
                },
                onStart: function () { if (ph._float) { ph._float.kill(); ph._float = null; } },
                onComplete: function () {
                  if (ph._float) ph._float.kill();
                  ph._float = gsap.to(ph, { y: -12, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
                }
              });
          });
          gsap.from(".cta-photos-m img", {
            y: 34, opacity: 0, duration: 0.95, stagger: 0.14, ease: "power3.out",
            scrollTrigger: { trigger: ".cta", start: "top 78%" }
          });
        }
      })();
    /* ================= original logic ends ================= */
    return () => {
      w.hdOurWork = false;
      try { ScrollTrigger.getAll().forEach((t) => t.kill()); } catch (e) {}
    };
  }, []);
  return null;
}
