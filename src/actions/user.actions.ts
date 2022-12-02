import { createAction, props } from '@ngrx/store';
import  {User}  from '../models/user';

export const AddUserAction = 
        createAction('[ User ] Add_User', props<{ payload: User }>());

export const DeleteArticleAction = 
        createAction('[ User ] Delete_User', props<{ payload: number }>());

export const UpdateArticleAction = 
        createAction('[ User ] Update_User', props<{ payload:[Number, User]  }>());

