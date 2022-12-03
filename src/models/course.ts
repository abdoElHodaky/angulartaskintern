import _Course from "./course.d"
export class Course implements _Course {
    id: number;
    title: string;
    category: string;
    description:string;
    imgurl:string;
    price:number;
    
    constructor(){
    }
}
