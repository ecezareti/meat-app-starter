var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LoginService } from 'app/security/login/login.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(loginService, router) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.router.events.pipe(filter(function (e) { return e instanceof NavigationEnd; })).subscribe(function (e) { return _this.lastUrl = e.url; });
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent.prototype.user = function () {
        return this.loginService.user;
    };
    UserDetailsComponent.prototype.login = function () {
        this.loginService.handleLogin(this.lastUrl);
    };
    UserDetailsComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    UserDetailsComponent.prototype.isLoggedIn = function () {
        return this.loginService.isLoggedIn();
    };
    UserDetailsComponent = __decorate([
        Component({
            selector: 'mt-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.css']
        }),
        __metadata("design:paramtypes", [LoginService, Router])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
export { UserDetailsComponent };
//# sourceMappingURL=user-details.component.js.map