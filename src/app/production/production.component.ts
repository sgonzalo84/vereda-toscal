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
      {title: 'Imagen 1', text: 'Aqui un texto para la imagen 1', imageUrl: '../../assets/prod1.JPG'},
      {title: 'Imagen 2', text: 'Aqui un texto para la imagen 2', imageUrl: '../../assets/prod2.JPG'},
      {title: 'Imagen 3', text: 'Aqui un texto para la imagen 3', imageUrl: '../../assets/prod3.JPG'},
      {title: 'Imagen 4', text: 'Aqui un texto para la imagen 4', imageUrl: '../../assets/prod4.JPG'},
      {title: 'Imagen 5', text: 'Aqui un texto para la imagen 5', imageUrl: '../../assets/prod5.JPG'}
    ];
  }

}
