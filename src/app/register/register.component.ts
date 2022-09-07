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
    const email=this.register_form.controls.email.value;
    const password=this.register_form.controls.password.value;
    const repassword=this.register_form.controls.repassword.value;
    this.userService.registerUser(fname,lname,username,email,password);
  }

}
