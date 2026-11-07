(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.getElementById("site-header");
  const nav = document.getElementById("nav-menu");
  const navToggle = document.querySelector(".nav-toggle");
  const progress = document.getElementById("scroll-progress");
  const toTop = document.getElementById("to-top");
  const toast = document.getElementById("toast");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  /* ------------------------------ Mobile navigation ------------------------------ */

  const setMenu = (open) => {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    header?.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    const label = navToggle.querySelector(".sr-only");
    if (label) label.textContent = open ? "Close menu" : "Open menu";
  };

  navToggle?.addEventListener("click", () => {
    setMenu(!nav.classList.contains("is-open"));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  document.addEventListener("click", (event) => {
    if (!nav?.classList.contains("is-open")) return;
    if (!header?.contains(event.target)) setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) setMenu(false);
  });

  /* ------------------------------ Active section ------------------------------ */

  const setActiveSection = (id) => {
    navLinks.forEach((link) => {
      const active = Boolean(id) && link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.8] }
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* ------------------------------ Scroll UI ------------------------------ */

  let ticking = false;

  const updateScrollUI = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - doc.clientHeight;
    const ratio = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

    header?.classList.toggle("is-scrolled", scrollY > 16);
    toTop?.classList.toggle("is-visible", scrollY > 640);

    if (scrollY < window.innerHeight * 0.5) {
      setActiveSection(null);
    }

    if (progress) {
      progress.style.transform = `scaleX(${ratio})`;
    }

    if (maxScroll > 0 && scrollY + window.innerHeight >= doc.scrollHeight - 4) {
      setActiveSection("contact");
    }

    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateScrollUI);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateScrollUI();

  toTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ------------------------------ Reveal on scroll ------------------------------ */

  const revealElements = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  /* ------------------------------ Terminal typewriter ------------------------------ */

  const typedLine = document.getElementById("typed-line");
  const phrase = "Building AI tools that solve real problems.";

  if (typedLine && !reduceMotion) {
    let index = 0;
    typedLine.textContent = "";

    const typeNext = () => {
      if (index <= phrase.length) {
        typedLine.textContent = phrase.slice(0, index);
        index += 1;
        window.setTimeout(typeNext, 38);
      }
    };

    window.setTimeout(typeNext, 650);
  }

  /* ------------------------------ Animated counters ------------------------------ */

  const counters = document.querySelectorAll("[data-count]");

  const animateCounter = (element) => {
    const target = Number(element.dataset.count);
    if (!Number.isFinite(target)) return;

    if (reduceMotion) {
      element.textContent = String(target);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progressValue = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progressValue, 3);
      element.textContent = String(Math.round(target * eased));
      if (progressValue < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = String(target);
      }
    };

    window.requestAnimationFrame(step);
  };

  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach((counter) => {
        counter.textContent = counter.dataset.count;
      });
    } else {
      const counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.7 }
      );
      counters.forEach((counter) => counterObserver.observe(counter));
    }
  }

  /* ------------------------------ Copy email ------------------------------ */

  let toastTimer;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2400);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      textarea.remove();
      return copied;
    }
  };

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      const email = button.dataset.copyEmail;
      if (!email) return;
      const copied = await copyText(email);
      showToast(copied ? "Email copied to clipboard" : email);
    });
  });

  /* ------------------------------ Year ------------------------------ */

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
