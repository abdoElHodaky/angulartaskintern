import _Course from "./course.d"
import {User} from "./user"
export class Course implements _Course {
    id: number;
    title: string;
    category: string;
    description:string;
    imgurl:string;
    price:number;
    subscribers:User[]
    constructor(){
    }
}
