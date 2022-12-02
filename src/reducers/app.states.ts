import  {Article}  from "../models/article";
import  {User} from "../models/user";

export interface AppState {
        userState:UserState 
	articleState: ArticleState;
}

export interface UserState {
	articleState:ArticleState;
        users:User[]
} 

export interface ArticleState {
	articles: Article[];
} 
