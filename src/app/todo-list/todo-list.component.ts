import { Component, OnInit } from '@angular/core';
import {Todo, TODOS} from '../todo'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = TODOS;
  currentTodo: Todo;

  ngOnInit() {
  }

  onShowDetails(index: number): void {
    console.log(index)
    this.currentTodo = this.todoList[index];
  }

}
