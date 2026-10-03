document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector(".bouquet__svg");

  if (!svg) return;

  // ============================================================
  // COMPACT MOBILE BOUQUET
  // ============================================================

  const mobileBouquet = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );

  mobileBouquet.setAttribute("class", "mobile-bouquet");
  mobileBouquet.setAttribute("aria-hidden", "true");

  /*
    The whole bouquet is moved upward inside the SVG.
    This is important because the original coordinates were
    placing everything too close to the bottom of the phone.
  */
  mobileBouquet.setAttribute("transform", "translate(0 -105)");

  const add = (tag, attrs, parent = mobileBouquet) => {
    const element = document.createElementNS(
      "http://www.w3.org/2000/svg",
      tag
    );

    Object.entries(attrs).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });

    parent.appendChild(element);

    return element;
  };

  // ============================================================
  // SHORT STEMS
  // ============================================================

  add("path", {
    class: "mobile-bouquet-stem",
    d: "M350 610 C335 555 300 505 255 445"
  });

  add("path", {
    class: "mobile-bouquet-stem",
    d: "M350 610 C350 535 350 470 350 380"
  });

  add("path", {
    class: "mobile-bouquet-stem",
    d: "M350 610 C365 555 400 505 445 445"
  });

  // ============================================================
  // LEAVES
  // ============================================================

  const leaves = [
    {
      x: 295,
      y: 545,
      rotation: 205,
      scale: 0.62
    },
    {
      x: 405,
      y: 545,
      rotation: 10,
      scale: 0.62
    },
    {
      x: 270,
      y: 505,
      rotation: -35,
      scale: 0.45
    },
    {
      x: 430,
      y: 505,
      rotation: 25,
      scale: 0.45
    }
  ];

  leaves.forEach((leaf) => {
    const group = add("g", {
      class: "mobile-bouquet-leaf",
      transform: `
        translate(${leaf.x} ${leaf.y})
        rotate(${leaf.rotation})
        scale(${leaf.scale})
      `
    });

    add(
      "use",
      {
        href: "#leafArtwork"
      },
      group
    );
  });

  // ============================================================
  // ROSES
  //
  // More triangular/rounded bouquet composition instead of
  // five roses sitting in one row.
  // ============================================================

  const roses = [
    // back / left
    {
      x: 255,
      y: 445,
      scale: 0.43,
      className: "mobile-rose-1"
    },

    // upper left
    {
      x: 305,
      y: 400,
      scale: 0.50,
      className: "mobile-rose-2"
    },

    // center / tallest
    {
      x: 350,
      y: 365,
      scale: 0.57,
      className: "mobile-rose-3"
    },

    // upper right
    {
      x: 395,
      y: 400,
      scale: 0.50,
      className: "mobile-rose-4"
    },

    // back / right
    {
      x: 445,
      y: 445,
      scale: 0.43,
      className: "mobile-rose-5"
    }
  ];

  roses.forEach((rose) => {
    const group = add("g", {
      class: `rose ${rose.className}`,
      transform: `
        translate(${rose.x} ${rose.y})
        scale(${rose.scale})
      `
    });

    const artwork = add(
      "g",
      {
        class: "rose-art"
      },
      group
    );

    add(
      "use",
      {
        href: "#roseArtwork"
      },
      artwork
    );
  });

  // Put the mobile bouquet into the SVG.
  const ribbon = svg.querySelector(".bouquet-ribbon");

  svg.insertBefore(
    mobileBouquet,
    ribbon || null
  );
});
