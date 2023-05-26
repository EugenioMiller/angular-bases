import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public nameHeros: string[] = ['Hulk', 'Thor', 'Loki', 'Spidermna', 'Iroman'];
  public heroDeleted?: string;

  deleteLastHero(): void {
    this.heroDeleted = this.nameHeros.pop();
  }
}
