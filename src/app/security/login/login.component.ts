import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NotificationService } from 'app/shared/messages/notification.service';
import { User } from './user.model';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  path: void;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email
      ]),
      password: this.formBuilder.control('', Validators.required)
    });

    this.path = this.activatedRoute.snapshot.params['to'];
  }

  isValid(): boolean {
    return this.loginForm.valid;
  }

  login() {
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (user: User) => this.notificationService.notify(`Olá, ${user.name}`),
        (response: HttpErrorResponse) =>
          this.notificationService.notify(response.error.message),
        () => this.router.navigate([this.path])
      );
  }
}
