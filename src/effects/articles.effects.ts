import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as fromActions from '../actions/article.actions';
import { ArticlesService } from 'src/services/articles.service';

@Injectable()
export class ArticlesEffects {

  constructor(
    private actions$: Actions,
    private articleserv:ArticlesService
  ) { }

    loadArticles$=createEffect(()=>this.actions$.pipe(
      ofType(fromActions.LoadArticlesAction),
      debounceTime(1000),
    switchMap(()=>
    this.articleserv.getAllArticles().pipe(
        map(data=>fromActions.LoadSuccessArticlesAction({payload:data}))
    )
    )))

} 
