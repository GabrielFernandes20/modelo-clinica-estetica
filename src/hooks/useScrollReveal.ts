import { useEffect, useRef } from "react";

/**
 * useScrollReveal — hook to apply bounded scroll entrance animations
 * Impeccable motion principles:
 * - One-way trigger (unobserve on reveal to keep runtime lightweight)
 * - Natural exponential deceleration
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
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
 * useAutoScrollReveal — automatically discovers and observes all reveal elements on the page
 * Supports: .reveal-init, .reveal-from-left, .reveal-from-right, .reveal-scale
 */
export function useAutoScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const REVEAL_SELECTOR = ".reveal-init, .reveal-from-left, .reveal-from-right, .reveal-scale";
    const UNREVEALED_SELECTOR = ".reveal-init:not(.is-revealed), .reveal-from-left:not(.is-revealed), .reveal-from-right:not(.is-revealed), .reveal-scale:not(.is-revealed)";

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        el.classList.add("is-revealed");
      });
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
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(UNREVEALED_SELECTOR);
      elements.forEach((el) => observer.observe(el));
    };

    // Initial pass and staggered checks for rendered React subtrees
    observeElements();
    const t1 = setTimeout(observeElements, 80);
    const t2 = setTimeout(observeElements, 350);

    let mutationObserver: MutationObserver | null = null;
    if ("MutationObserver" in window) {
      mutationObserver = new MutationObserver(() => {
        observeElements();
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
    };
  }, []);
}
