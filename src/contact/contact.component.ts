import { Component } from "@angular/core";
import { from } from "rxjs";
import {FormGroup,FormControl,Validators} from "@angular/forms";
import { TicketsFacade } from "src/facades/ticket.facade";


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
 
  contactForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    subjectName: new FormControl('',[Validators.required]),
    type:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required]),
  });
 
  preview: string = '';
 
  ngOnInit(): void {}
 
  save() {
    let formvalue=this.contactForm.value
    console.log(this.ticketfacade.FromJson({
     id:this.ticketid++,
     ...formvalue
    }))
    this.contactForm.reset()
  }
}
