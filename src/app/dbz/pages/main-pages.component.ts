import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzeService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzeService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters]; //retorna una copia
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteById(id);
  }

  newCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }
}
