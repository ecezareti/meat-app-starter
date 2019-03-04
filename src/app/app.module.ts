import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantService } from './restaurants/restaurant.service';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { MenuItemComponent } from './restaurant-details/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-details/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ RestaurantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
