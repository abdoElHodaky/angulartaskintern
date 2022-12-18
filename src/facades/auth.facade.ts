import { Store } from '@ngrx/store';
import {Injectable} from "@angular/core";

import * as authReducer from '../reducers/auth.reducer';
import * as fromActions from '../actions/auth.actions';
import { AuthState } from '../reducers/app.states';
import  {User}  from '../models/user';



@Injectable({
  providedIn:"root"
})
export class AuthFacade {
  //loaded$ = this.store.select(carsQuery.getIsLoaded);
  user$ = this.store.select(authReducer.getUser);
  message$=this.store.select(authReducer.getMessage)
  //selectedCar$ = this.store.select(carsQuery.getSelectedCar);
 
  constructor(private store: Store<AuthState>) {}
 // FromJson(param){Ticket.fromJson(param)}
  
    LoginUser(param:User):void {
        this.store.dispatch(fromActions.LoginAction({payload:param}));
         
       }
    SignUpUser(param:User){
        this.store.dispatch(fromActions.SignupAction({payload:param}))
    }   
      
}
