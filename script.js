// Navbar: toggle and scrolled shadow
(function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const navbarInner = document.getElementById("navbarInner");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Fecha o menu hamburguer quando clica
  mobileMenu?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  });

  // Adiciona sombra ao navbar quando scrolla
  function onScroll() {
    if (window.scrollY > 10) {
      navbarInner.classList.add("nav-scrolled", "bg-[var(--verde-escuro)]");
    } else {
      navbarInner.classList.remove("nav-scrolled");
      navbarInner.classList.add("bg-[var(--verde-escuro)]");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// Contagem regressiva
(function () {
  const target = new Date("2026-04-11T17:00:00").getTime();
  const dd = document.getElementById("dd");
  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const ss = document.getElementById("ss");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (dd) dd.textContent = pad(days);
    if (hh) hh.textContent = pad(hours);
    if (mm) mm.textContent = pad(minutes);
    if (ss) ss.textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
})();
