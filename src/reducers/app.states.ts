import { Article } from "./src/models/Article";
export interface AppState {
	articleState: ArticleState;
}
export interface ArticleState {
	articles: Article[];
} 
