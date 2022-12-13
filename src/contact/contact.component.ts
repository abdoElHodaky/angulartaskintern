import { Component } from "@angular/core";
import { from } from "rxjs";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import { TicketsFacade } from "src/facades/ticket.facade";
import { Ticket } from "src/models/suptickets";
import { User } from "src/models/user";

@Component({
  selector: "<app-contact></app-contact>",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent {
  title = "تواصل معنا لعمل شكوي او دعم فني";
  private ticketid:number=1
  constructor(private ticketfacade:TicketsFacade) {
    this.contactForm.valueChanges.subscribe(e=>{
      this.preview=JSON.stringify(e)
    })
  }
  ngOnInit():void{
    
    this.ticketfacade.tickets$.subscribe(console.log)
  }
  ngOnChanges(){

  }
  contactForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    subject: new FormControl('',[Validators.required]),
    type:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required]),
  });
 
  preview: string = '';
 
  
  save() {
    let formvalue=this.contactForm.value
    let obj=Ticket.fromobj({id:this.ticketid++,...formvalue})
    this.ticketfacade.AddSpTicket(obj)
    this.contactForm.reset()
  }
}
