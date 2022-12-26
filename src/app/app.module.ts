import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule } from "@angular/core";
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
import { coursesComponent } from "../courses/courses.component";
import { AuthFacade } from "../facades/auth.facade";
import { LoginComponent } from "../auth/login.component";
import { SignupComponent } from "../auth/signup.component";
import { NotFoundComponent } from "../notFoundPage/notfound.component";
import { UsersFacade } from "../facades/user.facade";
import { HttpClientModule } from '@angular/common/http';
import { TicketsService } from "src/services/tickets.service";
import { TicketEffects } from "src/effects/ticket.effects";
@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailComponent,
    ContactComponent,
    coursesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([TicketEffects]),
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
        path:"support", 
        children:[
          {path:"contact",component: ContactComponent},
          {path:"complaint" ,component:ContactComponent}
        ]
        
       },
       {
        path:"courses",
        children:[
          {path:"",component:coursesComponent}
        ]
       },
       {
        path:"auth",
        children:[
          {path:"login",
          component:LoginComponent},
          {path:"signup",component:SignupComponent}
        ]
       },
       {path: '**', component:NotFoundComponent}
      //{ path: "news/:id", component: NewsDetailComponent }
    ],{ scrollPositionRestoration: 'enabled' })
  ],
  providers: [
    TicketsService,
    ArticlesFacade,
    TicketsFacade,
    CoursesFacade,
    AuthFacade,UsersFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
