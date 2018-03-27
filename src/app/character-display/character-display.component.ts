import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../models/characters';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent {

  @Input() childCurrentCharacter: Character;
  @Output() initiateFight = new EventEmitter();

  beginFight(){
    this.initiateFight.emit(true);
  }

}
