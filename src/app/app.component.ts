import { Component } from "@angular/core";
import { takeUntil,Subject, map } from "rxjs";
import { fadeAnimation } from "./routeTransition";
import {User} from "../models/user";
import { ArticlesFacade } from "src/facades/article.facade";
import { ArticlesService } from "src/services/articles.service";
import { TicketsFacade } from "src/facades/ticket.facade";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations:[fadeAnimation]
})
export class AppComponent {
  title = "CodeSandbox";
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private articlefacade:ArticlesFacade,
    private ticketfacde:TicketsFacade){}
  ngOnInit(){
   this.articlefacade.loadArticles();
   this.ticketfacde.getAllspTickets()
  }
}
