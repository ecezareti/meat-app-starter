var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from '@angular/router';
import { MEET_API } from 'app/app.api';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginService.prototype.isLoggedIn = function () {
        return this.user !== undefined;
    };
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(MEET_API + "/login", { email: email, password: password })
            .pipe(tap(function (user) { return _this.user = user; }));
    };
    LoginService.prototype.handleLogin = function (path) {
        this.router.navigate(['/login', path]);
    };
    LoginService.prototype.logout = function () {
        this.user = undefined;
    };
    LoginService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map