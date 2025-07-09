ffunction showMessage(id) {
  const messages = document.querySelectorAll('.message');
  messages.forEach(msg => {
    msg.classList.remove('show');
  });
  const selected = document.getElementById(id);
  selected.classList.add('show');
}