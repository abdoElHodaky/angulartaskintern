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
    protected permissions=[]
    private articles:Article[]
    
    constructor(){
    }
    public setArticles(articles: Article[]){
     this.articles=articles
    }
    get fullname (){return `${this.firstName} ${this.middleName} ${this.lastName}`;}
    static fromobj(param)<User>{
    return new User(<User>{...param})
    }
}

export class AuthorizedUser extends User{
 isAuthorized?:boolean
 isAuthenticated:boolean=true
 constructor (init:AuthorizedUser)
    {
       super()
       Object.assign(this, init);
       
    }

    
}
