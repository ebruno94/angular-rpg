import { Component } from '@angular/core';
import { Character, Mage, Warrior, Rogue } from './models/characters';
import { itemList } from './models/Item';
import { monsterList } from './models/Monster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMonsterList = monsterList;
  masterItemList = itemList;
  currentCharacter: Character = null;
  isFighting : boolean = false;
  setCurrentCharacter(newCharacter: Character){
    this.currentCharacter = newCharacter;
  }
  setFighting(flag: boolean){
    this.isFighting = flag;
  }
}
