import _Ticket from "./suptickets.d"
export class Ticket implements _Ticket {
    id: number=1;
     title?: string="default";
     type: string="default";
     description:string="default";
     subject:string="default";
     userName:string="default";
     toString(){
        return "Ticket {"+{...this}+"}"
     }
    constructor (init:Ticket)
    {
        Object.assign(this, init);
    }
    
    static fromobj(param){
    return new Ticket(<Ticket>{...param})
    ;
    
   }
}
