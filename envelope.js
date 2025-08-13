(function () {
  const modal = document.getElementById("envelope-modal");
  const seal = document.getElementById("envelope-seal");
  const sealText = document.querySelector(".seal-text");
  const html = document.documentElement;

  // Bloqueia scroll enquanto o modal está ativo
  const prevOverflow = html.style.overflow;
  html.style.overflow = "hidden";

  // Inicia a sequência de abertura do modal
  function startOpenSequence() {

    window.scrollTo(0, 0); // sempre começa no topo

    // 1) fade out do selo no lugar
    seal.classList.add("seal--fadeout");
    sealText.classList.add("seal--fadeout");

    // 2) depois do fade, abre o flap
    const fadeMs =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--fade-ms")
      ) || 600;
    const openMs =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--open-ms")
      ) || 1700;

    setTimeout(() => {
      modal.classList.add("opening");

      // 3) após abrir, libera scroll e remove o overlay
      setTimeout(() => {
        html.style.overflow = prevOverflow;
        modal.classList.add("is-dismissed");
        setTimeout(() => {
          modal.style.display = "none";
        }, 600);
      }, openMs + 150);
    }, fadeMs);
  }

  seal.addEventListener('click', startOpenSequence);

})();
