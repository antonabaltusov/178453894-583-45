function openPopup(popup: HTMLElement, param: string, overlay: HTMLElement) {
  popup.classList.add("active", param);
  overlay.classList.add("active");
}
function closePopup(popup: HTMLElement, param: string[], overlay: HTMLElement) {
  popup.classList.remove("active", ...param);
  overlay.classList.remove("active");
}

export default function popupFunc() {
  const popupBlock = document.querySelector(".popup") as HTMLElement;
  const arrayClasses: string[] = [];
  const overlay = document.querySelector(".popup-overlay") as HTMLElement;
  if (popupBlock) {
    const singInButtons = document.querySelectorAll(
      "[data-popup]"
    ) as unknown as HTMLElement[];

    singInButtons?.forEach((el) => {
      const dataPopup = el.getAttribute("data-popup");
      if (dataPopup) {
        if (arrayClasses.indexOf(dataPopup) == -1) {
          arrayClasses.push(dataPopup);
        }
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          closePopup(popupBlock, arrayClasses, overlay);
          openPopup(popupBlock, dataPopup, overlay);
        });
      }
    });
  }

  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".popup")) {
      closePopup(popupBlock, arrayClasses, overlay);
    }
  });
  document.querySelectorAll("[data-popup-close]").forEach((el) => {
    el.addEventListener("click", () =>
      closePopup(popupBlock, arrayClasses, overlay)
    );
  });
}
