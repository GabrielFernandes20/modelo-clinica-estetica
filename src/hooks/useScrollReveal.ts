import { useEffect, useRef } from "react";

/**
 * useScrollReveal — hook to apply bounded scroll entrance animations
 * Impeccable motion principles:
 * - One-way trigger (unobserve on reveal to keep runtime lightweight)
 * - Fallback to immediate reveal if IntersectionObserver or reduced motion is active
 * - Smooth exponential deceleration
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-revealed");
      return;
    }

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

/**
 * useAutoScrollReveal — automatically discovers and observes all .reveal-init elements on the page
 */
export function useAutoScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const revealAll = () => {
      document.querySelectorAll(".reveal-init").forEach((el) => {
        el.classList.add("is-revealed");
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const observeUnrevealed = () => {
      const elements = document.querySelectorAll(".reveal-init:not(.is-revealed)");
      elements.forEach((el) => observer.observe(el));
    };

    // Initial pass
    observeUnrevealed();

    // Observe any DOM additions (e.g. tabs or dynamic renders)
    let mutationObserver: MutationObserver | null = null;
    if ("MutationObserver" in window) {
      mutationObserver = new MutationObserver(() => {
        observeUnrevealed();
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
    };
  }, []);
}
