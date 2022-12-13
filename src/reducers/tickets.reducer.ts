import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import { Ticket } from 'src/models/suptickets';
//import { Ticket } from 'src/models/suptickets';
import * as fromActions from '../actions/tickets.actions';
import { SpTicketState } from './app.states';

export const initialState: SpTicketState = { tickets:[]};
let tickets:Array<Ticket>=[];
const _ticketReducer=createReducer(
  initialState,
  on(fromActions.CreateSupTicketAction, (state, {payload}) => {
    tickets.push(payload)
    return {...state,tickets:[...tickets]}
  }),
  on(fromActions.DeleteSupTicketAction, (state, {payload}) => {
  const _tickets=state.tickets.filter(o=>o.id!=payload);
  return {tickets:_tickets}
  }),
  
);

export function ticketReducer(state: any, action: Action) {
  return _ticketReducer(state, action);
};

export const getSpTicketState = createFeatureSelector<SpTicketState>('ticketState');

export const getTickets = createSelector(
    getSpTicketState, 
    (state: SpTicketState) => state.tickets
);
export const _getTickets = createSelector(
  getSpTicketState, 
  (state: SpTicketState) => tickets
); 
