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
    related_id:number;
    protected permissions=[];
    private articles:Article[];
    protected accesstok?:string
    
    constructor(init:User){
      Object.assign(this,init)
    }
    public setArticles(articles: Article[]){
     this.articles=articles
    }
    get fullname (){return `${this.firstName} ${this.middleName} ${this.lastName}`;}
    static fromobj(param){
    return new User(<User>{...param});
    }
    static authorizedUser(param:User){
      return <AuthorizedUser>param ;
    }
}

export class AuthorizedUser extends User{
 isAuthorized?:boolean;
 isAuthenticated:boolean=true
 setAuthorization(){
  this.isAuthorized=(this.permissions.length!=0)?true:false
 }
    
}
