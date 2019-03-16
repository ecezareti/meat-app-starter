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
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { NotificationService } from 'app/shared/messages/notification.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginService, notificationService, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.notificationService = notificationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: this.formBuilder.control('', [
                Validators.required,
                Validators.email
            ]),
            password: this.formBuilder.control('', Validators.required)
        });
        this.path = this.activatedRoute.snapshot.params['to'];
    };
    LoginComponent.prototype.isValid = function () {
        return this.loginForm.valid;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(function (user) { return _this.notificationService.notify("Ol\u00E1, " + user.name); }, function (response) {
            return _this.notificationService.notify(response.error.message);
        }, function () { return _this.router.navigate([_this.path]); });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'mt-login',
            templateUrl: './login.component.html'
        }),
        __metadata("design:paramtypes", [FormBuilder,
            LoginService,
            NotificationService,
            ActivatedRoute,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map