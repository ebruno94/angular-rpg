import { Item, itemsLibrary } from './Item';
import { Monster } from './Monster';

export class Character {

  constructor(public name: string, public charClass: string, public health: number, public maxHealth: number, public mana: number, public maxMana: number, public strength: number, public defense: number, public intelligence: number, public dexterity: number, attackString: string, ... abilities){
    this.attack = (() => {
      return function(monster){
        monster.health -= this.strength*2;
        console.log(attackString + ` You just attacked the ${monster.name} for ${this.strength}`);
      }
    })();
    for(let ability of abilities){
      this.abilities.push(abilitiesLibrary[ability]);
    }
  }

  items: Item[] = [itemsLibrary.healthPotion(), itemsLibrary.manaPotion()];
  level: number = 1;
  experience: number = 0;
  maxExperience: number = 100;

  useItem(myItem, index) {
    myItem.useItem(this);
    this.items.splice(index, 1);
  }

  levelUp(){
    console.log("LEVEL UP!");
    console.log("Your character feels stronger!")
    this.level += 1;
    this.maxHealth = Math.ceil(this.maxHealth * 1.5);
    this.health = this.maxHealth;
    this.maxMana = Math.ceil(this.maxMana * 1.5);
    this.mana = this.maxMana;
    this.strength = Math.ceil(this.strength * 1.5);
    this.defense = Math.ceil(this.defense * 1.5);
    this.intelligence = Math.ceil(this.intelligence * 1.5);
    this.dexterity = Math.ceil(this.dexterity * 1.5);
  }

  setExperience(experience){
    this.experience += experience;
    if (this.experience >= this.maxExperience){
      this.levelUp();
      switch (this.level){
        case 2:
          this.maxExperience = 300;
          break;
        case 3:
          this.maxExperience = 600;
          break;
        case 4:
          this.maxExperience = 1000;
          break;
        case 5:
          this.maxExperience = 1500;
          break;
        case 6:
          this.maxExperience = 2100;
          break;
      }
    }
  }

  attack;
  abilities = [];
}

let abilitiesLibrary = {
  heal: {
    name: "Heal",
    cast: function(character: Character, monster: Monster){character.health += character.intelligence *2; character.mana -= 20}
  },
  doubleAttack: {
    name: "Double Attack",
    cast: function(character: Character, monster: Monster){monster.health -= character.strength * 2; character.mana -= 10}
  },
  defenseUp: {
    name: "Defense Up",
    cast: function(character: Character, monster: Monster){character.defense += 5; character.mana -= 15}
  },
  magicMissile: {
    name: "Magic Missile",
    cast: function(character: Character, monster: Monster){monster.health -= character.intelligence * 2; character.mana -= 10}
  },
  backstab: {
    name: "Back Stab",
    cast: function(character: Character, monster: Monster){monster.health -= character.dexterity * 2; character.mana -= 10}
  }
}

export class Mage extends Character {
  constructor(name){
    super(name, "Mage", 50, 50, 100, 100, 5, 4, 10, 6, "Fireball!!!!!!", "heal", "magicMissile", "defenseUp");
  }
}

export class Warrior extends Character {
  constructor(name){
    super(name, "Warrior", 100, 100, 50, 50, 10, 7, 4, 6, "Slash////", "heal", "doubleAttack", "defenseUp");
  }
}

export class Rogue extends Character {
  constructor(name){
    super(name, "Rogue", 75, 75, 75, 75, 7, 4, 6, 10, "~*Poison*~", "heal", "backstab", "defenseUp");
  }
}
