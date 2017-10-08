import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobileMenuComponent {

  @Input() menuItems: any[];
  @Output()
  menuClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  menuOpen = false;

  constructor() {
  }

  onClickMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuClick.emit(this.menuOpen);
  }

}
