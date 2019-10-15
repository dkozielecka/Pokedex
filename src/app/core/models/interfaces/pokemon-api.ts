import { Attack } from './attack';
import { Resistance } from './resistance';
import { Weakness } from './weakness';

export interface PokemonApi {
  id: string,
  name: string,
  nationalPokedexNumber: number,
  imageUrl: string,
  imageUrlHiRes: string,
  types: string[],
  supertype: string,
  subtype: string,
  hp: string,
  retreatCost: string[],
  convertedRetreatCost: number,
  number: string,
  artist: string,
  rarity: string,
  series: string,
  set: string,
  setCode: string,
  attacks: Attack[],
  resistances: Resistance[],
  weaknesses: Weakness[]
}


