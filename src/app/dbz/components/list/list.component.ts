import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onIdCharacter: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteId(id: string): void {
    this.onIdCharacter.emit(id);
  }

  /*onDeleteCharacter(index: number): void {
    console.log(index);
  }*/
}
