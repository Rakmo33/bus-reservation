import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  checkCredentials(username:any,password:any){
    const users = JSON.parse(localStorage.getItem("users")||"[]");
    // console.log(users);
    const userFound:User = users.find((u:any)=>{return u.username==username});
    if(userFound && userFound.password==password){
      localStorage.setItem("currentUser",userFound.username);
      console.log(localStorage.getItem("currentUser"));
    }else if(!userFound){
      console.log("User not found");
    }else{
      console.log("login Failed");
    }
  }
}
