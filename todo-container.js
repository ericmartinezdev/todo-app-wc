class TodoContainer extends HTMLElement {
  constructor() {
    super();

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
    this.inputEl = this.querySelector('#todo-input')    
  }

  addTodo() {
    const todoObj = {
      text: this.inputEl.value,
      completed: false
    }
    
    /* if the #todo-input is not empty, it will add the todo. */
    if(this.inputEl.value) {
      window.todos.tasks.push(todoObj);
    } else {
      console.log(false);
    }

    /* Zeros out the #todo-input after adding the todo */ 
    this.inputEl.value = "";
  }
}

export default TodoContainer;