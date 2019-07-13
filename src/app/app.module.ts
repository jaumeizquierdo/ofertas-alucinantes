import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonsModule } from './commons/commons.module';
import { UserModule } from './user/user.module';
import { OffersModule } from './offers/offers.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonsModule,
    UserModule,
    OffersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
