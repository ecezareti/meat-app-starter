import { Restaurant } from './restaurant/restaurant.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MEET_API } from 'app/app.api';
import { ErrorHandler } from 'app/app.error-handler';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Review } from 'app/restaurant-details/reviews/reviews.model';
import { MenuItem } from 'app/restaurant-details/menu-item/menu-item.model';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  restaurants(searchTerm?: string): Observable<Restaurant[]> {
    return this.http.get(`${MEET_API}/restaurants`, { params: { q: searchTerm } })
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEET_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<Review[]> {
    return this.http.get(`${MEET_API}/restaurants/${id}/reviews`)
      .map(reviews => reviews.json())
      .catch(ErrorHandler.handleError);
  }

  public menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEET_API}/restaurants/${id}/menu`)
      .map(reviews => reviews.json())
      .catch(ErrorHandler.handleError);
  }
}
