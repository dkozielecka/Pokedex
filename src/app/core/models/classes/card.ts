import { Pokemon } from '../interfaces/pokemon';
import { Attack } from '../interfaces/attack';

export class Card
  implements Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  types: string[];
  rarity: string;
  attacks: Attack[];

  constructor( data: Pokemon ) {
    this.id = data.id;
    this.name = data.name;
    this.imageUrl = data.imageUrl;
    this.types = data.types;
    this.rarity = data.rarity;
    this.attacks = data.attacks;
  }
}
