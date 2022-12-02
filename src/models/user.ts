import _User from "./user.d"
import {Article} from "./article"
export class User implements _User {
    id: number;
    IDcardNumber:number;
    firstName: string;
    middleName: string;
    lastName:string;
    relationship_type:string;
    relationship_id:number;
    related_id:number
    readonly articles:Article[]

    constructor(){
    }
    public setArticles(articles: Article[]){
     this.articles=articles
    }
}
