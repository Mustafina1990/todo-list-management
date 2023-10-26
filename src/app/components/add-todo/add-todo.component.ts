import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from 'src/modals/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  todoItemName = '';
  idCounter = 0;

  @Output() addTodo = new EventEmitter<TodoItem>();
  
  onSubmit(){
    this.addTodo.emit({
      id: this.idCounter++,
      title: this.todoItemName,
      isComplete: false,
    });
  }
}
