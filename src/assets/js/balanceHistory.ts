import { debug } from "console";

export default function balanceHistory() {
  let activeButton = document.querySelector('.history-balance__nav button.active');
  const historyBalanceList = document.querySelector('.history-balance__list');

  if (activeButton && historyBalanceList) {
    document.querySelectorAll('.history-balance__nav button').forEach(button => {
      button.addEventListener('click', (e) => {
        const button = e.target as HTMLButtonElement;
        if (button.id === 'all') {
          historyBalanceList.classList.remove('plus', 'minus');
        } else if (button.id === 'in') {
          historyBalanceList.classList.remove('minus');
          historyBalanceList.classList.add('plus');
        } else if (button.id === 'out') {
          historyBalanceList.classList.remove('plus');
          historyBalanceList.classList.add('minus');
        }
        activeButton?.classList.remove('active');
        button.classList.add('active');
        activeButton = button;
      })
    })
  }
}
