import { createAction, props } from '@ngrx/store';
import  {Article}  from '../models/article';

export const JavaArticlesAction = createAction('[ Article ] Java');
export const AngularArticlesAction = createAction('[ Article ] Angular');
export const FavoriteArticlesAction = 
        createAction('[ Article ] Favorite_Articles', props<{ payload: Article[] }>()); 

export const AddArticleAction = 
        createAction('[ Article ] Add_Article', props<{ payload: Article }>());

export const DeleteArticleAction = 
        createAction('[ Article ] Delete_Article', props<{ payload: number }>());

export const UpdateArticleAction = 
        createAction('[ Article ] Update_Article', props<{ payload:[Number, Article]  }>());


export const MinsArticlesAction = 
        createAction('[ Article ] Mins_Articles'); 
