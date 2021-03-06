import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService} from './restaurant.service';
import { switchMap, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

import {
  trigger,
  style,
  transition,
  state,
  animate
} from '@angular/animations';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style([{ opacity: 0, 'max-height': '0px' }])),
      state('visible', style([{ opacity: 1, 'max-height': '70px', 'margin-top': '20px' }])),
      transition('* => *', animate('300ms 0ms ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  searchControl: FormControl;
  formGroup: FormGroup;
  searchBarState = 'hidden';

  constructor(private restaurantService: RestaurantService, private formBuilder: FormBuilder) {
    this.searchControl = this.formBuilder.control('');

    this.formGroup = this.formBuilder.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchTerm =>
          this.restaurantService.restaurants(searchTerm).pipe(
            catchError(error => from([]))
          )
        )
      ).subscribe(restaurants => (this.restaurants = restaurants));
  }

  ngOnInit() {
    this.restaurantService
      .restaurants()
      .subscribe(restaurants => (this.restaurants = restaurants));
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }
}
