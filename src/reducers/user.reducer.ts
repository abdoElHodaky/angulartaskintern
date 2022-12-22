import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/user.actions';
//import { JAVA_ARTICLES, ANGULAR_ARTICLES , MINS_ARTICLES } from '../models/article';
import { UserState } from './app.states';

export const initialState: UserState = { users: []};

const _userReducer = createReducer(
  initialState,
  on(fromActions.DeleteUserAction, (state, {payload}) => {
  const _users=state.users.filter(o=>o.id!=payload);
  return {users:_users}
  }),
  on(fromActions.UpdateUserAction, (state, {payload}) => {
  const _users=state.users
  if(payload[0]==payload[1].id){
  const _user=_users.find(o=>o.id==payload[0])
  state.users[state.users.indexOf(_user)]=payload[1]
  }
  return {users:state.users}

  })
);

export function userReducer(state: any, action: Action) {
  return _userReducer(state, action);
};

export const getUserState = createFeatureSelector<UserState>('userState');

export const getUsers = createSelector(
    getUserState, 
    (state: UserState) => state.users 
); 
