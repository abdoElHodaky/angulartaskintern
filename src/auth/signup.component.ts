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
  userid:number=1
  user:User;
  signupForm=new FormGroup({
    userName:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    IdCard:new FormControl("",[Validators.required,Validators.maxLength(14),Validators.pattern("^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$")]),
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });
  constructor(){

  }
  signup(){
    this.user=User.fromobj({id:this.userid++,...this.signupForm.value})
    this.signupForm.reset();
    console.log(this.user)
  }

}
