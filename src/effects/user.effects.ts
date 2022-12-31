import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as fromActions from '../actions/user.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private Usererv:UsersService
  ) { }

    loadUsers$=createEffect(()=>
    this.actions$.pipe(
      ofType(fromActions.LoadAllUserAction),
      debounceTime(100),
      switchMap(()=>
      this.Usererv.getAllUsers().pipe(
        map(res=>fromActions.LoadAllUserSuccessAction({payload:res}))
        )
      )
    ));

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
