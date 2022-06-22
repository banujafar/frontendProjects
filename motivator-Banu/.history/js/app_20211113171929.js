// ?todo list
const BUTTON_ADD = document.getElementById('submitBtn');
const INPUT_TODO = document.getElementById('todoInput');
const CARD_HEADER2 = document.querySelectorAll('.card-header')[1];
const ALERT_CONTAINER = document.getElementById('forMargin');
const TODO_LIST = document.querySelector('.list-group ');
const SPAN_UNCOMPLETED_COUNTER = document.getElementById('counter-uncompleted');
const SPAN_COMPLETED_COUNTER = document.getElementById('counter-completed');

eventListeners();

function eventListeners() {
  BUTTON_ADD.addEventListener('click', addTodo);
  TODO_LIST.addEventListener('click', removeOrFind);
  document.addEventListener('DOMContentLoaded', addTodosUIFromStorage);
}

function addTodo() {
  let newTodo = INPUT_TODO.value.trim();

  if (newTodo === '') {
    showMessage('danger', 'Bir todo daxil edin!!!');
  } else {
    showMessage('primary', `${newTodo} daxil edildi...`);
    addUI(newTodo);
    addTodosToStorage(newTodo);
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

        <label class="list-group-item d-flex justify-content-between">
            <div>
              <input class="form-check-input me-1" type="checkbox" value="">
              ${todo}
            </div>
            <i class="bi bi-calendar-x"></i>
      </label>


    `;

  INPUT_TODO.value = '';
}

function getTodosFromStorage() {
  let todoStore;
  if (localStorage.getItem('todo') === null) {
    todoStore = [];
  } else {
    todoStore = JSON.parse(localStorage.getItem('todo'));
  }
  return todoStore;
}

function addTodosToStorage(paramsTodo) {
  let todoStore2 = getTodosFromStorage(); //?[][eat][eat,code]
  todoStore2.push(paramsTodo); //?[eat][eat,code][eat,code,more]
  localStorage.setItem('todo', JSON.stringify(todoStore2)); //?todo    [eat,code]
}

function addTodosUIFromStorage() {
  getTodosFromStorage().forEach(function (todo) {
    addUI(todo);
  });
}

function removeOrFind(e) {
  let targetSpace = e.target;

  if (targetSpace.className !== 'form-check-input me-1') {
    if (targetSpace.className === 'bi bi-calendar-x') {
      targetSpace.parentElement.remove();
    }

    e.preventDefault();
  } else {
    let checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => {
      if (checkbox !== targetSpace) {
       checkbox.checked === true ? checkbox.checked = false ? 
     }
    })
  }
}
