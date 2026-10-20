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

export default function HowWeWorkEffects() {
  useEffect(() => {
    (window as any).gsap = gsap;
    (window as any).THREE = THREE;
    try { gsap.registerPlugin(ScrollTrigger); } catch (e) {}
    const w = window as any;
    if (w.hdHowWeWork) return;
    w.hdHowWeWork = true;
    // React does not always apply the muted attribute; ensure hero/inline
    // autoplay videos can actually autoplay like in the static original.
    document.querySelectorAll("video[autoplay]").forEach((v) => {
      const vid = v as HTMLVideoElement;
      vid.muted = true;
      const p = vid.play();
      if (p && p.catch) p.catch(() => {});
    });
    /* ================= original logic begins ================= */
// Marquee content (duplicated x2 sets for a seamless loop)
      (function () {
        var items = ["Birthday", "Marriage", "Stage", "Lights", "Milad", "Mehndi", "Walima", "Dholki", "Any Event"];
        var oneSet = items.map(function (t) { return "<span>" + t + "</span><i>·</i>"; }).join("");
        document.getElementById("marqueeTrack").innerHTML = oneSet + oneSet + oneSet + oneSet;
      })();

      // Dark / light toggle — navbar only, saved in localStorage "hd-theme"
      (function () {
        var btn = document.getElementById("themeBtn");
        btn.addEventListener("click", function () {
          var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
          document.documentElement.setAttribute("data-theme", next);
          try { localStorage.setItem("hd-theme", next); } catch (e) {}
        });
      })();

      // Mobile menu — opens the same nav links on phones
      (function () {
        var btn = document.getElementById("menuBtn");
        var menu = document.getElementById("mobileMenu");
        btn.addEventListener("click", function () {
          var open = menu.classList.toggle("open");
          btn.setAttribute("aria-expanded", open ? "true" : "false");
        });
        menu.addEventListener("click", function (e) {
          if (e.target.tagName === "A") {
            menu.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
          }
        });
      })();

      // Scroll animations that REPLAY every time an element enters the screen
      (function () {
        var els = document.querySelectorAll(".rv");
        if (!("IntersectionObserver" in window)) {
          els.forEach(function (el) { el.classList.add("in"); });
          return;
        }
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              en.target.classList.add("in");
            } else {
              en.target.classList.remove("in");
            }
          });
        }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
        els.forEach(function (el) { io.observe(el); });
      })();
    /* ================= original logic ends ================= */
    return () => {
      w.hdHowWeWork = false;
      try { ScrollTrigger.getAll().forEach((t) => t.kill()); } catch (e) {}
    };
  }, []);
  return null;
}
