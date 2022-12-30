import { Component } from "@angular/core";
import { takeUntil,Subject } from "rxjs";
import { UsersFacade } from "src/facades/user.facade";
import { AuthFacade } from "src/facades/auth.facade";
import { AuthService } from "src/services/auth.service";
import { fadeAnimation } from "./routeTransition";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations:[fadeAnimation]
})
export class AppComponent {
  title = "CodeSandbox";
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private facade:AuthFacade,private servs:AuthService){

  }
  ngOnInit(){
    this.facade.LoginUser("abdo_test21","test234567")
    this.facade.user$.subscribe(e=>console.log(e))
   
  }
}
