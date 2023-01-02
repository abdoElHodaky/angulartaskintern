import _Attachment from "./attachment.d"
export class Video implements _Attachment {
    id: number;
    title: string;
    type:string="video"
    description:string;
    thumbnail:string;
    source:string;
    courseId?:Number;
    extension?:string
    constructor(){
    }
}

export class Book implements _Attachment {
    id: number;
    title: string;
    type:string="book"
    description:string;
    thumbnail:string;
    source:string;
    courseId?:Number;
    extension?:string
    
    constructor(){
    }
}