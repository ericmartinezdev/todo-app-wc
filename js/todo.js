class TodoElement extends HTMLElement {
  constructor() {
    super();

    this.editInput = this.querySelector('.edited-todo-text');
    this.todoContainer = document.querySelector('todo-container');
    this.li = this.querySelector('li');
    
    this.querySelectorAll('.destroyer').forEach(
      button => button.addEventListener('click', this.onButtonClick.bind(this))
    )

    this.querySelectorAll('.edit-todo').forEach(
      button => button.addEventListener('click', this.editButtonClick.bind(this))
    )

    this.querySelectorAll('.update-todo').forEach(
      button => button.addEventListener('click', this.updateButtonClick.bind(this))
    )
  }

  onButtonClick(event) {
    event.preventDefault();
    this.todoContainer.deleteTodo(this.li.dataset.index);
  }

  editButtonClick(event) {
    event.preventDefault();
    this.todoContainer.editTodo(this.li.dataset.index);
  }

  updateButtonClick(event) {
    event.preventDefault();
    if(this.editInput.value.trim() != "") {
      this.todoContainer.updateTodo(this.li.dataset.index, this.editInput.value.trim());
    } else {
      this.todoContainer.deleteTodo(this.li.dataset.index);
    }
  }
}

export default TodoElement;