import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser:string = "";

  constructor(private router: Router) { }
  checkCredentials(username:any,password:any){
    const users = JSON.parse(localStorage.getItem("users")||"[]");
    // console.log(users);
    const userFound:User = users.find((u:any)=>{return u.username==username});
    if(userFound && userFound.password==password){
      localStorage.setItem("currentUser",userFound.username);
      console.log(localStorage.getItem("currentUser"));
      this.router.navigate(["dashboard"]);
    }else if(!userFound){
      console.log("User not found");
    }else{
      console.log("login Failed");
    }
  }

  registerUser(fname:any,lname:any,username:any,email:any,password:any){
    localStorage.setItem("users",JSON.stringify([{fname: fname,lname: lname, username: username, email: email,password:password}]));
  }

  logOutUser(){
    localStorage.setItem("currentUser","");
    this.currentUser = "";
  }
}
