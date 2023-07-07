class TodoContainer extends HTMLElement {
  constructor() {
    super();

    /* The custom element holder */
    this.todoListEl = document.querySelector('todo-list');

    this.innerHTML = `
      <input type="text" id="todo-input" placeholder="Eat, Sleep, Code">
      <button id="add-todo-btn">Add Todo</button>
      <div class="todo-list"></div>
    `;

    /* Event listener added to <button id="add-todo-btn"> When button is clicked, the addTodo function is ran */
    this.querySelector('#add-todo-btn').addEventListener('click', this.addTodo.bind(this));

    /* Targets <div class="todo-list> outside the constructor */
    this.divEl = this.querySelector('.todo-list');
    
    /* Captures the input element so I can use the value */
    this.inputEl = this.querySelector('#todo-input');
  }

  addTodo() {
    const todoObj = {
      text: this.inputEl.value,
      completed: false
    }
    
    /* if the #todo-input is not empty, it will add the todo. .trim() will remove spaces before and after the text */
    if(this.inputEl.value.trim()) {
      window.todos.tasks.push(todoObj);
    } else {
      console.log(false);
    }

    /* Runs the render function in the todo-list file */
    this.todoListEl.render();

    /* Zeros out the #todo-input after adding the todo */ 
    this.inputEl.value = "";
  }

  deleteTodo(todoIndex) {
    window.todos.tasks.splice([todoIndex], 1);
    this.todoListEl.render();
  }
}

export default TodoContainer;