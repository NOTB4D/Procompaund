import { Component, OnInit } from '@angular/core';
import { CarouselImage } from './../../models/carouselImage';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  picture1={id:1,imagePath:"assets/images/slider.jpg"};
  picture3={id:2,imagePath:"assets/images/slider2.jpg"};
  picture4={id:3,imagePath:"assets/images/slider3.jpg"};
  picture6={id:5,imagePath:"assets/images/slider5.jpg"};
  picture7={id:6,imagePath:"assets/images/slider6.jpg"};



  carousel:CarouselImage[]=[this.picture3, this.picture1, this.picture4, this.picture6, this.picture7];



  constructor() { }

  ngOnInit(): void {
  }

}
