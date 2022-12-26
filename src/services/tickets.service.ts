import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Ticket } from "../models/suptickets";
import {apiconfig} from "../apiconfig"
@Injectable({
  providedIn:"root"
})
export class TicketsService {
    url=apiconfig.tickets;
    constructor(private http:HttpClient){

    }
    getAlltickets():Observable<Ticket[]>{
        
        return this.http.get<Ticket[]>(this.url);
    }
    createsupTicket(supticket:Ticket,userid:number):Observable<Ticket>{
        let payload={
            userid:userid,
            ticket:supticket
        }
        return this.http.post<Ticket>(`${this.url}/create`,{
            ...payload
        });
    }    
}
