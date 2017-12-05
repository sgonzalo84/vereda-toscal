import { Component, HostListener, Input, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input() menuItems: any[];
  smallHeader = false;
  menuOpen = false;
  showBgImage = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.shouldShowImage(window.innerWidth);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 120) {
      this.smallHeader = true;
    } else if (this.smallHeader && number < 10) {
      this.smallHeader = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.shouldShowImage(event.target.innerWidth);
  }

  onMenuClicked(menuStatus) {
    this.menuOpen = menuStatus;
  }

  shouldShowImage(currentWidth: number) {
    if (currentWidth > 768) {
      this.showBgImage = true;
    }
  }
}
