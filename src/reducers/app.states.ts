import  {Article}  from "../models/article";
import  {User} from "../models/user";

export interface AppState {
        userState:UserState 
	articleState: ArticleState;
}

export interface ArticleState {
	articles: Article[];
} 

export interface UserState {
	articleState:ArticleState;
        users:User[]
} 


