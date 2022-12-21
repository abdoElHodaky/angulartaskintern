import { createAction, props } from '@ngrx/store';
import  {Ticket}  from '../models/suptickets';
import {User} from '../models/user'
export const CreateSupTicketAction = 
        createAction('[ Ticket ] Create_Ticket', props<{ payload: Ticket }>());

export const CreateSupTicketSuccessAction = 
        createAction('[ Ticket ] CreateSuccess_Ticket', props<{ payload: Ticket }>());

export const DeleteSupTicketAction = 
        createAction('[ Ticket ] Delete_Ticket', props<{ payload: number }>());
