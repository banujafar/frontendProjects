// ?todo list
const BUTTON_ADD = document.getElementById('submitBtn');
const INPUT_TODO = document.getElementById('todoInput');
const CARD_HEADER2 = document.querySelectorAll('.card-header')[1];
const ALERT_CONTAINER = document.getElementById('forMargin');
const TODO_LIST = document.querySelector('.list-group ');

eventListeners();

function eventListeners() {
  BUTTON_ADD.addEventListener('click', addTodo);
}

function addTodo() {
  let newTodo = INPUT_TODO.value.trim();

  if (newTodo === '') {
    showMessage('danger', 'Bir todo daxil edin!!!');
  } else {
    showMessage('primary', `${newTodo} daxil edildi...`);
    addUI(newTodo);
  }
}

function showMessage(type, message) {
  let alertBox = document.createElement('div');
  alertBox.className = `alert alert-${type}`;
  alertBox.textContent = message;

  CARD_HEADER2.appendChild(alertBox);
  ALERT_CONTAINER.classList.add('mb-3');

  setTimeout(function () {
    ALERT_CONTAINER.classList.remove('mb-3');
    alertBox.remove();
  }, 2000);
}


function addUI(todo) {
  TODO_LIST.innerHTML += `

        <label class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="">
        ${todo}
      </label>


    `;

  INPUT_TODO.value = "";
}