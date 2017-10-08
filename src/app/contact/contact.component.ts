import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data = {
    name: '',
    contact: '',
    message: ''
  };
  mailString: string;

  constructor() {
  }

  ngOnInit() {
    this.mailString = 'mailto:carlosmanuel.rubio@gmail.com?subject="Consulta desde la web"&body=';
  }

}
