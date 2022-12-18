const m = document.querySelector("[name=viewport]");
const c = "content";
const u = "user-scalable=0";
const v = "width=";
const ini = "width=";
resize();

window.addEventListener("resize", resize);

function resize() {
  const w = screen.width;
  if (w > 1920) {
    m.setAttribute("content", "width=1920, user-scalable=0");
  } else {
    m.setAttribute("content", "width=device-width, initial-scale=1.0");
  }
}
