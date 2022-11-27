import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { filter, find, findIndex, map, Observable,pipe } from 'rxjs';
import * as articleReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from '../reducers/app.states';
import  {Article}  from '../models/article';

@Component({
  selector: "<app-news></app-news>",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent {
  title = "news";
  articles$: Observable<Article[]>;
  fetechedArticles:Article[];
  fetchedCat:String="MINS"
  slides = [
    { img: '../assets/image_bg.jpg', p: 'hello' },
    { img: '../assets/image_bg.jpg', p: 'abdo' },
    { img: '../assets/image_bg.jpg', p: 'abdo' }
    ,{ img: '../assets/image_bg.jpg', p: 'hello' },
    { img: '../assets/image_bg.jpg', p: 'abdo' },
    { img: '../assets/image_bg.jpg', p: 'abdo' } 
];
    slideConfig = {
      adaptiveHeight:true,
      swipe:true,
      mobileFirst:true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      infinite: true,
      rtl: true
      
    };
    constructor(private store: Store<ArticleState>) {
      this.articles$ = store.select(articleReducer.getArticles);
      
    }
    ngOnInit(){
      this.showMinsArticles()
      //this.DeleteArticle(1)
    }
    addSlide() {
      this.slides.push({ img: '../assets/image_bg.jpg', p: 'hello' });
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
    showMinsArticles() {
        this.store.dispatch(fromActions.MinsArticlesAction());
        //this.articles$.pipe(filter((o,index)=>index==1)).subscribe(console.log)
        this.articles$.subscribe(e=>{
          this.fetechedArticles=e
          this.fetchedCat=`وزاري`;
        })
    
      }

   AddArticle(param:Article):void {
        this.store.dispatch(fromActions.AddArticleAction({payload:param}));
          
        this.articles$.subscribe(e=>{
          this.fetechedArticles=e
        })

       }
    DeleteArticle(param:number):void {
        this.store.dispatch(fromActions.DeleteArticleAction({payload:param}));
        //this.articles$.subscribe(console.log)
        //this.store.select(articleReducer.getArticles).subscribe(console.log)  
        

       }
}
