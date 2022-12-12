import { Store } from '@ngrx/store';
import {Injectable} from "@angular/core";

import * as ticketReducer from '../reducers/tickets.reducer';
import * as fromActions from '../actions/tickets.actions';
import { SpTicketState } from '../reducers/app.states';
import  {Ticket}  from '../models/suptickets';



@Injectable({
  providedIn:"root"
})
export class TicketsFacade {
  //loaded$ = this.store.select(carsQuery.getIsLoaded);
  tickets$ = this.store.select(ticketReducer.getTickets);
  //selectedCar$ = this.store.select(carsQuery.getSelectedCar);
 
  constructor(private store: Store<SpTicketState>) {}

  AddSpTicket(param:Ticket):void {
        this.store.dispatch(fromActions.CreateSupTicketAction({payload:param}));
         
       }
    DeleteSpTicket(param:number):void {
        this.store.dispatch(fromActions.DeleteSupTicketAction({payload:param}));

       }

      
}
