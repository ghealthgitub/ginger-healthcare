/* ============================================
   GINGER HEALTHCARE — SHARED JAVASCRIPT
   Version: 1.0 | ginger.healthcare
   ============================================ */

// === STICKY NAV ===
window.addEventListener("scroll", () => {
    const nav = document.getElementById("mainNav");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
});

// === MOBILE NAV ===
function openMobileNav() {
    const mn = document.getElementById("mobileNav");
    if (mn) { mn.classList.add("open"); document.body.style.overflow = "hidden"; }
}
function closeMobileNav() {
    const mn = document.getElementById("mobileNav");
    if (mn) { mn.classList.remove("open"); document.body.style.overflow = ""; }
}
document.addEventListener("click", (e) => {
    const mn = document.getElementById("mobileNav");
    if (mn && e.target === mn) closeMobileNav();
});

// === SCROLL REVEAL ===
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});

// === ANTI-COPY PROTECTION (Layer 2) ===
// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable keyboard shortcuts for view source / dev tools
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && (e.key === "u" || e.key === "U")) e.preventDefault();
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) e.preventDefault();
    if (e.key === "F12") e.preventDefault();
});

// Disable text selection on specific elements (not form inputs)
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav, footer, .hero, .sec-header").forEach(el => {
        el.style.userSelect = "none";
        el.style.webkitUserSelect = "none";
    });
});
