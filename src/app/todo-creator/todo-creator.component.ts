import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../todo'

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent implements OnInit {
  @Input() todoList: Todo []
  name: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  onAddTodo():void{
    if(this.name && this.description) {
      this.todoList.push({
        name: this.name,
        description: this.description
      })
      this.name = this.description = ''
    }
  }

}
