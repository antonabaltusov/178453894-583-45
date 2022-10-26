import Swiper from "./swiper/swiper-bundle.min.js";


export default function startVideo() {
  const videoEl = document.querySelector('video') as HTMLVideoElement;
  if (videoEl) {
    videoEl.addEventListener('canplaythrough', (e) => {
      console.log('video loaded');
      videoEl.play();
      videoEl.classList.add('show');
    })
  }
  
}
