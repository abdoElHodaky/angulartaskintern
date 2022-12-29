import { createAction, props } from '@ngrx/store';
import  {User}  from '../models/user';

export const LoginAction = 
        createAction('[ Auth ] Login_User', props<{ payload: {useranme:string,passwordHash:string} }>());

export const LoginSuccessAction = 
        createAction('[ Auth ] LoginSuccess_User', props<{ payload: User }>());

export const SignupAction = 
        createAction('[ Auth ] Signup_User', props<{ payload:User  }>());

export const SignupSuccessAction = 
        createAction('[ Auth ] SignupSuccess_User', props<{ payload:User  }>());

export const LoginFailureAction = 
        createAction('[ Auth ] LoginFailure_User', props<{ payload: any }>());

export const SignupFailureAction = 
        createAction('[ Auth ] SignUpFailure_User', props<{ payload: any }>());
