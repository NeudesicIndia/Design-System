import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ModalComponent } from './modal/modal.component';
import { WhyDsComponent } from './why-ds/why-ds.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    HeaderComponent,
    MainComponent,
    ErrorPageComponent,
    ModalComponent,
    WhyDsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
