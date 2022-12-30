import { Component } from "@angular/core";
import { takeUntil,Subject } from "rxjs";
import { TicketsFacade } from "src/facades/ticket.facade";
import { Ticket } from "src/models/suptickets";
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

  constructor(private facade:TicketsFacade){

  }
  ngOnInit(){
    
    /*this.facade.AddSpTicket(Ticket.fromobj(
      {
        type:"inquiry",
        subject:"RePly",
        description:"im fine, thanks"
      }
    ),10);
    this.facade.tickets$.pipe(takeUntil(this.destroy$)).subscribe(e=>{
      console.log(e)
    })*/
  }
}
