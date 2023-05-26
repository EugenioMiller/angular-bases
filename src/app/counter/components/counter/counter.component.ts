import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="cambiarValor(1)">+1</button>
    <button (click)="cambiarValor(-1)">-1</button>

    <button (click)="resetValue()">Reset</button>
  `,
})
export class CounterComponent {
  public title: string = 'Mi primer app con angular';
  public counter: number = 10;

  cambiarValor(value: number): void {
    this.counter += value;
  }

  resetValue(): void {
    this.counter = 10;
  }
}
