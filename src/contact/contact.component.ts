import { Component } from "@angular/core";
import { from } from "rxjs";
import {FormGroup,FormControl,Validators} from "@angular/forms";

@Component({
  selector: "<app-contact></app-contact>",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent {
  title = "تواصل معنا لعمل شكوي او دعم فني";
  constructor() {
    this.contactForm.valueChanges.subscribe(e=>{
      this.preview=JSON.stringify(e)
    })
  }
 
  contactForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    subjectName: new FormControl('',[Validators.required]),
    description:new FormControl("",[Validators.required]),
  });
 
  preview: string = '';
 
  ngOnInit(): void {}
 
  save() {
    console.log(this.contactForm.value);
  }
}
