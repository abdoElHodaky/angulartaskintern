import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Ticket } from "../models/suptickets";
import {apiconfig} from "../apiconfig"
@Injectable({
  providedIn:"root"
})
export class TicketsService {
    url=apiconfig.tickets;
    headers= new HttpHeaders({
        "Accept":"application/json",
        "Content-Type":"apllication/json"
    });
    constructor(private http:HttpClient){

    }
    getAlltickets():Observable<Ticket[]>{
        
        return this.http.get<Ticket[]>(this.url);
    }
    createsupTicket(supticket:Ticket,userid:number):Observable<any>{
        let payload={
            userid:userid,
            ticket:supticket
        }
        return this.http.post(`${this.url}/create/`,{
            ...payload
        },{...this.headers});
    }    
}
