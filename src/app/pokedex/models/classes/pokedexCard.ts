import { Pokemon } from '../interfaces/pokemon';
import { Attack } from '../interfaces/attack';

export class PokedexCard
  implements Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  rarity: string;
  series: string;
  attacks: Attack[];

  constructor( data: Pokemon ) {
    this.id = data.id;
    this.name = data.name;
    this.imageUrl = data.imageUrl;
    this.imageUrlHiRes = data.imageUrlHiRes;
    this.types = data.types;
    this.rarity = data.rarity;
    this.attacks = data.attacks;
    this.series = data.series;
  }
}
