import { Component } from "@angular/core";
import { from } from "rxjs";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import { AuthFacade } from "../facades/auth.facade";
import { User } from "../models/user";

@Component({
  selector: "<app-signup></app-signup>",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  title = "تسجيل مستخدم جديد";
  user:User;
  signupForm=new FormGroup({
    userName:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    IdCard:new FormControl("",[Validators.required,Validators.maxLength(14)]),
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });
  constructor(){

  }
  signup(){
    this.user=User.fromobj(this.signupForm.value)
    console.log(this.user)
  }

}
