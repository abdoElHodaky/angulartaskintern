import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import { Course } from 'src/models/course';
import * as fromActions from '../actions/course.actions';
import { CourseState } from './app.states';

export const initialState: CourseState = { courses: []};
let courses:Array<Course>
const _courseReducer = createReducer(
  initialState,
  on(fromActions.AddCourseAction, (state, {payload}) => {
  courses.push(payload);
  return {courses:courses}
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
  }),
  on(fromActions.SubscribeCourseAction, (state, {payload}) => {
  const _courses=state.courses
  const _course=_courses.find(o=>o.id==payload[0].id)
  const ind=state.courses.indexOf(_course)
  _course.subscribers.push(payload[1])
  state.courses[ind]=_course
  return {courses:state.courses}
  }),
);

export function courseReducer(state: any, action: Action) {
  return _courseReducer(state, action);
};

export const getCourseState = createFeatureSelector<CourseState>('courseState');

export const getCourses = createSelector(
    getCourseState, 
    (state: CourseState) => state.courses 
);
export const _getCourses = createSelector(
  getCourseState, 
  (state: CourseState) => courses 
); 
