import { Component } from "@angular/core";
import { filter, find, findIndex, map, Observable,pipe } from 'rxjs';
import { CoursesFacade } from "../facades/course.facade";
import { Course } from "../models/course";
@Component({
  selector: "<app-courses></app-courses>",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class coursesComponent {
  title = "courses";

    constructor(){}
}
