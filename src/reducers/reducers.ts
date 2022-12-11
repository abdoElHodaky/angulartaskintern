import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import { articleReducer } from './article.reducer';
import { userReducer} from "./user.reducer";
import { courseReducer } from './course.reducer';
import {ticketReducer} from "./tickets.reducer"
export const reducers: ActionReducerMap<AppState> = {
  articleState: articleReducer,
  userState: userReducer,
  courseState:courseReducer,
  ticketState: ticketReducer
}; 
