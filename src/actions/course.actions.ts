import { createAction, props } from '@ngrx/store';
import  {Course}  from '../models/course';
import {User} from '../models/user'
export const AddCourseAction = 
        createAction('[ Course ] Add_Course', props<{ payload: Course }>());

export const DeleteCourseAction = 
        createAction('[ Course ] Delete_Course', props<{ payload: number }>());

export const UpdateCourseAction = 
        createAction('[ Course ] Update_Course', props<{ payload:[Number, Course]  }>());

