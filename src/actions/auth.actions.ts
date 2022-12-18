import { createAction, props } from '@ngrx/store';
import  {User}  from '../models/user';

export const LoginAction = 
        createAction('[ Auth ] Login_User', props<{ payload: User }>());

export const LoginSuccessAction = 
        createAction('[ Auth ] LoginSuccess_User', props<{ payload: User }>());

export const SignupAction = 
        createAction('[ Auth ] Signup_User', props<{ payload:User  }>());

export const SignupSuccessAction = 
        createAction('[ Auth ] SignupSuccess_User', props<{ payload:User  }>());
