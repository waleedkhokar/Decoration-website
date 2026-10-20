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

export default function HomeEffects() {
  useEffect(() => {
    (window as any).gsap = gsap;
    (window as any).THREE = THREE;
    try { gsap.registerPlugin(ScrollTrigger); } catch (e) {}
    const w = window as any;
    if (w.hdHome) return;
    w.hdHome = true;
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
           MOMENTS — our recent work.
           To add more photos later, just add one more line to this list:
             { type:"image", src:"assets/your-photo.jpg", tag:"Wedding Stage",
               caption:"What we did — City", wide:true },
           Videos work the same way with type:"video".
           ================================================================ */
        var MOMENTS = [
          { type: "video", src: "/assets/1d6c23c6cea0.mp4", poster: "/assets/959581db0e4b.jpg", cat: "weddings", tag: "Wedding Stage", caption: "Wedding stage with gold lights and flowers — Rawalpindi" },
          { type: "image", src: "/assets/db209ae613b0.jpg", cat: "weddings", tag: "Wedding Stage", caption: "Wedding stage with red and gold flowers — Rawalpindi" },
          { type: "image", src: "/assets/c26ad174bffa.jpg", cat: "mehndi", tag: "Mehndi", caption: "Mehndi flowers and sitting setup — Islamabad" },
          { type: "image", src: "/assets/d2b227e04b55.jpg", cat: "birthdays", tag: "Birthday", caption: "Birthday balloons and cake table — Islamabad" },
          { type: "image", src: "/assets/f01306873f10.jpg", cat: "corporate", tag: "Corporate", caption: "Company annual day stage with flowers — Islamabad" },
          { type: "image", src: "/assets/0a01cf0b3e52.jpg", cat: "milad", tag: "Milad", caption: "Milad decoration with lights — Rawalpindi" },
          { type: "image", src: "/assets/5dc95ca32649.jpg", cat: "weddings", tag: "Wedding Reception", caption: "Wedding reception hall with flowers and lights — Islamabad" },
          { type: "image", src: "/assets/70500b99e3d5.jpg", cat: "mehndi", tag: "Mehndi", caption: "Mehndi swing with fresh flowers and colour — Rawalpindi" },
          { type: "video", src: "/assets/1c263c7aaa4f.mp4", poster: "/assets/959581db0e4b.jpg", cat: "mehndi", tag: "Mehndi Night", caption: "Mehndi night stage with full lights — Islamabad" },
          { type: "image", src: "/assets/6518e4b07fa6.jpg", cat: "corporate", tag: "Corporate", caption: "Corporate gala stage and dinner setup — Islamabad" },
          { type: "image", src: "/assets/e28b6c9b699a.jpg", cat: "birthdays", tag: "Birthday", caption: "Birthday balloon arch and cake table — Rawalpindi" },
          { type: "image", src: "/assets/50ed8721d763.jpg", cat: "milad", tag: "Milad", caption: "Milad stage backdrop in green and gold — Islamabad" }
        ];

        /* ---------- render the moments row: all 6 shown from the start ----------
           Videos keep preload="none" with a poster and only load + play when
           scrolled into view, so the page stays fast. */
        var grid = document.getElementById("momentsGrid");
        var bookCard = grid ? grid.querySelector(".book-card") : null;
        var PLAY_SVG = '<span class="play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.8v14.4L19 12z"/></svg></span>';

        var vidIO = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            var v = en.target;
            if (en.isIntersecting) {
              if (v.preload !== "auto") { v.preload = "auto"; v.load(); }
              var pr = v.play(); if (pr) pr.catch(function () {});
            } else if (!v.paused) v.pause();
          });
        }, { rootMargin: "120px" }) : null;

        function renderMoment(m, i) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "moment";
          btn.setAttribute("data-cat", m.cat || "all");
          btn.setAttribute("aria-label", "See big: " + m.caption);
          var media = m.type === "video"
            ? '<video muted loop playsinline preload="none" poster="' + m.poster + '" aria-hidden="true"><source src="' + m.src + '" type="video/mp4" /></video>' + PLAY_SVG
            : '<img src="' + m.src + '" alt="' + m.caption + '" loading="lazy" />';
          btn.innerHTML = media +
            '<span class="shade"></span>' +
            '<span class="cap"><span class="tag">' + m.tag + '</span><p>' + m.caption + '</p></span>';
          btn.addEventListener("click", function () { openLB(i); });
          if (bookCard) grid.insertBefore(btn, bookCard); else grid.appendChild(btn);
          var v = btn.querySelector("video");
          if (v && vidIO) vidIO.observe(v);
        }
        /* all 12 moments render once; the arrows page through them 6 at a time */
        if (grid) MOMENTS.forEach(renderMoment);

        /* ---------- filter tabs + paging arrows: 6 shown at a time, in two rows.
           Tabs filter the full 12 and reset to the first set; the heading
           arrows move to the next / previous set of 6 (wrapping around). */
        var currentFilter = "all";
        var momPage = 0;
        var PER_PAGE = 6;
        var momPosEl = document.getElementById("momPos");
        var momPrevBtn = document.getElementById("momPrev");
        var momNextBtn = document.getElementById("momNext");
        function momFiltered() {
          var out = [];
          if (!grid) return out;
          grid.querySelectorAll(".moment").forEach(function (el) {
            if (currentFilter === "all" || el.getAttribute("data-cat") === currentFilter) out.push(el);
          });
          return out;
        }
        function momPages() { return Math.max(1, Math.ceil(momFiltered().length / PER_PAGE)); }
        function applyMoments() {
          var list = momFiltered();
          var pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
          if (momPage > pages - 1) momPage = pages - 1;
          if (momPage < 0) momPage = 0;
          var start = momPage * PER_PAGE, end = start + PER_PAGE;
          grid.querySelectorAll(".moment").forEach(function (el) { el.style.display = "none"; });
          list.forEach(function (el, i) { el.style.display = (i >= start && i < end) ? "" : "none"; });
          if (momPosEl) momPosEl.textContent = (momPage + 1) + " / " + pages;
          if (momPrevBtn) momPrevBtn.disabled = pages <= 1;
          if (momNextBtn) momNextBtn.disabled = pages <= 1;
          grid.classList.remove("mom-fading");
        }
        function momGo(page) {
          var pages = momPages();
          var next = ((page % pages) + pages) % pages;
          if (next === momPage) { applyMoments(); return; }
          momPage = next;
          if (reduced) applyMoments();
          else { grid.classList.add("mom-fading"); setTimeout(applyMoments, 170); }
        }
        var momTabs = document.querySelectorAll(".mom-tab");
        momTabs.forEach(function (tab) {
          tab.addEventListener("click", function () {
            var f = tab.getAttribute("data-filter");
            if (f === currentFilter) return;
            currentFilter = f;
            momPage = 0;
            momTabs.forEach(function (t) {
              var on = t === tab;
              t.classList.toggle("active", on);
              t.setAttribute("aria-selected", on ? "true" : "false");
            });
            if (reduced) applyMoments();
            else { grid.classList.add("mom-fading"); setTimeout(applyMoments, 170); }
          });
        });
        if (momPrevBtn && momNextBtn) {
          momPrevBtn.addEventListener("click", function () { momGo(momPage - 1); });
          momNextBtn.addEventListener("click", function () { momGo(momPage + 1); });
        }
        if (grid) applyMoments();

        /* ---------- lightbox ---------- */
        var lb = document.getElementById("lightbox");
        var lbMedia = document.getElementById("lbMedia");
        var lbTag = document.getElementById("lbTag");
        var lbCaption = document.getElementById("lbCaption");
        var lbCount = document.getElementById("lbCount");
        var lbIndex = 0, lbOpen = false, lastFocus = null;

        var lbList = MOMENTS.map(function (_, i) { return i; });
        var lbPos = 0;
        function visibleIndices() {
          var out = [];
          MOMENTS.forEach(function (m, i) { if (currentFilter === "all" || m.cat === currentFilter) out.push(i); });
          return out.length ? out : MOMENTS.map(function (_, i) { return i; });
        }
        function showLB() {
          lbIndex = lbList[lbPos];
          var m = MOMENTS[lbIndex];
          lbMedia.innerHTML = m.type === "video"
            ? '<video src="' + m.src + '" poster="' + (m.poster || "") + '" autoplay muted loop playsinline controls></video>'
            : '<img src="' + m.src + '" alt="' + m.caption + '" />';
          lbTag.textContent = m.tag;
          lbCaption.textContent = m.caption;
          lbCount.textContent = (lbPos + 1) + " / " + lbList.length;
        }
        function stepLB(d) {
          lbPos = (lbPos + d + lbList.length) % lbList.length;
          showLB();
        }
        function openLB(i) {
          lastFocus = document.activeElement;
          lbList = visibleIndices();
          lbPos = Math.max(0, lbList.indexOf(i));
          showLB();
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
        document.getElementById("lbPrev").addEventListener("click", function () { stepLB(-1); });
        document.getElementById("lbNext").addEventListener("click", function () { stepLB(1); });
        lb.addEventListener("click", function (e) { if (e.target === lb) closeLB(); });
        document.addEventListener("keydown", function (e) {
          if (!lbOpen) return;
          if (e.key === "Escape") closeLB();
          else if (e.key === "ArrowLeft") stepLB(-1);
          else if (e.key === "ArrowRight") stepLB(1);
        });
        var touchX = null;
        lb.addEventListener("touchstart", function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
        lb.addEventListener("touchend", function (e) {
          if (touchX === null) return;
          var dx = e.changedTouches[0].clientX - touchX;
          if (Math.abs(dx) > 42) stepLB(dx < 0 ? 1 : -1);
          touchX = null;
        }, { passive: true });

        /* ---------- paint star ratings (supports halves, e.g. 4.5) ---------- */
        var STAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z"/></svg>';
        var ROW = '<span class="row">' + STAR + STAR + STAR + STAR + STAR + '</span>';
        document.querySelectorAll(".stars[data-rating]").forEach(function (el) {
          var r = parseFloat(el.getAttribute("data-rating")) || 5;
          var pct = Math.max(0, Math.min(100, (r / 5) * 100));
          el.innerHTML = '<span class="bg">' + ROW + '</span><span class="fg" style="width:' + pct + '%">' + ROW + '</span>';
        });

        /* ---------- reviews: make them look like real Google reviews ---------- */
        var G_LOGO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"/></svg>';
        var REV_TIMES = ["2 weeks ago", "a month ago", "3 weeks ago", "2 months ago", "a week ago", "3 weeks ago", "2 weeks ago", "a month ago", "5 days ago", "2 months ago", "3 weeks ago", "a month ago"];
        var AVA_COLORS = ["#4285F4", "#EA4335", "#34A853", "#F9AB00", "#8E24AA", "#00897B", "#5E35B1", "#E8710A", "#3949AB", "#7CB342", "#D81B60", "#00ACC1"];
        document.querySelectorAll(".rev").forEach(function (card, i) {
          var badge = document.createElement("span");
          badge.className = "g-badge";
          badge.setAttribute("aria-hidden", "true");
          badge.innerHTML = G_LOGO;
          card.appendChild(badge);
          var meta = card.querySelector(".meta");
          if (meta && REV_TIMES[i]) meta.textContent += " · " + REV_TIMES[i];
          var ava = card.querySelector(".ava");
          if (ava && AVA_COLORS[i]) { ava.style.background = AVA_COLORS[i]; ava.style.color = "#fff"; }
        });

        /* ---------- duplicate marquee set for a seamless loop ---------- */
        var track = document.getElementById("marqueeTrack");
        if (track) track.appendChild(track.children[0].cloneNode(true));

        /* ---------- nav: dark on scroll ---------- */
        var nav = document.getElementById("nav");
        function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 40); }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        /* ---------- mobile menu (links injected on open, removed on close) ---------- */
        var burger = document.getElementById("burger");
        var menu = document.getElementById("mobileMenu");
        var MENU_HTML =
          '<a class="mm" href="#about">About <small>01</small></a>' +
          '<a class="mm" href="#services">Services <small>02</small></a>' +
          '<a class="mm" href="#work">Moments <small>03</small></a>' +
          '<a class="mm" href="#why">Why Us <small>04</small></a>' +
          '<a class="mm" href="#reviews">Reviews <small>05</small></a>' +
          '<a class="mm" href="#visit">Find Us <small>06</small></a>';
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

        /* ---------- GSAP: hero entrance + scroll reveals + counters ---------- */
        if (window.gsap && !reduced) {
          gsap.registerPlugin(ScrollTrigger);

          /* service cards get their own staggered entrance, not the generic reveal */
          document.querySelectorAll(".svc").forEach(function (el) { el.classList.remove("reveal"); });

          var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.from(".hero h1 .line > span", { yPercent: 115, duration: 1.15, stagger: 0.14, delay: 0.15 })
            .from("[data-hero-fade]", { y: 26, opacity: 0, duration: 0.9, stagger: 0.12 }, "-=0.55")
            .from(".nav", { y: -24, opacity: 0, duration: 0.8 }, "-=0.9");

          /* scroll reveals REPLAY every time a section enters the screen
             (play going in, reverse going out — both directions).
             Exception: the Real Stories / Find Us section (#visit) is frozen
             by request — it keeps its original play-once reveal, untouched. */
          gsap.utils.toArray(".reveal").forEach(function (el) {
            if (el.closest("#visit")) {
              gsap.from(el, {
                y: 42, opacity: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 88%", once: true }
              });
              return;
            }
            gsap.fromTo(el, { y: 42, opacity: 0 }, {
              y: 0, opacity: 1, duration: 1, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" }
            });
          });

          /* services: cards rise + fade in with a stagger */
          var svcCards = gsap.utils.toArray(".svc");
          if (svcCards.length) {
            gsap.set(svcCards, { y: 46, opacity: 0 });
            ScrollTrigger.batch(svcCards, {
              start: "top 92%",
              onEnter: function (els) {
                gsap.to(els, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out", overwrite: true });
              },
              onLeaveBack: function (els) {
                gsap.to(els, { y: 46, opacity: 0, duration: 0.5, stagger: 0.05, ease: "power2.in", overwrite: true });
              }
            });
          }

          /* happy days point cards: staggered rise + slight tilt, REPLAYING
             every time the section comes back into view */
          var hdPoints = gsap.utils.toArray(".hd-point");
          if (hdPoints.length) {
            gsap.set(hdPoints, { y: 44, opacity: 0, rotate: 1.2 });
            ScrollTrigger.batch(hdPoints, {
              start: "top 94%",
              onEnter: function (els) {
                gsap.to(els, { y: 0, opacity: 1, rotate: 0, duration: 0.85, stagger: 0.12, ease: "power3.out", overwrite: true });
              },
              onLeaveBack: function (els) {
                gsap.to(els, { y: 44, opacity: 0, rotate: 1.2, duration: 0.45, stagger: 0.05, ease: "power2.in", overwrite: true });
              }
            });
          }

          /* trusted hands: cards slide in from left / right — and REPLAY
             every time the section comes back into view (reverse on leave) */
          gsap.utils.toArray("[data-anim]").forEach(function (el) {
            var fromLeft = el.getAttribute("data-anim") === "left";
            gsap.fromTo(el, { x: fromLeft ? -56 : 56, opacity: 0 }, {
              x: 0, opacity: 1, duration: 1.05, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" }
            });
          });

          /* final CTA: heading lines rise in, photos slide in from the sides */
          gsap.fromTo(".cta-line > span", { yPercent: 118 }, {
            yPercent: 0, duration: 1, stagger: 0.13, ease: "power3.out",
            scrollTrigger: { trigger: ".cta", start: "top 78%", toggleActions: "play none none reverse" }
          });
          gsap.fromTo(".cta-photo-l", { x: -64, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: ".cta", start: "top 78%", toggleActions: "play none none reverse" }
          });
          gsap.fromTo(".cta-photo-r", { x: 64, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: ".cta", start: "top 78%", toggleActions: "play none none reverse" }
          });

          /* animated counters */
          document.querySelectorAll("[data-count]").forEach(function (el) {
            var target = parseInt(el.getAttribute("data-count"), 10);
            var obj = { v: 0 };
            ScrollTrigger.create({
              trigger: el, start: "top 90%",
              onEnter: function () {
                obj.v = 0;
                gsap.to(obj, {
                  v: target, duration: 1.8, ease: "power2.out",
                  onUpdate: function () { el.textContent = Math.round(obj.v); }
                });
              },
              onLeaveBack: function () {
                gsap.killTweensOf(obj);
                obj.v = 0;
                el.textContent = "0";
              }
            });
          });
        } else {
          /* no GSAP / reduced motion: counters show final values */
          document.querySelectorAll("[data-count]").forEach(function (el) {
            el.textContent = el.getAttribute("data-count");
          });
        }

        /* ---------- reviews carousel: 3 at a time (1 on phone), arrows + swipe ---------- */
        var revTrack = document.getElementById("revTrack");
        if (revTrack) {
          var revItems = revTrack.children;
          var revPosEl = document.getElementById("revPos");
          var revPrevBtn = document.getElementById("revPrev");
          var revNextBtn = document.getElementById("revNext");
          var revIdx = 0;
          function revPerView() { return window.innerWidth <= 620 ? 1 : (window.innerWidth <= 1000 ? 2 : 3); }
          function revMax() { return Math.max(0, revItems.length - revPerView()); }
          function revGo(n) {
            revIdx = Math.max(0, Math.min(revMax(), n));
            var gap = parseFloat(window.getComputedStyle(revTrack).columnGap) || 20.8;
            var w = revItems[0].offsetWidth + gap;
            revTrack.style.transform = "translateX(" + (-revIdx * w) + "px)";
            var pv = revPerView();
            revPosEl.textContent = (Math.floor(revIdx / pv) + 1) + " / " + Math.ceil(revItems.length / pv);
            revPrevBtn.disabled = revIdx <= 0;
            revNextBtn.disabled = revIdx >= revMax();
          }
          revPrevBtn.addEventListener("click", function () { revGo(revIdx - revPerView()); });
          revNextBtn.addEventListener("click", function () { revGo(revIdx + revPerView()); });
          window.addEventListener("resize", function () { revGo(revIdx); });
          var revVp = document.getElementById("revViewport");
          var revTx = null;
          revVp.addEventListener("touchstart", function (e) { revTx = e.changedTouches[0].clientX; }, { passive: true });
          revVp.addEventListener("touchend", function (e) {
            if (revTx === null) return;
            var dx = e.changedTouches[0].clientX - revTx;
            if (Math.abs(dx) > 42) revGo(revIdx + (dx < 0 ? revPerView() : -revPerView()));
            revTx = null;
          }, { passive: true });
          revGo(0);
        }

        /* ---------- services: "Read More" accordion — one open at a time ---------- */
        var svcToggles = document.querySelectorAll("[data-svc-toggle]");
        function svcSet(card, open) {
          var btn = card.querySelector("[data-svc-toggle]");
          var detail = card.querySelector(".svc-detail");
          card.classList.toggle("open", open);
          btn.setAttribute("aria-expanded", open ? "true" : "false");
          var lbl = btn.querySelector(".svc-btn-label");
          if (lbl) lbl.textContent = open ? "Show Less" : "Read More";
          detail.setAttribute("aria-hidden", open ? "false" : "true");
          detail.style.maxHeight = open ? detail.scrollHeight + "px" : "0px";
        }
        svcToggles.forEach(function (btn) {
          btn.addEventListener("click", function () {
            var card = btn.closest(".svc");
            var wasOpen = card.classList.contains("open");
            document.querySelectorAll(".svc.open").forEach(function (c) { svcSet(c, false); });
            if (!wasOpen) svcSet(card, true);
          });
        });

        /* ---------- before / after: smooth drag + one auto demo move ---------- */
        var baFrame = document.getElementById("baFrame");
        if (baFrame) {
          var baBeforeImg = baFrame.querySelector(".ba-before");
          var baHandle = document.getElementById("baHandle");
          var baPos = 50, baTouched = false;
          function setBA(p) {
            baPos = Math.max(2, Math.min(98, p));
            baBeforeImg.style.clipPath = "inset(0 " + (100 - baPos) + "% 0 0)";
            baHandle.style.left = baPos + "%";
            baHandle.setAttribute("aria-valuenow", Math.round(baPos));
          }
          function baFromEvent(e) {
            var r = baFrame.getBoundingClientRect();
            setBA(((e.clientX - r.left) / r.width) * 100);
          }
          var baDrag = false, baEvt = null, baRaf = false;
          baFrame.addEventListener("pointerdown", function (e) {
            baTouched = true;
            baDrag = true;
            try { baFrame.setPointerCapture(e.pointerId); } catch (err) {}
            baFromEvent(e);
          });
          baFrame.addEventListener("pointermove", function (e) {
            if (!baDrag) return;
            baEvt = e;
            if (!baRaf) {
              baRaf = true;
              requestAnimationFrame(function () { baRaf = false; if (baEvt) baFromEvent(baEvt); });
            }
          });
          ["pointerup", "pointercancel"].forEach(function (ev) {
            baFrame.addEventListener(ev, function () { baDrag = false; });
          });
          baHandle.addEventListener("keydown", function (e) {
            if (e.key === "ArrowLeft") { baTouched = true; setBA(baPos - 4); e.preventDefault(); }
            else if (e.key === "ArrowRight") { baTouched = true; setBA(baPos + 4); e.preventDefault(); }
          });
          setBA(50);
          /* one slow demo (50 -> 65 -> 50) the first time it scrolls into view;
             the first touch or drag stops it forever */
          if (!reduced && "IntersectionObserver" in window) {
            var baIO = new IntersectionObserver(function (entries) {
              if (!entries[0].isIntersecting) return;
              baIO.disconnect();
              if (baTouched) return;
              var demoStart = null;
              function easeIO(x) { return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }
              function demoStep(ts) {
                if (baTouched) { setBA(50); return; }
                if (!demoStart) demoStart = ts;
                var t = (ts - demoStart) / 2400;
                if (t >= 1) { setBA(50); return; }
                var p = t < 0.5 ? 50 + easeIO(t * 2) * 15 : 65 - easeIO((t - 0.5) * 2) * 15;
                setBA(p);
                requestAnimationFrame(demoStep);
              }
              requestAnimationFrame(demoStep);
            }, { threshold: 0.45 });
            baIO.observe(baFrame);
          }
        }

        /* ---------- phone video: loads and plays only when seen (stays fast) ---------- */
        var phoneVideo = document.querySelector("[data-phone-video]");
        if (phoneVideo) {
          if ("IntersectionObserver" in window) {
            new IntersectionObserver(function (entries) {
              entries.forEach(function (en) {
                if (en.isIntersecting) {
                  if (phoneVideo.preload !== "auto") { phoneVideo.preload = "auto"; phoneVideo.load(); }
                  var pr = phoneVideo.play(); if (pr) pr.catch(function () {});
                } else if (!phoneVideo.paused) phoneVideo.pause();
              });
            }, { rootMargin: "140px" }).observe(phoneVideo);
          } else {
            phoneVideo.preload = "auto";
          }
        }

        /* ---------- gentle parallax (transform only, cheap on phones) ---------- */
        var pxImg = document.querySelector(".px-img");
        var pxFrame = document.querySelector(".px-frame");
        var floatEl = document.querySelector("[data-float]");
        if (!reduced && (pxImg || floatEl)) {
          var pxTicking = false;
          function updatePx() {
            pxTicking = false;
            var vh = window.innerHeight;
            if (pxImg && pxFrame) {
              var r = pxFrame.getBoundingClientRect();
              if (r.bottom > 0 && r.top < vh) {
                var p = (r.top + r.height / 2 - vh / 2) / vh;
                pxImg.style.transform = "translate3d(0," + (p * -r.height * 0.14).toFixed(1) + "px,0)";
              }
            }
            if (floatEl) {
              var fr = floatEl.getBoundingClientRect();
              if (fr.bottom > 0 && fr.top < vh) {
                var fp = (fr.top + fr.height / 2 - vh / 2) / vh;
                floatEl.style.transform = "translate3d(0," + (fp * -16).toFixed(1) + "px,0)";
              }
            }
          }
          window.addEventListener("scroll", function () {
            if (!pxTicking) { pxTicking = true; requestAnimationFrame(updatePx); }
          }, { passive: true });
          updatePx();
        }

        /* ---------- theme toggle: navbar button + floating button, one logic ---------- */
        var themeBtns = document.querySelectorAll("[data-theme-toggle]");
        function syncThemeBtns() {
          var d = document.documentElement.classList.contains("dark");
          themeBtns.forEach(function (b) {
            b.setAttribute("aria-label", d ? "Switch to light mode" : "Switch to dark mode");
            b.setAttribute("aria-pressed", d ? "true" : "false");
          });
        }
        themeBtns.forEach(function (b) {
          b.addEventListener("click", function () {
            var d = document.documentElement.classList.toggle("dark");
            try { localStorage.setItem("hd-theme", d ? "dark" : "light"); } catch (e) {}
            syncThemeBtns();
          });
        });
        syncThemeBtns();

        /* ---------- FAQ accordion: slow + smooth, one open at a time ---------- */
        var faqItems = document.querySelectorAll(".faq-item");
        function faqSet(item, open) {
          var btn = item.querySelector(".faq-q");
          var panel = item.querySelector(".faq-a");
          item.classList.toggle("open", open);
          btn.setAttribute("aria-expanded", open ? "true" : "false");
          panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
        }
        faqItems.forEach(function (item) {
          item.querySelector(".faq-q").addEventListener("click", function () {
            var wasOpen = item.classList.contains("open");
            faqItems.forEach(function (it) { faqSet(it, false); });
            if (!wasOpen) faqSet(item, true);
          });
        });

        /* ---------- Three.js golden dust — lazy, after first paint ---------- */
        function initDust() {
          if (reduced || !window.THREE) return;
          var canvas = document.getElementById("dust");
          var hero = document.querySelector(".hero");
          if (!canvas || !hero) return;
          var isMobile = window.matchMedia("(max-width: 700px)").matches;
          var COUNT = isMobile ? 130 : 260;

          var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
          var scene = new THREE.Scene();
          var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
          camera.position.z = 8;

          var geo = new THREE.BufferGeometry();
          var pos = new Float32Array(COUNT * 3);
          var seed = new Float32Array(COUNT);
          for (var i = 0; i < COUNT; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 18;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
            seed[i] = Math.random() * Math.PI * 2;
          }
          geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
          var mat = new THREE.PointsMaterial({
            color: 0xE3C888, size: 0.055, transparent: true, opacity: 0.75,
            depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true
          });
          var points = new THREE.Points(geo, mat);
          scene.add(points);

          function resize() {
            var w = hero.clientWidth, h = hero.clientHeight;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
          }
          resize();
          window.addEventListener("resize", resize);

          var running = true;
          new IntersectionObserver(function (entries) {
            running = entries[0].isIntersecting;
          }, { threshold: 0 }).observe(hero);

          var clock = new THREE.Clock();
          (function tick() {
            requestAnimationFrame(tick);
            if (!running) return;
            var t = clock.getElapsedTime();
            var arr = geo.attributes.position.array;
            for (var j = 0; j < COUNT; j++) {
              arr[j * 3 + 1] += 0.0035 + Math.sin(t * 0.6 + seed[j]) * 0.0012;
              arr[j * 3] += Math.sin(t * 0.35 + seed[j]) * 0.0016;
              if (arr[j * 3 + 1] > 5.4) arr[j * 3 + 1] = -5.4;
            }
            geo.attributes.position.needsUpdate = true;
            points.rotation.y = Math.sin(t * 0.05) * 0.04;
            renderer.render(scene, camera);
          })();
        }

        function loadThree() { initDust(); } /* port: THREE comes from the npm package, not the CDN */
        if ("requestIdleCallback" in window) requestIdleCallback(loadThree, { timeout: 2500 });
        else window.addEventListener("load", function () { setTimeout(loadThree, 600); });
      })();
    /* ================= original logic ends ================= */
    return () => {
      w.hdHome = false;
      try { ScrollTrigger.getAll().forEach((t) => t.kill()); } catch (e) {}
    };
  }, []);
  return null;
}
