function openPopup(popup: HTMLElement, param:  string) {
  popup.classList.add('active', param)
}
function closePopup(popup: HTMLElement, param:  string[]) {
  popup.classList.remove('active', ...param)
}

export default function popupFunc() {
  const popupBlock = document.querySelector('.popup') as HTMLElement;
  const arrayClasses: string[] = [];
  
  if (popupBlock) {
    const singInButtons = document.querySelectorAll('[data-popup]') as unknown as HTMLElement[];
    
    singInButtons?.forEach(el => {
      const dataPopup = el.getAttribute('data-popup');
      if (dataPopup) {
        if (arrayClasses.indexOf(dataPopup) == -1) {
          arrayClasses.push(dataPopup);
        }
        el.addEventListener('click', () => {
          closePopup(popupBlock, arrayClasses);
          openPopup(popupBlock, dataPopup);
        })
      }
    })

  }
  const overlay = document.querySelector('.overlay') as HTMLElement;
  overlay.addEventListener('click', () => {
    closePopup(popupBlock, arrayClasses);
  })
  document.querySelectorAll('[data-popup-close]').forEach(el => {
    el.addEventListener('click',  () => closePopup(popupBlock, arrayClasses))
  })
}
