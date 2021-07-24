export function chosenAnswer() {
  const buttons = document.querySelectorAll('[type=button]');
  buttons.forEach((button) => {
    if (button.dataset.answer === 'correct') {
      button.style = 'background-color: #06f00f;color:#fcfcfc;';
    }
    if (button.dataset.answer === 'incorrect') {
      button.style = 'background-color: red;color:#fcfcfc;';
    }
  });
}

export function setLocalStorage(item) {
  localStorage.setItem('state', JSON.stringify(item));
}
