export default function selectList() {
  document.querySelectorAll('.select-wrap').forEach(wrap => {
    wrap.querySelectorAll('.select-btn').forEach(btn => {
      console.log(btn);
      
      btn.addEventListener('click', (e) => {
        wrap.classList.toggle('active')
      })
    })
    const options = wrap.querySelectorAll('.select-item');
    let activeBtn;
    options.forEach(btn => {
      if(btn.classList.contains('active')) {
        activeBtn = btn;
      }
      btn.addEventListener('click', (e) => {
        wrap.classList.toggle('active');
        if (!btn.classList.contains('active')) {
          activeBtn.classList.remove('active');
          btn.classList.add('active');
          activeBtn = btn;
        }
      })
    })
  })

}
