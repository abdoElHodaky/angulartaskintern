import _Verification from "./verification.d";
export class Verification implements _Verification{
    id: number;
    status:string;
    type:string;
    userId:number;
    protected verified=false;
    constructor(init:Verification){
        Object.assign(this,init);
    }


}
export class EmailVerification extends Verification{
    type: string="email";
    verify_code:string
}