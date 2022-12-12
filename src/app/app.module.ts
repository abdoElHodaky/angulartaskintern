import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "../home/home.component";
import { NewsComponent } from "../news/news.component";
import { NewsDetailComponent } from "../newsdetail/newsdetail.component";
import { ContactComponent} from "../contact/contact.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StoreModule } from "@ngrx/store";
import { reducers } from '../reducers/reducers';
import { ArticlesFacade } from "src/facades/article.facade";
import { EffectsModule } from '@ngrx/effects';
import { TicketsFacade } from "src/facades/ticket.facade";
import { CoursesFacade } from "src/facades/course.facade";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailComponent,
    ContactComponent
  ],
  imports: [
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers),
    SlickCarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/home", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent,
        data:{
          breadcrumb:{name:"الاخبار"}
        }
      },
      {
        path: "news",
        
        children: [
          {  path:"",
             component:NewsComponent
          },
          {
            path: ':id',
            component: NewsDetailComponent
          }
        ]
        //children: [{ path: "/", component: ANewComponent }]
      },
       {
        path:"contact", 
        children:[
          {path:"",component: ContactComponent}
        ]
        
       }
      //{ path: "news/:id", component: NewsDetailComponent }
    ],{ scrollPositionRestoration: 'enabled' })
  ],
  providers: [ArticlesFacade,TicketsFacade,CoursesFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
