import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: string= localStorage.getItem("currentUser") || "";
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  logOut(){
    alert("Logout");
    localStorage.setItem("currentUser","");
    this.userService.logOutUser();
    
  }

  

}
