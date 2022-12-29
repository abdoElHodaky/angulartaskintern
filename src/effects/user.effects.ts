import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as fromActions from '../actions/user.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class TicketEffects {

  constructor(
    private actions$: Actions,
    private Usererv:UsersService
  ) { }

    /*loadUsers$=createEffect(()=>this.actions$.pipe(ofType(fromActions.LoadSupUserAction),
    switchMap(()=>
    this.Usererv.getAllUser().pipe(
        map(data=>fromActions.LoadSupUseruccessAction({payload:data}))
    )
    )));*/
  loadUser$=createEffect(()=>
        this.actions$.pipe(
            ofType(fromActions.LoadUserAction),
            debounceTime(1000),
            map(action=>action.payload),
            switchMap(payload=>
                this.Usererv.getOneUser(payload).pipe(
                    map(res=>fromActions.LoadUserSuccessAction({payload:res}))
                )    
            )
        )
  )

} 
