import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StoreModule } from "@ngrx/store";
import { reducers } from '../reducers/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from "@angular/forms";

import * as components from "../components";
import * as facades from "../facades/facades";
@NgModule({
  declarations: [
    
    AppComponent,
    [...components.components]
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
        component: components.homecomp,
        data:{
          breadcrumb:{name:"الاخبار"}
        }
      },
      {
        path: "news",
        
        children: [
          {  path:"",
             component:components.newscomp
          },
          {
            path: ':id',
            component: components.newdetailcomp
          }
        ]
        //children: [{ path: "/", component: ANewComponent }]
      },
       {
        path:"support", 
        children:[
          {path:"contact",component:components.contaccomp},
          {path:"complaint" ,component:components.contaccomp}
        ]
        
       },
       {
        path:"courses",
        children:[
          {path:"",component:components.coursescomp}
        ]
       },
       {
        path:"auth",
        children:[
          {path:"login",
          component:components.logincomp},
          {path:"signup",component:components.signupcomp}
        ]
       },
       {path: '**', component:components.notfoundcomp}
      //{ path: "news/:id", component: NewsDetailComponent }
    ],{ scrollPositionRestoration: 'enabled' })
  ],
  providers: [
    ...facades.facades
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
