class TodoList extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    /* Empty outs the todo-list element to print the accurate amount of todos */
    this.innerHTML = "";
    
    /* Creates the container where the todos will be going into and adds a class for styling purposes */
    const list_container = document.createElement('div');
    list_container.classList.add('list-container');

    /* Creates the ul for the todos(li) */
    const todo_list = document.createElement('ul')
    
    /* forEach function to create a li, button, span, and custom-element for every todo that's in the todos array */
    window.todos.tasks.forEach((task, i) => {
      if(task.edit) {
        todo_list.innerHTML += `
        <todo-element>
        <li data-index="${i}">
        <input class="edited-todo-text" value="${task.text}">
        <button class="destroyer">x</button>
        <button class="update-todo">Update</button>
        </li>
        </todo-element>
        `;
      } else {
        todo_list.innerHTML += `
        <todo-element>
        <li data-index="${i}">
        <span class="todo-text">${task.text}</span>
        <button class="destroyer">x</button>
        <button class="edit-todo">Edit</button>
        </li>
        </todo-element>
        `;
      }
    });

    /* adds the ul inside the div  */
    list_container.appendChild(todo_list);

    /* adds the div with the ul inside of the custom todo-element... from this line it results in the elements to be displayed on the page */
    this.appendChild(list_container);
  }
}

export default TodoList;