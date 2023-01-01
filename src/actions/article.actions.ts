import { createAction, props } from '@ngrx/store';
import  {Article}  from '../models/article';

export const JavaArticlesAction = createAction('[ Article ] Java');
export const AngularArticlesAction = createAction('[ Article ] Angular');
export const FavoriteArticlesAction = 
        createAction('[ Article ] Favorite_Articles', props<{ payload: Article[] }>()); 

export const AddArticleAction = 
        createAction('[ Article ] Add_Article', props<{ payload: Article }>());

export const AddArticleSuccessAction = 
        createAction('[ Article ] AddSuccess_Article', props<{ payload: Article }>());


export const DeleteArticleAction = 
        createAction('[ Article ] Delete_Article', props<{ payload: number }>());

export const DeleteArticleSuccessAction = 
        createAction('[ Article ] DeleteSuccess_Article', props<{ payload: number }>());


export const UpdateArticleAction = 
        createAction('[ Article ] Update_Article', props<{ payload:[Number, Article]  }>());


export const MinsArticlesAction = 
        createAction('[ Article ] Mins_Articles'); 

export const LoadArticlesAction = 
        createAction('[ Article ] Load_Articles');

export const LoadSuccessArticlesAction = 
        createAction('[ Article ] LoadSuccess_Articles', props<{ payload: Article[] }>()); 

