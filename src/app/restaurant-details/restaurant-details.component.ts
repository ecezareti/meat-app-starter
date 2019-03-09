import { RestaurantService } from './../restaurants/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html'
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant: Restaurant;

  menuState = 'ready';

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];
    this.restaurantService.restaurantById(id)
      .subscribe (restaurant => this.restaurant = restaurant);
  }
}
