import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Ticket } from "../models/suptickets";
import {apiconfig} from "../apiconfig"
@Injectable({
  providedIn:"root"
})
export class TicketsService {
    url=`${apiconfig.hostname}`+`${apiconfig.tickets}`;
    headers= new HttpHeaders(apiconfig.headers);
    constructor(private http:HttpClient){

    }
    getAlltickets():Observable<Ticket[]>{
        
        return this.http.get<Ticket[]>(this.url,{...this.headers});
    }
    createsupTicket(supticket:Ticket,userid:number):Observable<any>{
        let _url=this.url+"/create/";
        let payload={
            userid:userid,
            ticket:supticket
        }
        return this.http.post(_url,{
            ...payload
        },{...this.headers});
    }    
}
