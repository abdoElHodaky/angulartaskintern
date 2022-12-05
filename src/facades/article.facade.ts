import { Store } from '@ngrx/store';
import {Injectable} from "@angular/core";

import * as articleReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from '../reducers/app.states';
import  {Article}  from '../models/article';



@Injectable()
export class CarsFacade {
  /*loaded$ = this.store.select(carsQuery.getIsLoaded);
  allCars$ = this.store.select(carsQuery.getAllCars);
  selectedCar$ = this.store.select(carsQuery.getSelectedCar);
  */
  constructor(private store: Store<ArticleState>) {}

  loadArticles() {
   // this.store.dispatch();
  }
  
}
