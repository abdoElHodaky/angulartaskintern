import { Component } from "@angular/core";
import { filter, find, findIndex, map, Observable,pipe } from 'rxjs';
import  {Article}  from '../models/article';
import {ArticlesFacade} from "../facades/article.facade";
import csvDownload from 'json-to-csv-export'
import exportFromJSON from 'export-from-json'
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
    constructor(private articlefacade:ArticlesFacade) {
      this.articles$ = this.articlefacade.articles$
      
    }
    ngOnInit(){
      this.showMinsArticles()
      //this.exportAscsv()
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
        
        this.articlefacade.showMinsArticles();
        this.articles$.subscribe(e=>{
          this.fetechedArticles=e
          this.fetchedCat=`وزاري`;
        })
    
      }
    exportAscsv(){
      const fileName = 'articles'
      const data=this.fetechedArticles;
      const exportType = 'xls'
      var d=exportFromJSON({data,fileName,exportType})
      console.log(d,true)
    }  
  /* AddArticle(param:Article):void {
        this.store.dispatch(fromActions.AddArticleAction({payload:param}));
          
        this.articles$.subscribe(e=>{
          this.fetechedArticles=e
        })

       }
    DeleteArticle(param:number):void {
        this.store.dispatch(fromActions.DeleteArticleAction({payload:param}));
        this.articles$.subscribe(console.log)
        this.store.select(articleReducer.getArticles).subscribe(console.log)  
        

       }*/
}
