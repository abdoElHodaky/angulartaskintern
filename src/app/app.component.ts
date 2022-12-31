import { Component } from "@angular/core";
import { takeUntil,Subject, map } from "rxjs";
import { UsersFacade } from "../facades/user.facade";
import { AuthFacade } from "../facades/auth.facade";
import { AuthService } from "../services/auth.service";
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

  constructor(private facade:UsersFacade,private servs:AuthService){

  }
  ngOnInit(){
    let user;
    this.facade.getOneUser(5);
    this.facade.users$.pipe(map(res=>res.at(0))).subscribe(({tickets})=>{
     console.log(tickets)
     })
   
  }
}
