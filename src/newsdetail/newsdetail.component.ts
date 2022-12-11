import { Component } from "@angular/core";

import { Observable,pipe } from 'rxjs';
import  {Article}  from '../models/article';
import {filter} from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";
import { ArticlesFacade } from "src/facades/article.facade";
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
  constructor(private articlefacade:ArticlesFacade, private route:ActivatedRoute) {
		this.articles$ = this.articlefacade.articles$;
    this.paramid=this.route.snapshot.params['id']
    
    
  }
  
	/*showJavaArticles() {
		this.store.dispatch(fromActions.JavaArticlesAction());
	}
	showAngularArticles() {
		this.store.dispatch(fromActions.AngularArticlesAction());
	}
	/showFavoriteArticles() {
		this.store.dispatch(fromActions.FavoriteArticlesAction({ payload: FAVORITE_ARTICLES }));
	}*/
  ngOnInit(){
    this.showMinsArticles()
  }
  showMinsArticles() {
		this.articlefacade.showMinsArticles();
    this.articles$.subscribe(e=>{
      this.fetechedArticles=e
    })
    /*this.fetechedArticles=this.fetechedArticles.sort((a1,a2)=>{
      return (a1.id-a2.id==1)?1:-1
    });*/
    var d=this.fetechedArticles.find(o=>o.id==parseInt(this.paramid))
    if(d == undefined){this.showedArticle=this.fetechedArticles.slice().last()}
    else{this.showedArticle=d}
    



	}
}
