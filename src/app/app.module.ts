import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { FooterComponent } from './footer/footer.component';
import { CardresidenceComponent } from './cardresidence/cardresidence.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowappartComponent } from './showappart/showappart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResidenceComponent,
    FooterComponent,
    CardresidenceComponent,
    PagenotfoundComponent,
    ShowappartComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
