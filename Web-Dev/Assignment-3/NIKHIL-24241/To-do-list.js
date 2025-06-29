const todoList = [];

const savedTodos = localStorage.getItem('todoList');
if (savedTodos) {
  todoList.push(...JSON.parse(savedTodos));
}

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todo, index) => {
    const { name, dueDate } = todo;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete-button">Delete</button>
    `;

    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach((button, index) => {
      button.addEventListener('click', () => {
        deleteTodo(index);
      });
    });
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date');

  const name = inputElement.value.trim();
  const dueDate = dateInputElement.value;

  if (name === '' || dueDate === '') {
    alert('Please fill out both fields.');
    return;
  }

  todoList.push({ name, dueDate });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

document.querySelector('.js-submit-button')
  .addEventListener('click', () => {
    addTodo();
  });

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
