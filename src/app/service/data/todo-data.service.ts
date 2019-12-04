import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8085/users/${username}/todos`);
  }

  getTodoById(username, id) {
    return this.http.get<Todo>(`http://localhost:8085/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8085/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, todo: Todo) {
    return this.http.put(`http://localhost:8085/users/${username}/todo`, todo);
  }

  saveTodo(username: string, todo: Todo) {
    return this.http.post(`http://localhost:8085/users/${username}/todo`, todo);
  }
}
