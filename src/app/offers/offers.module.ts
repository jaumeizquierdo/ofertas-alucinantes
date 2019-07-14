import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer/offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OfferCommentsComponent } from './offer-comments/offer-comments.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';

@NgModule({
  declarations: [
    OfferComponent,
    OfferListComponent,
    OfferAddComponent,
    OfferCommentsComponent,
    OfferEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    OfferComponent,
    OfferListComponent,
    OfferAddComponent,
    OfferCommentsComponent,
    OfferEditComponent
  ]
})
export class OffersModule { }
