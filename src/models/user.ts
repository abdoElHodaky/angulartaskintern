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
    protected accesstok?:string;
    userName:string;
    protected password:string;
    
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
    static authenticatedUser(param:User){
      return <AuthenticatedUser>param ;
    }
   nationalIdvalid(){
     const message=this.IDcardNumber.toString()
     const pattern=/^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/
     return (pattern.test(message));
    }
}

export class AuthenticatedUser extends User{
 isAuthorized?:boolean;
 isAuthenticated:boolean=true
 setAuthorization(){
  this.isAuthorized=(this.permissions.length!=0)?true:false
 }
    
}
