import { createAction, props } from '@ngrx/store';
import  {User}  from '../models/user';

export const AddUserAction = 
        createAction('[ User ] Add_User', props<{ payload: User }>());

export const DeleteUserAction = 
        createAction('[ User ] Delete_User', props<{ payload: number }>());

export const UpdateUserAction = 
        createAction('[ User ] Update_User', props<{ payload:[Number, User]  }>());

export const LoadUserAction = 
        createAction('[ User ] Load_User', props<{ payload: number }>());

export const LoadUserSuccessAction = 
        createAction('[ User ] LoadSuccess_User', props<{ payload: User }>());

export const LoadAllUserAction = 
        createAction('[ User ] Load_Users');

export const LoadAllUserSuccessAction = 
        createAction('[ User ] LoadSuccess_Users', props<{ payload: User[] }>());
