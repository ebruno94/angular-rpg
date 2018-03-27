export class Monster {
  constructor(public name: string, public health: number, public maxHealth: number, public attackDamage: number, attackString){
    this.attack = (() => {
      return function(character){
        character.health -= this.attackDamage;
        console.log(`${attackString} ${character.name} was attacked by ${this.name} for ${this.attackDamage}.`);
      }
    })();
  }
  attack;
}

let zombie = new Monster("Zombie", 50, 50, 15, "`~.~`~BRAAAAINSSSS~`~.~`");
let troll = new Monster("Troll", 100, 100, 20, "###SMASH###");

export let monsterList: Monster[] = [zombie, troll];
