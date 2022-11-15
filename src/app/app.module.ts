import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "../home/home.component";
import { NewsComponent } from "../news/news.component";
import { NewsDetailComponent } from "../newsdetail/newsdetail.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailComponent
  ],
  imports: [
    SlickCarouselModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/home", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "news",
        component: NewsComponent
        /*children: [
          {
            path: "anew",
            component: ANewComponent
          }
        ]*/
        //children: [{ path: "/", component: ANewComponent }]
      },
      { path: "news/:id", component: NewsDetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
