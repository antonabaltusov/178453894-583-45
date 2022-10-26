export default function startVideo() {
  const videoEl = document.querySelector('video') as HTMLVideoElement;
  if (videoEl) {
    videoEl.addEventListener('canplaythrough', (e) => {
      console.log('video loaded');
      videoEl.click();
      if (videoEl.playing) {
        console.log('video playing');
      }
      else {
          videoEl.play();
          console.log('on play');
      }
      videoEl.play();
      videoEl.classList.add('show');
    })
  }
  
}
