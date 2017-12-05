import {Component, OnInit} from '@angular/core';


export class Location {
  lat: number;
  long: number;
}

export class Shop {
  name: string;
  address: string;
  marker: Location;
}

export class City {
  name: string;
  location: Location;
  shops: Shop [];
}

@Component({
  selector: 'app-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.scss']
})
export class FindUsComponent implements OnInit {

  cities: City[];
  selectedCity: City;
  mouseHover: string;

  constructor() {
  }

  ngOnInit() {
    this.cities = [
      {
        name: 'Ciudad Real',
        location: {lat: 38.9854156, long: -3.9209874},
        shops: [
          {
            name: 'Tienda 1',
            address: 'Direccion 1',
            marker: {lat: 38.9855556, long: -3.9213874}
          }, {
            name: 'Tienda 2',
            address: 'Direccion 2',
            marker: {lat: 38.9851156, long: -3.9217874}
          }
        ]
      },
      {
        name: 'Manzanares',
        location: {lat: 38.99897528354941, long: -3.3721160888671875},
        shops: [
          {
            name: 'Tienda 1',
            address: 'Direccion 1',
            marker: {lat: 38.99997528354941, long: -3.3721160888671875}
          }, {
            name: 'Tienda 2',
            address: 'Direccion 2',
            marker: {lat: 38.99887528354941, long: -3.3722260888671875}
          }
        ]
      },
      {
        name: 'Puertollano',
        location: {lat: 38.6884601, long: -4.107881700000007},
        shops: [
          {
            name: 'Tienda 1',
            address: 'Direccion 1',
            marker: {lat: 38.6984601, long: -4.107881700000007}
          }, {
            name: 'Tienda 2',
            address: 'Direccion 2',
            marker: {lat: 38.6784601, long: -4.107881700000007}
          }
        ]
      }
    ];
    this.onSelectCity(this.cities[0]);
  }

  onSelectCity(city: City) {
    this.selectedCity = city;
  }

}
