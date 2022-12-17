import  {Article}  from "../models/article";
import  {User, AuthorizedUser } from "../models/user";
import  {Course} from "../models/course";
import  {Ticket} from "../models/suptickets"
export interface AppState {
        userState:UserState 
	articleState: ArticleState;
        courseState: CourseState;
        ticketState: SpTicketState
}

export interface ArticleState {
	articles: Article[];
} 

export interface CourseState {
	courses: Course[];
} 

export interface UserState {
	//_articleState:ArticleState;
        users:User[]
}

export interface SpTicketState {
     tickets:Ticket[]

}
export interface AuthState{
   user: AuthorizedUser
   errorMessage?:string|string[]
}


