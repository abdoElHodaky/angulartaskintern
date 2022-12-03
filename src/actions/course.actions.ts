import { createAction, props } from '@ngrx/store';
import  {Course}  from '../models/course';
import {User} from '../models/user'
export const AddCourseAction = 
        createAction('[ Course ] Add_Course', props<{ payload: Course }>());

export const DeleteCourseAction = 
        createAction('[ Course ] Delete_Course', props<{ payload: number }>());

export const UpdateCourseAction = 
        createAction('[ Course ] Update_Course', props<{ payload:[Number, Course]  }>());

export const SubscribeCourseAction = 
        createAction('[ Course ] Subscribe_Course', props<{ payload: [Course,Number]} }>());

export const UnsubscribeCourseAction = 
        createAction('[ Course ] Unsubscribe_Course', props<{ payload: [Course, Number] }>());

