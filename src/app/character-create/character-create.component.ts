import { Component, Output, EventEmitter } from '@angular/core';
import { Character, Mage, Warrior, Rogue } from '../models/characters';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})

export class CharacterCreateComponent {

  @Output() sendUpCurrentCharacter = new EventEmitter();

  childCurrentCharacter: Character = null;


  createCharacter(name: string, characterClass: string){
    let newCharacter: Character = null;
    console.log("characterClass = " + characterClass);
    switch(characterClass){
      case 'Mage':
        newCharacter = new Mage(name);
        break;
      case 'Warrior':
        newCharacter = new Warrior(name);
        break;
      default:
        newCharacter = new Rogue(name);
        break;
    }

    this.childCurrentCharacter = newCharacter;
    this.sendUpCurrentCharacter.emit(newCharacter);
  }
}
