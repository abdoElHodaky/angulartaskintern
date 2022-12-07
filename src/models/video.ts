import _Video from "./video.d"

export class Video implements _Video {
    id: number;
    title: string;
    category: string;
    description:string;
    thumbnail:string;
    source:string;
    courseId:Number;
    
    constructor(){
    }
}
