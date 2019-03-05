import { Component, OnInit, ContentChild, Input, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';


@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() errorMessage: string;
  @Input() label: string;

  @Input() input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) controlName: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.controlName;

    if (this.input === undefined) {
      throw new Error ('Não foi identificada a diretiva ngModel ou formControlName no componente informado');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.touched || this.input.dirty);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.touched || this.input.dirty);
  }
}
