var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { switchMap, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { from } from 'rxjs';
import { trigger, style, transition, state, animate } from '@angular/animations';
var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(restaurantService, formBuilder) {
        var _this = this;
        this.restaurantService = restaurantService;
        this.formBuilder = formBuilder;
        this.searchBarState = 'hidden';
        this.searchControl = this.formBuilder.control('');
        this.formGroup = this.formBuilder.group({
            searchControl: this.searchControl
        });
        this.searchControl.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged(), switchMap(function (searchTerm) {
            return _this.restaurantService.restaurants(searchTerm).pipe(catchError(function (error) { return from([]); }));
        })).subscribe(function (restaurants) { return (_this.restaurants = restaurants); });
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantService
            .restaurants()
            .subscribe(function (restaurants) { return (_this.restaurants = restaurants); });
    };
    RestaurantsComponent.prototype.toggleSearch = function () {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    };
    RestaurantsComponent = __decorate([
        Component({
            selector: 'mt-restaurants',
            templateUrl: './restaurants.component.html',
            animations: [
                trigger('toggleSearch', [
                    state('hidden', style([{ opacity: 0, 'max-height': '0px' }])),
                    state('visible', style([{ opacity: 1, 'max-height': '70px', 'margin-top': '20px' }])),
                    transition('* => *', animate('300ms 0ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [RestaurantService, FormBuilder])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
export { RestaurantsComponent };
//# sourceMappingURL=restaurants.component.js.map