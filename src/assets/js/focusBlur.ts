export default function focusBlur() {
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', (e) => {
      const input = e.target as HTMLInputElement;
      const wrapper = input.closest('.input');
      if(wrapper) {
        wrapper.classList.add('active');
      }
      console.log('focus');
      
    })
    input.addEventListener('blur', (e) => {
      const input = e.target as HTMLInputElement;
      const wrapper = input.closest('.input');
      if(wrapper) {
        wrapper.classList.remove('active');
      }
       console.log('blur');
    })
  })
}
