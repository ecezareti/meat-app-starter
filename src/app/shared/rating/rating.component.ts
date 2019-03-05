import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  ratings: number [] = [1, 2, 3, 4, 5];
  @Output() rated = new EventEmitter<number>();

  value = 0;
  previousValue: number;

  constructor() { }

  ngOnInit() {
  }

  setValue (value: number) {
    this.value = value;
    this.previousValue = undefined;

    this.rated.emit(value);
  }

  setTemporaryValue (r: number): void {
    if (this.value !== undefined) {
      this.previousValue = this.value;
      this.value = r;
    }
  }

  clearTemporaryValue (): void {
    if (this.previousValue !== undefined) {
      this.value = this.previousValue;
      this.previousValue = undefined;
    }
  }
}
