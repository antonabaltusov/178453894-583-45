export default function focusBlur() {
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', (e) => {
      const input = e.target as HTMLInputElement;
      const wrapper = input.closest('.input');
      if(wrapper) {
        wrapper.classList.add('active');
      }
    })
    input.addEventListener('blur', (e) => {
      const input = e.target as HTMLInputElement;
      const wrapper = input.closest('.input');
      if(wrapper) {
        wrapper.classList.remove('active');
      }
    })
  })
}
