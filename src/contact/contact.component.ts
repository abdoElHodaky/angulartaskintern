import { Component, SimpleChanges } from "@angular/core";
import { from } from "rxjs";
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
  title = "تواصل معنا لعمل شكوي او دعم فني";
  private ticketid:number=1
  constructor(private ticketfacade:TicketsFacade,private ticketserv:TicketsService) {
  /*  this.contactForm.valueChanges.subscribe(e=>{
      this.preview=JSON.stringify(e)
    })*/
  }
  ngOnInit():void{
    console.log(Ticket.fromobj({}))
    this.ticketfacade.getAllspTickets()
    this.ticketfacade.tickets$.subscribe(e=>{
     console.log(e)
    })
    

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
 
  preview:Array<Ticket>;
 
  
  save() {
    let formvalue=this.contactForm.value
    let userId=Number(formvalue.userId);
    let ticket={
      type:formvalue.type,
      subject:formvalue.subject,
      decription:formvalue.description
    }
    let payload={sticket:ticket,userid:userId}
    this.ticketfacade.AddSpTicket(Ticket.fromobj(ticket),userId)
    this.contactForm.reset()
  }
}
