(function () {
  const liderbord = document.querySelector(".liderbord");
  if (liderbord) {
    const filter = liderbord.querySelector(".liderbord__filter");
    if (filter) {
      filter.addEventListener("click", () => {
        filter.classList.toggle("open");
      });
      document.addEventListener("click", (e: Event) => {
        if (
          // @ts-ignore
          !e.target?.classList.contains("liderbord__filter") &&
          // @ts-ignore
          !e.target.closest(".liderbord__filter")
        ) {
          filter.classList.remove("open");
        }
      });
    }
  }
  const table = document.querySelector(".liderbord-table");
  if (table) {
    const sortButtons = table.querySelectorAll(".sort button");
    let activeButton: Element | null = null;
    sortButtons.forEach((btn) => {
      if (btn.classList.contains("active")) {
        if (activeButton) {
          btn.classList.remove("active");
        } else {
          activeButton = btn;
        }
      }
      btn.addEventListener("click", () => {
        if (btn === activeButton) {
          btn.classList.toggle("up");
        } else {
          btn.classList.add("active");
          activeButton?.classList.remove("active", "up");
          activeButton = btn;
        }
      });
    });
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth < 410) {
      const buttons = table.querySelectorAll(
        ".liderbord-table__list .liderbord-table__item"
      );
      let activeButton: Element | null = null;
      buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (btn === activeButton) {
            btn.classList.remove("open-popup");
            activeButton = null;
          } else {
            btn.classList.add("open-popup");
            activeButton?.classList.remove("open-popup");
            activeButton = btn;
          }
          document.addEventListener(
            "click",
            () => {
              btn.classList.remove("open-popup");
              activeButton = null;
            },
            { once: true }
          );
        });
      });
    }
  }
})();
