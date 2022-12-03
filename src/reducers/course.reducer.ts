import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/course.actions';
import { CourseState } from './app.states';

export const initialState: CourseState = { courses: [], subscribers:[] };

const _courseReducer = createReducer(
  initialState,
  on(fromActions.AddCourseAction, (state, {payload}) => {
  state.courses.push(payload);
  return {courses:state.courses}
  }),
  on(fromActions.DeleteCourseAction, (state, {payload}) => {
  const _courses=state.courses.filter(o=>o.id!=payload);
  return {courses:_courses}
  }),
  on(fromActions.UpdateCourseAction, (state, {payload}) => {
  const _courses=state.courses
  if(payload[0]==payload[1].id){
  const _course=_courses.find(o=>o.id==payload[0])
  state.courses[state.courses.indexOf(_course)]=payload[1]
  }
  return {courses:state.courses}

  })
);

export function courseReducer(state: any, action: Action) {
  return _courseReducer(state, action);
};

export const getCourseState = createFeatureSelector<CourseState>('courseState');

export const getCourses = createSelector(
    getCourseState, 
    (state: CourseState) => state.courses 
); 
