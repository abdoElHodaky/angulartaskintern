import { Article } from "../models/Article";
export interface AppState {
	articleState: ArticleState;
}
export interface ArticleState {
	articles: Article[];
} 
