export class Item {
  constructor(public name: string, attribute, magnitude ){

    this.useItem = (() => {
      return function(character){
        character[attribute] += magnitude;
        console.log(`${this.name} has been used. ${character.name}'s ${attribute} has been changed by ${magnitude}'`);
      }
    })();
  }
  useItem(character){};
}

export let itemsLibrary = {
   healthPotion: function(){ return new Item("Health Potion", "health", 20); },
   manaPotion: function(){ return new Item("Mana Potion", "mana", 20); },
   strengthPotion : function(){ return new Item("Strength Potion", "strength", 5); },
   intelligencePotion : function(){ return new Item("Intelligence Potion", "intelligence", 5); },
   dexterityPotion : function(){ return new Item("Dexterity Potion", "dexterity", 5); },
   defensePotion : function(){ return new Item("Defense Potion", "defense", 5); },
}

export let itemsLibraryKey = ["healthPotion", "manaPotion", "strengthPotion", "intelligencePotion", "dexterityPotion", "defensePotion"]; 

export let itemList: Item[];
