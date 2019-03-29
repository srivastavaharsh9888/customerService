import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {CustomerService} from './services/customerService/customerService.service';
import {HttpClientModule} from '@angular/common/http';
import {CustomerCardComponent} from './ui/customer-card/customer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
