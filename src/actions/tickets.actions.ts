import { createAction, props } from '@ngrx/store';
import  {Ticket}  from '../models/sptickets';
import {User} from '../models/user'
export const CreateSupTicketAction = 
        createAction('[ Ticket ] Create_Ticket', props<{ payload: Ticket }>());

export const DeleteCourseAction = 
        createAction('[ Ticket ] Delete_Ticket', props<{ payload: number }>());
