export class Item {
  constructor(public name: string, attribute, magnitude ){

    this.useItem = (() => {
      return function(character){
        character[attribute] += magnitude;
        return `${this.name} has been used. ${character.name}'s ${attribute} has been changed by ${magnitude}'`;
      }
    })();
  }
  useItem(character){};
}

let healthPotion = new Item("Health Potion", "health", 20);
let intelligencePotion = new Item("Intelligence Potion", "intelligence", 5);
let defensePotion = new Item("Defense Potion", "defense", 5);

export let itemList: Item[] = [healthPotion, intelligencePotion, defensePotion];
