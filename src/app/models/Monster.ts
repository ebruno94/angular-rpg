import {Item, itemsLibrary, itemsLibraryKey } from './Item';

export class Monster {
  constructor(public name: string, public level: number, public health: number, public maxHealth: number, public attackDamage: number, public killExp: number, attackString){
    this.attack = (() => {
      return function(character){
        character.health -= this.attackDamage;
        console.log(`${attackString} ${character.name} was attacked by ${this.name} for ${this.attackDamage}.`);
      }
    })();
    this.item = (function(){
      let randomNumber = Math.floor(Math.random()*itemsLibraryKey.length);
      return itemsLibrary[itemsLibraryKey[randomNumber]]();
    })();
  }
  attack;
  item: Item = null;
}

export let monsterFactory = [
  function(){
    return new Monster("Creep", 1, 25, 25, 5, 20, "~~~~~~");
  },
  function(){
    return new Monster("Zombie", 2, 50, 50, 15, 40, "`~.~`~BRAAAAINSSSS~`~.~`");
  },
  function(){
    return new Monster("Troll", 3, 100, 100, 20, 75, "###SMASH###");
  },
  function(){
    return new Monster("Cave Man", 4, 125, 125, 30, 100, "Goo GOO Ga GA");
  },
  function(){
    return new Monster("AlexBot", 5, 200, 200, 50, 200, "That's easy!");
  }
]
