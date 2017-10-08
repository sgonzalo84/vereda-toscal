import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ScrollToModule} from 'ng2-scroll-to';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';
import {HeaderComponent} from './header/header.component';
import {MobileMenuComponent} from './mobile-menu/mobile-menu.component';
import {TeamComponent} from './team/team.component';
import {FindUsComponent} from './find-us/find-us.component';
import {AgmCoreModule} from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductionComponent } from './production/production.component';
import {FormsModule} from "@angular/forms";
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
    MobileMenuComponent,
    TeamComponent,
    FindUsComponent,
    ProductionComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-592BtPl6hNy-OcQHvtnJRSMk5Xyz1uU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
