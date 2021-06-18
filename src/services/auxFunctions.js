export default function chosenAnswer() {
  const buttons = document.querySelectorAll('[type=button]');
  buttons.forEach((button) => {
    if (button.dataset.answer === 'correct') {
      button.classList.add('correct');
    }
    if (button.dataset.answer === 'incorrect') {
      button.classList.add('incorrect');
    }
  });
}
