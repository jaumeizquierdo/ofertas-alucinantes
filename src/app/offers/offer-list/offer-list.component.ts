import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  offers;

  constructor(private apiService: ApiService, private router: Router) { }

  getOffers() {
    this.apiService.getOffers$().subscribe(e => this.offers = e);
  }

  ngOnInit() {
    this.getOffers();
  }

}
