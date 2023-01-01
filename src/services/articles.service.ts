import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Article } from "src/models/article";
import {apiconfig} from "../apiconfig"
@Injectable({
  providedIn:"root"
})
export class ArticlesService {
    url=`${apiconfig.hostname}`+`${apiconfig.atricles}`;
    headers= new HttpHeaders(apiconfig.headers);
    constructor(private http:HttpClient){

    }
    getAllArticles():Observable<Article[]>{
        //console.log(this.url);
        return this.http.get<Article[]>(this.url,{...this.headers});
    }
}
