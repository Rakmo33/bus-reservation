import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register_form:any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.register_form = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl()
    })
  }
  onSubmitRegister(){
    const fname=this.register_form.controls.fname.value;
    const lname=this.register_form.controls.lname.value;
    const username=this.register_form.controls.username.value;

    if(!fname|| !lname || !username){
      return alert("Please enter all required fields");
    }
    const email=this.register_form.controls.email.value;

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()))
        const emailTest = re.test(String(email).toLowerCase())
        if (emailTest != true) {
          alert("please enter valid email")
          return;
        }
    const password=this.register_form.controls.password.value;
    const repassword=this.register_form.controls.repassword.value;
    if(password=="" || repassword=="" || password==null || repassword==null){
      return alert("Password cannot be empty");
    }
    if(password!=repassword){
      return alert("Re-entered password do not match");
    }
    this.userService.registerUser(fname,lname,username,email,password);
  }

}
