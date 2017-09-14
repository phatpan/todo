import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoList: any=[];
  constructor(private todoService: TodoService) { }
  
  ngOnInit() {
   this.todoList = this.todoService.getTodoList();
  }

}
