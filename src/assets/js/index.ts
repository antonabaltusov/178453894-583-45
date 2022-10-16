import focusBlur from "./focusBlur";
import swither from "./swither";
import search from "./search";
import mobileMenu from "./mobile-menu";
import "./polifils";
const windowWidth = document.documentElement.clientWidth;
if (windowWidth < 390) {
  const viewport = document.querySelector("meta[name=viewport]");
  viewport!.setAttribute('content', 'width=390, initial-scale=1');

}
document.addEventListener("DOMContentLoaded", () => {
  focusBlur();
  swither();
  search();
  mobileMenu();
});
