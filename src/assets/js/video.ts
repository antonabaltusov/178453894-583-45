export default function startVideo() {
  
  const videoEl = document.querySelector('video') as HTMLVideoElement;
  if (videoEl) {
    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
      get: function () {
          return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
      }
    });
    videoEl.addEventListener('canplaythrough', (e) => {
      console.log('video loaded');
      console.log(videoEl.playing);
      if (!videoEl.playing) {
        videoEl.play();
        console.log('on play');
      }
      videoEl.classList.add('show');
    },{once: true})
  }
  
}
