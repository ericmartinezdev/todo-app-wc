class TodoList extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = "";
    const list_container = document.createElement('div');
    list_container.classList.add('list-container');
    const todo_list = document.createElement('ul')
    
    window.todos.tasks.forEach((task, i) => {
      todo_list.innerHTML += `
        <li>
          <todo-element>
            <span>${task.text}</span>
            <button class="destroyer">x</button>
          </todo-element>
        </li>
      `;
    });

    list_container.appendChild(todo_list);
    this.appendChild(list_container);
  }
}

export default TodoList;