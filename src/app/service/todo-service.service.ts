import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  constructor() { }
  todoList: Array<any>=[
    {
      "id": "111",
      "name": "AAAA"
    },
    {
      "id": "222",
      "name": "BBBB"
    },
    {
      "id": "333",
      "name": "NNN"
    }
  ];
  getTodoList(): any[]{
    return this.todoList;
  }

  setTodoList(data): void{
    this.todoList.push(data);
  }
}
