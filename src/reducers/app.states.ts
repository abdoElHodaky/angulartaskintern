import { Article } from "../models/Article.ts";
export interface AppState {
	articleState: ArticleState;
}
export interface ArticleState {
	articles: Article[];
} 
