import { Component } from "@angular/core";
import { takeUntil,Subject, map } from "rxjs";
import { fadeAnimation } from "./routeTransition";
import {User} from "../models/user";
import { ArticlesFacade } from "src/facades/article.facade";
import { ArticlesService } from "src/services/articles.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations:[fadeAnimation]
})
export class AppComponent {
  title = "CodeSandbox";
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private facade:ArticlesFacade,private servs:ArticlesService){

  }
  ngOnInit(){
   this.facade.loadArticles();
   this.facade.articles$.pipe(takeUntil(this.destroy$)).subscribe(e=>{
    console.log(e)
   })
  }
}
