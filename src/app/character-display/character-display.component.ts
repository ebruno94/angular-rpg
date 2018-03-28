import { Component, Input} from '@angular/core';
import { Character } from '../models/characters';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent {

  @Input() childCurrentCharacter: Character;

  deleteItem(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
  }

}
