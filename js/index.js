import TodoContainer from "./todo-container.js";
import TodoElement from "./todo.js"

window.todos = {
  tasks: []
}

customElements.define('todo-element', TodoElement);
customElements.define('todo-container', TodoContainer);