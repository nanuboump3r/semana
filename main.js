
const tasks = [
  { day: 'Lunes', task: 'Loop de trap – mini video en DAW' },
  { day: 'Martes', task: 'Visual glitch con beat crudo' },
  { day: 'Miércoles', task: 'Top plugins de trap (carrusel o reel)' },
  { day: 'Jueves', task: 'Mini DJ set de trap oscuro' },
  { day: 'Viernes', task: 'Teaser del evento + nuevo beat' },
  { day: 'Sábado', task: 'Contenido del show en vivo' },
  { day: 'Domingo', task: 'Reflexión post-evento (reel o post)' }
];

const calendar = document.getElementById('calendar');

const clickSound = new Audio('click.mp3');
const undoSound = new Audio('undo.mp3');

tasks.forEach((item, index) => {
  const stored = localStorage.getItem(`task_${index}`);
  const div = document.createElement('div');
  div.className = 'day' + (stored === 'done' ? ' completed' : '');

  div.innerHTML = `
    <h2>${item.day}</h2>
    <p>${item.task}</p>
    <button onclick="completeTask(${index}, this.parentElement)">✅ Hecho</button>
    <button class="remove-btn" onclick="undoTask(${index}, this.parentElement)">✖ Deshacer</button>
  `;

  calendar.appendChild(div);
});

function completeTask(index, element) {
  localStorage.setItem(`task_${index}`, 'done');
  element.classList.add('completed');
  clickSound.currentTime = 0;
  clickSound.play();
}

function undoTask(index, element) {
  localStorage.removeItem(`task_${index}`);
  element.classList.remove('completed');
  undoSound.currentTime = 0;
  undoSound.play();
}
