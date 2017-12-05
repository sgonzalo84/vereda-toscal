import {Component, ElementRef, HostListener, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  data = {
    name: '',
    contact: '',
    message: ''
  };
  mailString: string;
  addAnimation = false;

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
    this.mailString = 'mailto:veredadeltoscal@gmail.com?subject="Consulta desde la web"&body=';
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const divHeight = this.el.nativeElement.offsetHeight - 80;
    const scrollPosition = window.pageYOffset;

    if ((scrollPosition + divHeight ) >= componentPosition) {
      this.addAnimation = true;
    } else {
      this.addAnimation = false;
    }
  }

}
