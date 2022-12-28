import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as fromActions from '../actions/tickets.actions';
import { TicketsService } from '../services/tickets.service';

@Injectable()
export class TicketEffects {

  constructor(
    private actions$: Actions,
    private ticketserv:TicketsService
  ) { }

    loadTickets$=createEffect(()=>this.actions$.pipe(ofType(fromActions.LoadSupTicketsAction),
    switchMap(()=>
    this.ticketserv.getAlltickets().pipe(
        map(data=>fromActions.LoadSupTicketSuccessAction({payload:data}))
    )
    )))
    createTicket$=createEffect(()=>
        this.actions$.pipe(ofType(fromActions.CreateSupTicketAction),
        map(action=>action.payload),
        mergeMap(payload=>
            this.ticketserv.createsupTicket(
              payload.ticket,payload.userid
            ).pipe(
                map((res)=>fromActions.CreateSupTicketSuccessAction({payload:res})),
                catchError(err=>of(fromActions.CreateSupTicketFailedAction({payload:err})))
            )
        )
    ));

  /*createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.CreateAction),
    map(action => action.payload),
    mergeMap(article =>
      this.articleService.createArticle(article).pipe(
        map(res => fromActions.CreateSuccessAction({payload: res})),
        catchError(error => of(fromActions.CreateFailureAction({payload: error})))
      )
    )*/


  /*searchArticleById$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.GetByIdAction),
    debounceTime(500),
    map(action => action.payload),
    switchMap(id =>
      this.articleService.getArticleById(id).pipe(
        map(res => fromActions.GetByIdSuccessAction({payload: res}))
      )
    )
  ));*/

} 
