import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "src/models/user";
import {apiconfig} from "../apiconfig";
@Injectable({
  providedIn:"root"
})
export class UsersService {
    url=`${apiconfig.hostname}`+`${apiconfig.users}`;
    headers= new HttpHeaders(apiconfig.headers);
    constructor(private http:HttpClient){

    }
    getAllUsers():Observable<User[]>{
        
        return this.http.get<User[]>(this.url,{...this.headers});
    }
    getOneUser(userid:number):Observable<any>{
        let _url=`${this.url}`+'/'+`${userid}`
        return this.http.get(_url,{...this.headers});
    }    
}
