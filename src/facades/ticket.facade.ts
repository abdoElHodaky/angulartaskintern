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
  message$= this.store.select(ticketReducer.getMessage)
  //selectedCar$ = this.store.select(carsQuery.getSelectedCar);
 
  constructor(private store: Store<SpTicketState>) {}
 // FromJson(param){Ticket.fromJson(param)}
  
    AddSpTicket(param1:Ticket,param2:number):void {
      let payload={
        userid:param2,
        ticket:param1
      }
        this.store.dispatch(fromActions.CreateSupTicketAction({payload:payload}));
         
       }
    /*DeleteSpTicket(param:number):void {
        this.store.dispatch(fromActions.DeleteSupTicketAction({payload:param}));

       }*/
    getAllspTickets(){
      this.store.dispatch(fromActions.LoadSupTicketsAction());
    }

      
}
