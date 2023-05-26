import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 45;

  get nameUpercase(): string {
    return this.name.toUpperCase();
  }

  descripcionHero(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetValues(): void {
    this.name = 'Iroman';
    this.age = 45;
  }
}
