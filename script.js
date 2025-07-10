const botao = document.querySelector('#botao');
const tooltip = document.querySelector('#tooltip');

// Cria o popper
const popperInstance = Popper.createPopper(botao, tooltip, {
  placement: 'top',
});

// Mostrar e esconder o tooltip com hover
botao.addEventListener('mouseenter', () => {
  tooltip.style.display = 'block';
  popperInstance.update();
});

botao.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});