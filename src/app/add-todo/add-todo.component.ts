import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../service/todo-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(data: NgForm){
    this.todoService.setTodoList(data.value);
    this.router.navigate(["/"]);
  }
}
