import { Store } from '@ngrx/store';
import {Injectable} from "@angular/core";

import * as articleReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from '../reducers/app.states';
import  {Article}  from '../models/article';



@Injectable({
  providedIn:"root"
})
export class ArticlesFacade {
  //loaded$ = this.store.select(carsQuery.getIsLoaded);
  articles$ = this.store.select(articleReducer.getArticles);
  //selectedCar$ = this.store.select(carsQuery.getSelectedCar);
 
  constructor(private store: Store<ArticleState>) {}

  AddArticle(param:Article):void {
        this.store.dispatch(fromActions.AddArticleAction({payload:param}));
         
       }
    DeleteArticle(param:number):void {
        this.store.dispatch(fromActions.DeleteArticleAction({payload:param}));
        //this.articles$.subscribe(console.log)
        //this.store.select(articleReducer.getArticles).subscribe(console.log)  
        

       }

    showMinsArticles() {
        this.store.dispatch(fromActions.MinsArticlesAction());
      }
    loadArticles(){
      this.store.dispatch(fromActions.LoadArticlesAction());
    }
  
}
