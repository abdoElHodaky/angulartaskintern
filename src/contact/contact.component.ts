import { Component, SimpleChanges } from "@angular/core";
import { takeUntil,Subject, Observable,pipe,map } from "rxjs";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import { TicketsFacade } from "src/facades/ticket.facade";
import { Ticket } from "src/models/suptickets";
import { User } from "src/models/user";
import { TicketsService } from "src/services/tickets.service";

@Component({
  selector: "<app-contact></app-contact>",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent {
  preview:Ticket[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  title = "تواصل معنا لعمل شكوي او دعم فني";
  private ticketid:number=1
  constructor(private ticketfacade:TicketsFacade) {
  /*  this.contactForm.valueChanges.subscribe(e=>{
      this.preview=JSON.stringify(e)
    })*/
    this.ticketfacade.tickets$.pipe(map(res=>res.slice().reverse())).subscribe(e=>{
      this.preview=e;
    })
   
  }
  ngOnInit():void{
    this.getAllTickets()
    

  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes)

  }
  contactForm = new FormGroup({
    userId: new FormControl('',[Validators.required]),
    subject: new FormControl('',[Validators.required]),
    type:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required]),
  });
 
  
 
  
  save() {
    let formvalue=this.contactForm.value
    let userId=Number(formvalue.userId);
    let ticket={
      type:formvalue.type,
      subject:formvalue.subject,
      description:formvalue.description
    }
    let payload={sticket:ticket,userid:userId}
    this.ticketfacade.AddSpTicket(Ticket.fromobj(ticket),userId)
    this.contactForm.reset()
    this.getAllTickets()
  }
   getAllTickets(){
    this.ticketfacade.getAllspTickets()
   }
}
