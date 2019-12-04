import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
constructor(private message: string) {
}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeWelcomeDataService() {
    return this.http.get<HelloWorldBean>('http://localhost:8085/hello-world-bean');
    // console.log(this.http.get('http://localhost:8085/hello-world-bean'));
    // console.log("Welcome data service called");

  }
  executeWelcomeDataServiceWithParams(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8085/hello-world-bean/${name}`);
    // console.log(this.http.get('http://localhost:8085/hello-world-bean'));
    // console.log("Welcome data service called");
  }

}
