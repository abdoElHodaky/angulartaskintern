import {NgModule} from "@angular/common";
import { RouterModule,PreloadAllModules } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "../home/home.component";
import { NewsComponent } from "../news/news.component";
import { NewsDetailComponent } from "../newsdetail/newsdetail.component";
import { ContactComponent} from "../contact/contact.component";
import { coursesComponent } from "../courses/courses.component";
import { LoginComponent } from "../auth/login.component";
import { SignupComponent } from "../auth/signup.component";
import { NotFoundComponent } from "../notFoundPage/notfound.component";
@NgModule({
  
  imports:[
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
    ],{ scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules
      })
     ],
    exports:[RouterModule]   
  )
 export class AppRoutingModule {}
    
