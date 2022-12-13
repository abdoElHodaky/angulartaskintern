import _Ticket from "./suptickets.d"
export class Ticket implements _Ticket {
    id: number;
    title: string;
    type: string;
    description:string;
    subject:string;
    constructor (){}
    private fromJson(param){
    let obj=new Ticket();
     for(var i in param){
         if(i in obj){ obj[i]=param[i]  }
         else{break}
     }
      return obj;
    
   }
}
