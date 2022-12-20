import { Component } from "@angular/core";
import { fadeAnimation } from "./routeTransition";
declare var $:any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations:[fadeAnimation]
})
export class AppComponent {
  title = "CodeSandbox";
  ngAfterViewInit(){
    

  }
}
