import  {Article}  from "../models/article";
import  {User} from "../models/user";
import  {Course} from "../models/course";

export interface AppState {
        userState:UserState 
	articleState: ArticleState;
        courseState: CourseState;
}

export interface ArticleState {
	articles: Article[];
} 

export interface CourseState {
	courses: Course[];
        subscribers: User[];
} 

export interface UserState {
	//_articleState:ArticleState;
        users:User[]
} 


