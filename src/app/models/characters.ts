import { Item, itemList } from './Item';

export class Character {
  constructor(public name: string, public charClass: string, public health: number, public maxHealth: number, public strength: number, public defense: number, public intelligence: number, public dexterity: number, attackString: string){

    this.attack = (() => {
      return function(monster){
        monster.health -= this.strength*2;
        console.log(attackString + ` You just attacked the ${monster.name} for ${this.strength}`);
      }
    })();
  }

  items: Item[] = [itemList[0], itemList[1]];
  level: number = 1;

  useItem(myItem) {
    myItem.useItem(this);
  }

  attack;
  ability;
}

export class Mage extends Character {
  constructor(name){
    super(name, "Mage", 50, 50, 5, 4, 10, 6, "Fireball!!!!!!");
  }
}

export class Warrior extends Character {
  constructor(name){
    super(name, "Warrior", 100, 100, 10, 7, 4, 6, "Slash////");
  }
}

export class Rogue extends Character {
  constructor(name){
    super(name, "Rogue", 75, 75, 7, 4, 6, 10, "~*Poison*~");
  }
}
