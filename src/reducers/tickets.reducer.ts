import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/tickets.actions';
import { SpTicketState } from './app.states';

export const initialState: SpTicketState = { tickets: []};

const _ticketReducer=createReducer(
  initialState,
  on(fromActions.CreateSupTicketAction, (state, {payload}) => {
  state.tickets.push(payload);
  return {...state}
  }),
  on(fromActions.DeleteSupTicketAction, (state, {payload}) => {
  const _tickets=state.tickets.filter(o=>o.id!=payload);
  state.tickets=_tickets
  return {...state}
  }),
  
);

export function ticketReducer(state: any, action: Action) {
  return _ticketReducer(state, action);
};

export const getSpTicketState = createFeatureSelector<SpTicketState>('SpTicketState');

export const getTickets = createSelector(
    getSpTicketState, 
    (state: SpTicketState) => state.tickets
); 
