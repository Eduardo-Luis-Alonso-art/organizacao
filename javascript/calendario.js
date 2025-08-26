const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const importantDates = [
  { day: 10, month: 1, description: "Início das Aulas" },
  { day: 4, month: 6, description: "Férias de Julho" },
  { day: 10, month: 10, description: "Última aula do Curso" },
  { day: 15, month: 10, description: "Formatura e encerramento do Curso" },
];

let currentDate = new Date();
let currentMonth = parseInt(localStorage.getItem('currentMonth'), 10);
if (isNaN(currentMonth) || currentMonth < 0 || currentMonth > 11) {
  currentMonth = currentDate.getMonth();
}

const currentYear = 2025;

function markImportantDates(cell, day, month) {
  importantDates.forEach(date => {
    if (date.day === day && date.month === month) {
      cell.classList.add('marcar');
      cell.title = date.description;
      cell.setAttribute('aria-label', `Data importante: ${date.description}`);
    }
  });
}

function generateCalendar(month, year) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const monthName = monthNames[month];
  const numDays = lastDay.getDate();
  const startDay = firstDay.getDay();

  const calendarBody = document.querySelector('#calendario tbody');
  const monthNameElement = document.querySelector('#month-name');
  
  if (!calendarBody || !monthNameElement) return; // segurança

  monthNameElement.textContent = `${monthName} ${year}`;
  calendarBody.innerHTML = '';

  let row = document.createElement('tr');
  let day = 1;

  // Preenche espaços vazios
  for (let i = 0; i < startDay; i++) {
    row.appendChild(document.createElement('td'));
  }

  // Primeira semana
  for (let i = startDay; i < 7; i++) {
    const cell = document.createElement('td');
    cell.textContent = day;
    markImportantDates(cell, day, month);
    row.appendChild(cell);
    day++;
  }
  calendarBody.appendChild(row);

  // Restante do mês
  while (day <= numDays) {
    row = document.createElement('tr');
    for (let i = 0; i < 7 && day <= numDays; i++) {
      const cell = document.createElement('td');
      cell.textContent = day;
      markImportantDates(cell, day, month);
      row.appendChild(cell);
      day++;
    }
    calendarBody.appendChild(row);
  }
}

function changeMonth(increment) {
  currentMonth = (currentMonth + increment + 12) % 12;
  localStorage.setItem('currentMonth', currentMonth);
  generateCalendar(currentMonth, currentYear);
}

generateCalendar(currentMonth, currentYear);

document.querySelector('#prev-month')?.addEventListener('click', () => changeMonth(-1));
document.querySelector('#next-month')?.addEventListener('click', () => changeMonth(1));