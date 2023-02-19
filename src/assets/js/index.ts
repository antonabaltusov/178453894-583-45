import "./viewport";
import focusBlur from "./focusBlur";
import swither from "./swither";
import search from "./search";
import mobileMenu from "./mobile-menu";
import "./polifils";
import slider from "./slider";
import startVideo from "./video";
import popupFunc from "./popup";
import productHover from "./product-hover";
import selectList from "./selectList";
import "./liderbord";

document.addEventListener("DOMContentLoaded", () => {
  focusBlur();
  swither();
  search();
  mobileMenu();
  slider();
  startVideo();
  popupFunc();
  productHover();
  selectList();
  promocode();
});
const onLoad = () => {
  cookies();
};
window.onload = onLoad;
function cookies() {
  const cookiesBlock = document.querySelector(".cookies");

  if (cookiesBlock) {
    cookiesBlock
      .querySelector(".cookies-btn")
      ?.addEventListener("click", () => {
        cookiesBlock.classList.remove("active");
      });
    cookiesBlock.classList.add("active");
  }
}

function promocode() {
  const promoBlock = document.querySelector(".promocode");
  if (promoBlock) {
    const btn = promoBlock.querySelector(".promocode-btn");
    const input = promoBlock.querySelector("input") as HTMLInputElement;
    btn?.addEventListener("click", () => {
      if (input?.value.length) {
        if (
          !promoBlock.classList.contains("success") &&
          !promoBlock.classList.contains("error")
        ) {
          promoBlock.classList.add("success");
        } else {
          if (promoBlock.classList.contains("success")) {
            promoBlock.classList.remove("success");
            promoBlock.classList.add("error");
          } else {
            if (promoBlock.classList.contains("error")) {
              promoBlock.classList.remove("error");
              promoBlock.classList.add("success");
            }
          }
        }
      }
    });
  }
}
