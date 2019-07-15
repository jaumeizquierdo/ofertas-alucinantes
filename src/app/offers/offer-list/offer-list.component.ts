import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Offer } from 'src/app/shared/classes/offer';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  offer: Offer;

  offers;
  //offer: Offer;

  data: any;
  votos: number;

  lowValue: number = 0;
  highValue: number = 9;

  // MatPaginator Inputs
  longitudRegistros = 0;
  pageSize = 9;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private apiService: ApiService, private router: Router) { }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  voteUp() {
    console.log('up');
    this.offer.voteUp();
    return false;
  }

  voteDown() {
    console.log('down');
    this.offer.voteDown();
    return false;
  }

  getOffers() {
    this.apiService.getOffers$().subscribe(e => {
      this.offers = e;
      this.longitudRegistros = this.offers.length;
    });
  }

  deleteOffer(id) {
    this.apiService.deleteOffer$(id).subscribe(data => {
      this.data = data;
      this.getOffers();
    });
  }

  ngOnInit() {
    this.getOffers();
  }

}
