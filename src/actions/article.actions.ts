import { createAction, props } from '@ngrx/store';
import { Article } from 'src/models/article';

export const JavaArticlesAction = createAction('[ Article ] Java');
export const AngularArticlesAction = createAction('[ Article ] Angular');
export const FavoriteArticlesAction = 
        createAction('[ Article ] Favorite_Articles', props<{ payload: Article[] }>()); 
export const MinsArticlesAction = 
        createAction('[ Article ] Mins_Articles'); 
