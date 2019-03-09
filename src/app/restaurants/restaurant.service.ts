import { Restaurant } from './restaurant/restaurant.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MEET_API } from 'app/app.api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Review } from 'app/restaurant-details/reviews/reviews.model';
import { MenuItem } from 'app/restaurant-details/menu-item/menu-item.model';

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) {}

  restaurants(searchTerm?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;

    if (searchTerm) {
      params = new HttpParams().set('q', searchTerm);
    }

    return this.http.get<Restaurant[]>(`${MEET_API}/restaurants`, {
      params: params
    });
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEET_API}/restaurants/${id}`);
  }

  reviewsOfRestaurant(id: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${MEET_API}/restaurants/${id}/reviews`);
  }

  public menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEET_API}/restaurants/${id}/menu`);
  }
}
