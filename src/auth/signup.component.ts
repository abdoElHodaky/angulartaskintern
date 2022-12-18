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

}
