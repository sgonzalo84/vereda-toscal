import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Slide {
  title: string;
  text: string;
  imageUrl: string;
}

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductionComponent implements OnInit {

  slides: Slide[];

  constructor() {
  }

  ngOnInit() {
    this.slides = [
      {title: '', text: '', imageUrl: '../../assets/prod1.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod2.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod3.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod4.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod5.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod6.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod7.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod8.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod9.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod10.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod11.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod12.JPG'},
      {title: '', text: '', imageUrl: '../../assets/prod13.JPG'}
    ];
  }

}
