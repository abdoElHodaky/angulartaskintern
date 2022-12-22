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
    static generateCode(length=6)
    {
     const crypto = require("crypto");
     var d=crypto.randomBytes(length).toString('hex')
     return d
    }

}
export class EmailVerification extends Verification{
    type: string="email";
    private verify_code:string
    
}
