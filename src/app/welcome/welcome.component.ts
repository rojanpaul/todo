import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome message';
  welcomeMessageSvc = '';
  name = '';
  constructor(private route: ActivatedRoute,
              private welService: WelcomeDataService,
              private todosvc: TodoDataService) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params.name;
    // console.log(this.route.snapshot.params['name']);
  }

  callWelomeService() {
    // this.welService.executeWelcomeDataService().subscribe(
    //     response => this.handleWelcomeResponse(response),
    //     error => this.handleErrorMessage(error)
    // );

    this.welService.executeWelcomeDataServiceWithParams(this.name).subscribe(
      response => this.handleWelcomeResponse(response),
      error => this.handleErrorMessage(error)
  );
    // this.welService.executeWelcomeDataService().subscribe();
    // console.log("after subscribe method is called");
  }

  handleWelcomeResponse(response) {
    console.log(response.message);
    this.welcomeMessageSvc = response.message;
  }

  handleErrorMessage(errorMsg) {
    // console.log(errorMsg);
    // console.log(errorMsg.error);
    console.log(errorMsg.error.message);
    this.welcomeMessageSvc = errorMsg.error.message;
  }
}
