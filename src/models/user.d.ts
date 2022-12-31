declare interface _User {
    id: number;
    IDcardNumber?:number;
    firstName: string;
    middleName?: string;
    lastName:string;
    relationship_type?:string;
    relationship_id?:number;
    related_id?:number
}
export default _User
