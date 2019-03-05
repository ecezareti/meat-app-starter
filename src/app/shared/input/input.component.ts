import { Component, OnInit, ContentChild, Input, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() errorMessage: string;
  @Input() label: string;

  @Input() input: NgModel;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model;

    if (this.input === undefined) {
      throw new Error ('Não foi identificada a diretiva ngModel no componente informado');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.touched || this.input.dirty);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.touched || this.input.dirty);
  }
}
