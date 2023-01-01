import { Component } from "@angular/core";

import { Observable,pipe,Subject } from 'rxjs';
import  {Article}  from '../models/article';
import {takeUntil} from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";
import { ArticlesFacade } from "../facades/article.facade";
@Component({
  selector: "<app-newsdetail></app-newsdetail>",
  templateUrl: "./newsdetail.component.html",
  styleUrls: ["./newsdetail.component.css"]
})
export class NewsDetailComponent {
  title = "newsdetail";
  articles$: Observable<Article[]>;
  fetechedArticles:Article[];
  showedArticle:Article;
	paramid=''
  isActive=false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private articlefacade:ArticlesFacade, private route:ActivatedRoute) {
    this.paramid=this.route.snapshot.params['id']
    this.isActive=(this.route.snapshot.parent.url.at(0).path=="news")?true:false
    this.articles$ = this.articlefacade.articles$;
  }
  ngOnInit(){
    if(this.fetechedArticles==undefined){
      this.articlefacade.loadArticles()
      this.articles$.pipe(takeUntil(this.destroy$)).subscribe(e=>{
        this.fetechedArticles=e
        this.showArticle()  
      })
    }
    else{this.showArticle()}
    
    
    
  }
  showArticle() {
    
    var d=this.fetechedArticles.find(o=>o.id==parseInt(this.paramid))
    if(d == undefined){this.showedArticle=this.fetechedArticles[this.fetechedArticles.length-1]}
    else{this.showedArticle=d}
    console.log(this.showedArticle)
    



	}
}
