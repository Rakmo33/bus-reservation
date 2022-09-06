import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login_form:any;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.login_form = new FormGroup({
      email: new FormControl(),
      pass: new FormControl()
    
    })
  }
onSubmit(){
  const email=this.login_form.controls.email.value;
  const pass= this.login_form.controls.pass.value;
  this.checkCredentials(email,pass);
}
checkCredentials(email:any,pass:string){
  if(email=="abc@gmail.com" && pass=="1234"){
    console.log("Login Successfull")
  }else{
    console.log("Login failed")

  }
}


  

}
