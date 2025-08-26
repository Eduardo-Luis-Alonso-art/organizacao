function adaptTableForMobile() {
  const tabela = document.querySelector('.tabela-horarios');
  if (!tabela) return;

  if (window.innerWidth <= 767) {
    const headers = ['Dia da Semana', 'Horário de Início', 'Horário de Término'];
    const cells = tabela.querySelectorAll('tbody td');
    
    cells.forEach((cell, index) => {
      const headerIndex = index % headers.length;
      cell.setAttribute('data-label', headers[headerIndex]);
    });
  }
}

window.addEventListener('DOMContentLoaded', adaptTableForMobile);
window.addEventListener('resize', adaptTableForMobile);