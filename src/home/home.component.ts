import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { filter, find, findIndex, map, Observable,pipe } from 'rxjs';
import * as articleReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from '../reducers/app.states';
import  {Article}  from '../models/article';

@Component({
  selector: "<app-home></app-home>",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  title = "CodeSandbox";
  articles$: Observable<Article[]>;
  fetechedArticles:Article[];
  fetchedCat:String="MINS"
  slides = [
    { img: '../assets/hugo-productive-work.png', p: `فتح باب التقدم لإختبارات
                أبناؤنا في الخارج الدور الأول
                2022 - 2023 م` },
    { img: '../assets/hugo-productive-work.png', p: `فتح باب التقدم لإختبارات
                أبناؤنا في الخارج الدور الأول
                2022 - 2023 م`},
    { img: '../assets/hugo-productive-work.png', p: `فتح باب التقدم لإختبارات
                أبناؤنا في الخارج الدور الأول
                2022 - 2023 م` },
    { img: '../assets/hugo-productive-work.png', p: `فتح باب التقدم لإختبارات
                أبناؤنا في الخارج الدور الأول
                2022 - 2023 م` },
    { img: '../assets/hugo-productive-work.png', p: `فتح باب التقدم لإختبارات
                أبناؤنا في الخارج الدور الأول
                2022 - 2023 م` },
  ];
    slideConfig = {
      adaptiveHeight:true,
      swipe:true,
      mobileFirst:true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      rtl: true,
      useTransform: true,
      cssEase: "ease-in-out"
    }
    slide2Config = {
      adaptiveHeight:true,
      swipe:true,
      mobileFirst:true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      infinite: true,
      rtl: true,
      useTransform: true,
      cssEase: "ease-in-out"
    };
    constructor(private store: Store<ArticleState>) {
      this.articles$ = store.select(articleReducer.getArticles);
      
    }
    ngOnInit(){
      this.showMinsArticles()
    }
    addSlide2() {
      this.slides.push({ img: '../assets/image_bg.jpg', p: 'hello' });
    }
    removeSlide2() {
      this.slides.length = this.slides.length - 1;
    }
    slickInit2(e: any) {
      console.log('slick initialized');
    }
    breakpoint2(e: any) {
      console.log('breakpoint');
    }
    afterChange2(e: any) {
      console.log('afterChange');
    }
    beforeChange2(e: any) {
      console.log('beforeChange');
    }
    showMinsArticles() {
        this.store.dispatch(fromActions.MinsArticlesAction());
        //this.articles$.pipe(filter((o,index)=>index==1)).subscribe(console.log)
        this.articles$.subscribe(e=>{
          this.fetechedArticles=e
        })
    
      }
    addSlide() {
      this.slides.push({ img: '../assets/hugo-productive-work.png', p: 'hello' });
    }
    removeSlide() {
      this.slides.length = this.slides.length - 1;
    }
    slickInit(e: any) {
      console.log('slick initialized');
    }
    breakpoint(e: any) {
      console.log('breakpoint');
    }
    afterChange(e: any) {
      console.log('afterChange');
    }
    beforeChange(e: any) {
      console.log('beforeChange');
    }
}
