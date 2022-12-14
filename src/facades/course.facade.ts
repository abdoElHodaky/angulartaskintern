import { Store } from '@ngrx/store';
import {Injectable} from "@angular/core";

import * as courseReducer from '../reducers/course.reducer';
import * as fromActions from '../actions/course.actions';
import { CourseState } from '../reducers/app.states';
import  {Course}  from '../models/course';
import { articleReducer } from 'src/reducers/article.reducer';



@Injectable({
  providedIn:"root"
})
export class CoursesFacade {
  //loaded$ = this.store.select(carsQuery.getIsLoaded);
  courses$ = this.store.select(courseReducer.getCourses)|| this.store.select(courseReducer._getCourses);
  //selectedCar$ = this.store.select(carsQuery.getSelectedCar);
 
  constructor(private store: Store<CourseState>) {}

  AddArticle(param:Course):void {
        this.store.dispatch(fromActions.AddCourseAction({payload:param}));
         
       }
    DeleteArticle(param:number):void {
        this.store.dispatch(fromActions.DeleteCourseAction({payload:param}));
        //this.articles$.subscribe(console.log)
        //this.store.select(articleReducer.getArticles).subscribe(console.log)  
        

       }

    SubscribeToCourse(param:[Course,number]){
        this.store.dispatch(fromActions.SubscribeCourseAction({payload:param}))
    }
    UnsubscribeToCourse(param:[Course,number]){
        this.store.dispatch(fromActions.UnsubscribeCourseAction({payload:param}))
    }
}
