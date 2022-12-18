import  {Article}  from "../models/article";
import  {User} from "../models/user";
import  {Course} from "../models/course";
import  {Ticket} from "../models/suptickets"
export interface AppState {
        userState:UserState 
	articleState: ArticleState;
        courseState: CourseState;
        ticketState: SpTicketState;
        authState:AuthState;
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
   user: User
   errorMessage?:string|string[]
}


