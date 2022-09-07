import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'bus-reservation';
  constructor(private userService:UserService){
  }

  checkCurrentUser(){
    return localStorage.getItem("currentUser")!="";
  }

}
