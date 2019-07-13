import { Injectable } from '@angular/core';
import { Offer } from '../classes/offer';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Offers

  getOffers$() {
    return this.http.get('http://localhost:3000/offers');
  }

  getOffer$(id: string) {
    return this.http.get<Offer>(`http://localhost:3000/offers/${id}`);
  }

  addOffer$(offer: Offer) {
    return this.http.post<Offer>('http://localhost:3000/offers', offer)
      .pipe(tap((offer: Offer) => console.log(`added offer: id=${offer.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  // Users

  getUsers$() {
    return this.http.get('http://localhost:3000/users');
  }

  getUser$(id: string) {
    return this.http.get<Offer>(`http://localhost:3000/users/${id}`);
  }

  addUser$(user: User) {
    return this.http.post<Offer>('http://localhost:3000/users', user)
      .pipe(tap((user: Offer) => console.log(`added user: id=${user.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

}
