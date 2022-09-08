import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: string= localStorage.getItem("currentUser") || "";
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.setItem("currentUser","");
    this.userService.logOutUser();
    
  }

  

}
