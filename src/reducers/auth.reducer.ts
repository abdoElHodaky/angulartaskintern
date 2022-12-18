import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import { User } from '../models/user';
import * as fromActions from '../actions/auth.actions';
//import { JAVA_ARTICLES, ANGULAR_ARTICLES , MINS_ARTICLES } from '../models/article';
import { AuthState } from './app.states';

export const initialState: AuthState = {user:<User>{},errorMessage:"" };

const _authReducer = createReducer(
  initialState,
  on(fromActions.LoginAction, (state, {payload}) => {
    return {...state}
  }),
  on(fromActions.LoginSuccessAction, (state, {payload}) => {
    return {...state,user:User.authenticatedUser(payload)}
  }),
  on(fromActions.SignupAction, (state, {payload}) => {
    return {...state}
  }),
  on(fromActions.SignupSuccessAction, (state, {payload}) => {
    return {...state,user:User.authenticatedUser(payload)}
  }),
  on(fromActions.SignupFailureAction, (state, {payload}) => {
    return {...state,errorMessage:payload}
  }),
  
  on(fromActions.LoginFailureAction, (state, {payload}) => {
    return {...state,errorMessage:payload}
  })
);

export function authReducer(state: any, action: Action) {
  return _authReducer(state, action);
};

export const getAuthState = createFeatureSelector<AuthState>('authState');

export const getUser = createSelector(
    getAuthState, 
    (state: AuthState) => state.user 
);
export const getMessage = createSelector(
  getAuthState, 
  (state: AuthState) => state.errorMessage 
); 
