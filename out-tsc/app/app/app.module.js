var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SharedModule } from './shared/shared.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { MenuItemComponent } from './restaurant-details/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-details/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { LoginComponent } from './security/login/login.component';
import { UserDetailsComponent } from './header/user-details/user-details.component';
import { AuthInterceptor } from './security/auth.interceptor';
import { ApplicationErrorHandler } from './app.error-handler';
registerLocaleData(pt, 'pt');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                FooterComponent,
                HomeComponent,
                RestaurantsComponent,
                RestaurantComponent,
                RestaurantDetailsComponent,
                MenuComponent,
                MenuItemComponent,
                ShoppingCartComponent,
                ReviewsComponent,
                OrderSummaryComponent,
                NotFoundComponent,
                LoginComponent,
                UserDetailsComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                BrowserAnimationsModule,
                SharedModule.forRoot(),
                RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
            ],
            // providers: [{ provide: LOCALE_ID, useValue: 'pt-br' },
            //             { provide: LocationStrategy, useClass: HashLocationStrategy}],
            providers: [
                { provide: LOCALE_ID, useValue: 'pt' },
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                { provide: ErrorHandler, useClass: ApplicationErrorHandler }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map