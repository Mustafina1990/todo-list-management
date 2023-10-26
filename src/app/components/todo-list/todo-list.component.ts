import { Component, Input, OnChanges } from '@angular/core';
import { TodoItem } from 'src/modals/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnChanges {
  @Input() todoList: TodoItem[] = [];
  upcomingTodos: TodoItem[] = [];
  completedTodos: TodoItem[] = [];

  ngOnChanges(): void {
    this.handleTodoList();
  }
  
  onToggleComplete(item: TodoItem){
    item.isComplete = !item.isComplete;
    this.handleTodoList();
  }

  private handleTodoList(){
this.upcomingTodos = this.todoList.filter(item => !item.isComplete);
this.completedTodos = this.todoList.filter(item => item.isComplete);
  }
}
