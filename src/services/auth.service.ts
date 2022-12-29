import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "src/models/user";
import {apiconfig} from "../apiconfig";
@Injectable({
  providedIn:"root"
})
export class AuthService {
    url=`${apiconfig.hostname}`+`${apiconfig.auth}`;
    headers= new HttpHeaders(apiconfig.headers);
    constructor(private http:HttpClient){

    }
    login(username:string,password:string):Observable<User>{
        let _url=this.url+"/login/";
        let payload={
            username:username,
            passwordHash:password
        }
        return this.http.post<User>(_url,{...payload},{...this.headers});
    }
    signup(user:User):Observable<any>{
        let _url=this.url+"/register/";
        return this.http.post(_url,{...user},{...this.headers});
    }    
}
