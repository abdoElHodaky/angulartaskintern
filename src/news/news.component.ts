import { Component } from "@angular/core";

@Component({
  selector: "<app-news></app-news>",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent {
  title = "news";
  slides = [
    { img: '../assets/image_bg.jpg', p: 'hello' },
    { img: '../assets/image_bg.jpg', p: 'abdo' },
    { img: '../assets/image_bg.jpg', p: 'moh' },
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
    };
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
}
