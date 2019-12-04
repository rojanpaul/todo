import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo;
  id: number;

  constructor(
    private todoServ: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // Below call is asynchronous. So the page loads before data will be available. To avoid this a empty object is to be created
    // and assigned to todo object
    this.todo = new Todo(1, '', false, new Date());
    this.todoServ.getTodoById('rojan', this.id).subscribe(
      response => {
        console.log('response by calling todo service');
        console.log(response);
        this.todo = response;
      }
    );
  }

  saveTodo(todo: Todo) {
    console.log(`save method called`);
    if (todo.id !== -1) {
      this.todoServ.updateTodo('rojan', todo).subscribe(
        resp => {
          console.log('update method called');
          console.log(resp);
        }
      );
    } else {
      this.todoServ.saveTodo('username', todo).subscribe(
        res => {
          console.log('save method called');
          console.log(res);
        }
      );
    }

  }
}
