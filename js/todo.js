class TodoElement extends HTMLElement {
  constructor() {
    super();

    this.input = document.querySelector('#todo-input');
    this.todoContainer = document.querySelector('todo-container');
    // this.changeEvent = new Event('change', { bubbles: true });
    this.li = this.querySelector('li');
    
    this.querySelectorAll('.destroyer').forEach(
      button => button.addEventListener('click', this.onButtonClick.bind(this))
    )
  }

  onButtonClick(event) {
    event.preventDefault();
    this.todoContainer.deleteTodo(this.li.dataset.index);
  }
}

export default TodoElement;