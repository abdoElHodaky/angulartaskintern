import { Component } from "@angular/core";

@Component({
  selector: "<app-home></app-home>",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  title = "CodeSandbox";
  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff', p: 'hello' },
    { img: 'https://via.placeholder.com/600.png/021/fff', p: 'abdo' },
    { img: 'https://via.placeholder.com/600.png/321/fff', p: 'moh' },
    { img: 'https://via.placeholder.com/600.png/422/fff', p: 'arh' },
    { img: 'https://via.placeholder.com/600.png/654/fff', p: 'bye' },
  ];
    slideConfig = {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      rtl: true,
    };
    addSlide() {
      this.slides.push({ img: 'http://placehold.com/600.png/', p: 'hello' });
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
