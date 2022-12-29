import { Component } from "@angular/core";
import { takeUntil,Subject } from "rxjs";
import { UsersFacade } from "src/facades/user.facade";
import { fadeAnimation } from "./routeTransition";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations:[fadeAnimation]
})
export class AppComponent {
  title = "CodeSandbox";
  //destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private userfacade:UsersFacade){

  }
  ngOnInit(){
    
    /*this.userfacade.getAllUsers();
    this.userfacade.users$.pipe(takeUntil(this.destroy$)).subscribe(e=>{
      console.log(e)
    })*/
  }
}
