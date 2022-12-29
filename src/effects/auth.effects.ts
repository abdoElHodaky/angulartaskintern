import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as fromActions from '../actions/auth.actions';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class TicketEffects {

  constructor(
    private actions$: Actions,
    private authserv:AuthService
  ) { }

    login$=createEffect(()=>
        this.actions$.pipe(ofType(fromActions.LoginAction),
        map(action=>action.payload),
        mergeMap(payload=>
            this.authserv.login(
              payload.useranme,payload.passwordHash
            ).pipe(
                map((res)=>fromActions.LoginSuccessAction({payload:res})),
                catchError(err=>of(fromActions.LoginFailureAction({payload:err})))
            )
        )
    ));

    register$=createEffect(()=>
        this.actions$.pipe(ofType(fromActions.SignupAction),
        map(action=>action.payload),
        mergeMap(payload=>
            this.authserv.signup(
              payload
            ).pipe(
                map((res)=>fromActions.SignupSuccessAction({payload:res})),
                catchError(err=>of(fromActions.SignupFailureAction({payload:err})))
            )
        )
    ));            
  
} 
