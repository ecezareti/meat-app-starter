var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LoginService } from 'app/security/login/login.service';
import { Injectable } from '@angular/core';
var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(loginService) {
        this.loginService = loginService;
    }
    LoggedInGuard.prototype.canLoad = function (route) {
        console.log('canLoad');
        return this.isAuthenticated(route.path);
    };
    LoggedInGuard.prototype.isAuthenticated = function (path) {
        var isLoggeddIn = this.loginService.isLoggedIn();
        if (!isLoggeddIn) {
            this.loginService.handleLogin(path);
        }
        return isLoggeddIn;
    };
    LoggedInGuard.prototype.canActivate = function (activatedRoute, router) {
        console.log('canActivate');
        return this.isAuthenticated(activatedRoute.routeConfig.path);
    };
    LoggedInGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LoginService])
    ], LoggedInGuard);
    return LoggedInGuard;
}());
export { LoggedInGuard };
//# sourceMappingURL=loggedIn.guard.js.map