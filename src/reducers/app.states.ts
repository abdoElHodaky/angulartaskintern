import  {Article}  from "../models/article";
import  {User} from "../models/user";
import  {Course} from "../models/course";

export interface AppState {
        userState:UserState 
	articleState: ArticleState;
}

export interface ArticleState {
	articles: Article[];
} 

export interface CourseState {
	courses: Course[];
} 

export interface UserState {
	//articleState:ArticleState;
        users:User[]
} 


