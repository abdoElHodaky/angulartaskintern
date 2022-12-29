import { Store } from '@ngrx/store';
import {Injectable} from "@angular/core";

import * as userReducer from '../reducers/user.reducer';
import * as fromActions from '../actions/user.actions';
import { UserState } from '../reducers/app.states';
import  {User}  from '../models/user';



@Injectable({
  providedIn:"root"
})
export class UsersFacade {
  //loaded$ = this.store.select(carsQuery.getIsLoaded);
  users$ = this.store.select(userReducer.getUsers);
  //selectedCar$ = this.store.select(carsQuery.getSelectedCar);
 
  constructor(private store: Store<UserState>) {}
 // FromJson(param){Ticket.fromJson(param)}
  
    UpdateUser(param:[number,User]):void {
        this.store.dispatch(fromActions.UpdateUserAction({payload:param}));
         
       }
    DeleteUser(param:number){
        this.store.dispatch(fromActions.DeleteUserAction({payload:param}))
    } 
    getAllUsers(){
      this.store.dispatch(fromActions.LoadAllUserAction())
    }
    getOneUser(param:number){
      this.store.dispatch(fromActions.LoadUserAction({payload:param}))
    }  
      
}
