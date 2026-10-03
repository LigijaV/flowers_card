// ================================
// MOBILE BOUQUET
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const bouquetSvg = document.querySelector(".bouquet__svg");

  if (!bouquetSvg) return;

  // Only create the compact bouquet for mobile.
  const mobileBouquet = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );

  mobileBouquet.setAttribute("class", "mobile-bouquet");
  mobileBouquet.setAttribute("aria-hidden", "true");

  mobileBouquet.innerHTML = `
    <!-- Short stems -->
    <path
      class="mobile-bouquet-stem"
      d="M350 660 C345 610 330 555 235 505"
    />

    <path
      class="mobile-bouquet-stem"
      d="M350 660 C350 590 350 500 350 425"
    />

    <path
      class="mobile-bouquet-stem"
      d="M350 660 C355 600 375 550 465 505"
    />

    <!-- Leaves -->
    <g
      class="mobile-bouquet-leaf"
      transform="translate(285 575) rotate(205) scale(.72)"
    >
      <use href="#leafArtwork"></use>
    </g>

    <g
      class="mobile-bouquet-leaf"
      transform="translate(415 575) rotate(10) scale(.72)"
    >
      <use href="#leafArtwork"></use>
    </g>

    <g
      class="mobile-bouquet-leaf"
      transform="translate(250 535) rotate(-35) scale(.52)"
    >
      <use href="#leafArtwork"></use>
    </g>

    <g
      class="mobile-bouquet-leaf"
      transform="translate(450 535) rotate(25) scale(.52)"
    >
      <use href="#leafArtwork"></use>
    </g>

    <!-- Roses -->
    <g
      class="rose mobile-rose mobile-rose--1"
      transform="translate(235 505) scale(.48)"
    >
      <g class="rose-art">
        <use href="#roseArtwork"></use>
      </g>
    </g>

    <g
      class="rose mobile-rose mobile-rose--2"
      transform="translate(285 455) scale(.54)"
    >
      <g class="rose-art">
        <use href="#roseArtwork"></use>
      </g>
    </g>

    <g
      class="rose mobile-rose mobile-rose--3"
      transform="translate(350 420) scale(.60)"
    >
      <g class="rose-art">
        <use href="#roseArtwork"></use>
      </g>
    </g>

    <g
      class="rose mobile-rose mobile-rose--4"
      transform="translate(415 455) scale(.54)"
    >
      <g class="rose-art">
        <use href="#roseArtwork"></use>
      </g>
    </g>

    <g
      class="rose mobile-rose mobile-rose--5"
      transform="translate(465 505) scale(.48)"
    >
      <g class="rose-art">
        <use href="#roseArtwork"></use>
      </g>
    </g>
  `;

  bouquetSvg.appendChild(mobileBouquet);
});


// ================================
// HIDE MOBILE-ONLY ELEMENTS
// ================================

function updateMobileBouquet() {
  const isMobile = window.innerWidth <= 600;
  const mobileBouquet = document.querySelector(".mobile-bouquet");

  if (!mobileBouquet) return;

  mobileBouquet.style.display = isMobile ? "block" : "none";
}

window.addEventListener("resize", updateMobileBouquet);
window.addEventListener("load", updateMobileBouquet);
