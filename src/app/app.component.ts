import { Component } from '@angular/core';
import { TodoItem } from 'src/modals/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList: TodoItem[] = [];

  constructor(){
  }

  onAddTodo(item: TodoItem) {
    this.todoList = [...this.todoList, item];

  }
}
