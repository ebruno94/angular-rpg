import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character, Mage, Warrior, Rogue } from '../models/characters';
import { Monster, monsterList } from '../models/Monster';
import { Item, itemList } from '../models/Item';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent {

  @Input() currentCharacter : Character;
  currentMonster: Monster = monsterList[0]; 


}
