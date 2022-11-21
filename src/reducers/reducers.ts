import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import { articleReducer } from './article.reducer';

export const reducers: ActionReducerMap<AppState> = {
  articleState: articleReducer
}; 