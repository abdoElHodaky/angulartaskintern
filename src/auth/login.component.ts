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

}
