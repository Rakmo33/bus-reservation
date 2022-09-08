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
      alert("Login successfull");
      this.router.navigate(["dashboard"]);
    }else if(!userFound){
      alert("User not found")
      console.log("User not found");
    }else{
      alert("Login failed");
      console.log("login Failed");
    }
  }

  registerUser(fname:any,lname:any,username:any,email:any,password:any){
    const existingUsers = JSON.parse(localStorage.getItem("users")|| "[]");
    existingUsers.push({fname: fname,lname: lname, username: username, email: email,password:password});
    localStorage.setItem("users",JSON.stringify(existingUsers));
    this.router.navigate(["login"]);
  }

  logOutUser(){
    localStorage.setItem("currentUser","");
    this.currentUser = "";
    alert("Logged Out");
  }
}
