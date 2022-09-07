import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login_form:any;
  constructor(private userService: UserService) { 
    
  }

  ngOnInit(): void {
    this.login_form = new FormGroup({
      username: new FormControl(),
      pass: new FormControl()
    
    })
  }
onSubmitLogin(){
  const username=this.login_form.controls.username.value;
  const pass= this.login_form.controls.pass.value;
  this.userService.checkCredentials(username,pass);
}
// checkCredentials(email:any,pass:string){
//   // if(email=="abc@gmail.com" && pass=="1234"){
//   //   // console.log("Login Successfull")
//   // }else{
//   //   // console.log("Login failed")

//   // }

// }


  

}
