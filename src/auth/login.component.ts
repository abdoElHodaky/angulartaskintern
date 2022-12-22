import { Component } from "@angular/core";
import { from } from "rxjs";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import { AuthFacade } from "../facades/auth.facade";
import { User } from "../models/user";

@Component({
  selector: "<app-login></app-login>",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  title = "تسجيل دخول";
  user:User;
  loginForm=new FormGroup({
    userName:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    IdCard:new FormControl("",[Validators.required,Validators.maxLength(14)])
  });
  constructor(){
  }
  login(){
    this.user=User.fromobj(this.loginForm.value)
    this.loginForm.reset();
    console.log(this.user)
  }
}
