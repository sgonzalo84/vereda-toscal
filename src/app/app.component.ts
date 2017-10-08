import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: any[];
  constructor() {
    this.menuItems = [
      {text: 'Home', target: '#home-section'},
      {text: 'Proyecto', target: '#who-section'},
      {text: 'Producción', target: '#prod-section'},
      {text: 'Equipo', target: '#team-section'},
      {text: 'Encuentranos', target: '#find-section'},
      {text: 'Contacto', target: '#contact-section'}
    ];
  }
}
