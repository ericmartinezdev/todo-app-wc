import TodoContainer from "./todo-container.js";
import TodoList from "./todo-list.js"

window.todos = {
  tasks: []
}

customElements.define('todo-list', TodoList);
customElements.define('todo-container', TodoContainer);