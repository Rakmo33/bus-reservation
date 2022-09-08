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
    if(localStorage.getItem("currentUser") && localStorage.getItem("currentUser")!=""){
      return true;
    }
    return false;
  }

  checkUrl(){
   if(location.pathname=="/register" || location.pathname == "/login" || location.pathname == "/"){
    localStorage.setItem("currentUser","")
    return false;
   };
   return true;
   
  }

}
