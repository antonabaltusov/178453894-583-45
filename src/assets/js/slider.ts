import Swiper from "./swiper/swiper-bundle.min.js";


export default function slider() {
  const slider = document.querySelector('.swiper') as HTMLElement;
  const prevButton = document.querySelector('.swiper-prev') as HTMLElement;
  const nextButton = document.querySelector('.swiper-next') as HTMLElement;
  let swiper;
  if (slider) {
    swiper = new Swiper(slider, {
      // configure Swiper to use modules
      speed: 800,
      touchRatio: 2,
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
  }
}
