import { createAction, props } from '@ngrx/store';
import  {Ticket}  from '../models/suptickets';
import {User} from '../models/user'
export const CreateSupTicketAction = 
        createAction('[ Ticket ] Create_Ticket', props<{ payload: {userid:number,ticket:Ticket} }>());

export const CreateSupTicketSuccessAction = 
        createAction('[ Ticket ] CreateSuccess_Ticket', props<{ payload: Ticket }>());

export const CreateSupTicketFailedAction = 
        createAction('[ Ticket ] CreateFailed_Ticket', props<{ payload: string }>());



export const DeleteSupTicketAction = 
        createAction('[ Ticket ] Delete_Ticket', props<{ payload: number }>());

export const LoadSupTicketsAction = 
        createAction('[ Ticket ] Load_Tickets');


export const LoadSupTicketSuccessAction = 
        createAction('[ Ticket ] LoadSuccess_Tickets', props<{ payload: Ticket[] }>());
