import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  message: string;
  todos = [
    new Todo(1, 'Learn Spring Boot', false, new Date()),
    new Todo(2, 'Learn Angular', false, new Date()),
    new Todo(3, 'Learn Cloud', false, new Date()),
    new Todo(4, 'Learn SQL', false, new Date()),
  ];
  // todo = {
  //   id : 1,
  //   description : 'Learn Angular'
  // };
  constructor(
    private todoSvc: TodoDataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getTodoDataList();
  }

  getTodoDataList() {
    this.todoSvc.getAllTodos('rojan').subscribe(
      response => this.handleTodoListResponse(response)
    );
  }

  handleTodoListResponse(response): void {
    console.log(response);
    this.todos = response;
    // console.log(response.);
  }

  deleteTodo(id) {
    console.log(`delete method is called ${id}`);
    this.todoSvc.deleteTodo('rojan', id).subscribe(
      response => {
        this.handleDeleteResponse(response, id);
        this.getTodoDataList();
      }
    );
  }

  private handleDeleteResponse(response, id) {
    console.log(`successfully deleted`);
    this.message = `successfully deleted todo with id ${id}`;
  }

  updateTodo(todo: Todo) {
    console.log(`update method called with id : ${todo.id}`);
    this.router.navigate(['todos', todo.id]);
  }
}
