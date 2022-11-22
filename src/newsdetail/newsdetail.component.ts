import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable,pipe } from 'rxjs';
import * as articleReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from '../reducers/app.states';
import  {Article}  from '../models/article';
import {filter} from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";
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
  constructor(private store: Store<ArticleState>, private route:ActivatedRoute) {
		this.articles$ = store.select(articleReducer.getArticles);
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
  var emptyArticle= new Article ()
		this.store.dispatch(fromActions.MinsArticlesAction());
    this.articles$.subscribe(e=>{
      this.fetechedArticles=e
    })
    var d=this.fetechedArticles.find(o=>o.id==parseInt(this.paramid))
    if(d == undefined){this.showedArticle=this.fetechedArticles[this.fetechedArticles.length-1]}
    else{this.showedArticle=d}
    



	}
}
