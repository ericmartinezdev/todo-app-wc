import TodoContainer from "./todo-container.js";
import TodoList from "./todo-list.js";
import TodoElement from "./todo.js";

window.todos = {
  tasks: []
}

customElements.define('todo-list', TodoList);
customElements.define('todo-container', TodoContainer);
customElements.define('todo-element', TodoElement);