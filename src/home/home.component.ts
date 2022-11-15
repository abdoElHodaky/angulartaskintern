import { Component } from "@angular/core";

@Component({
  selector: "<app-home></app-home>",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  title = "CodeSandbox";
  slides = [
    { img: '../assets/hugo-productive-work.png', p: 'hello' },
    { img: '../assets/hugo-productive-work.png', p: 'abdo' },
    { img: '../assets/hugo-productive-work.png', p: 'moh' },
    { img: '../assets/hugo-productive-work.png', p: 'arh' },
    { img: '../assets/hugo-productive-work.png', p: 'bye' },
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
