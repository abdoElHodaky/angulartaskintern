import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "../home/home.component";
import { NewsComponent } from "../news/news.component";
import { NewsDetailComponent } from "../newsdetail/newsdetail.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StoreModule } from "@ngrx/store";
import { reducers } from '../reducers/reducers';
import { ArticlesFacade } from "src/facades/article.facade";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailComponent
  ],
  imports: [
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
      }
      //{ path: "news/:id", component: NewsDetailComponent }
    ],{ scrollPositionRestoration: 'enabled' })
  ],
  providers: [ArticlesFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
