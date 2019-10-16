import { Attack } from './attack';

export interface Pokemon {
  id: string,
  name: string,
  imageUrlHiRes: string,
  series: string,
  types: string[],
  rarity: string,
  attacks: Attack[],
}
