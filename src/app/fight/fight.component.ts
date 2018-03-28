import { Component, Input } from '@angular/core';
import { Character, Mage, Warrior, Rogue } from '../models/characters';
import { Monster, monsterFactory } from '../models/Monster';
import { Item, itemList } from '../models/Item';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent {

  @Input() currentCharacter : Character;
  currentMonster: Monster = null;
  ifFighting: boolean = false;

  produceMonster(){
    let randomNumber = Math.floor(Math.random()*this.currentCharacter.level);
    this.currentMonster = monsterFactory[randomNumber]();
  }

  beginFight(){
    console.log("ACTIVATING COMBAT MODE")
    this.ifFighting = true;;
    this.produceMonster();
    console.log(this.currentMonster.name);
    console.log(this.currentMonster.health);
  }

  ifDead(){
    if (this.currentMonster.health <= 0){
      this.currentCharacter.setExperience(this.currentMonster.killExp);
      this.currentCharacter.items.push(this.currentMonster.item);
    }
  }
}
