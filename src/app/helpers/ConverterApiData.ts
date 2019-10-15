import { PokemonApi } from '../core/models/interfaces/pokemon-api';
import { Pokemon } from '../core/models/interfaces/pokemon';
import { Observable } from 'rxjs';

// export class ConverterApiData {
//   private pokemons = Array<Pokemon>();
//
//   public convertPokemonFromApi = ( apiData: Observable<PokemonApi[]> ): Pokemon[] => {
//     apiData
//       .subscribe( ( response ) => {
//         this.pokemons = response
//           .map( ( pokemon ) => {
//             return new Card( {
//               id: pokemon.id,
//               name: pokemon.name,
//               imageUrl: pokemon.imageUrl,
//               types: pokemon.types,
//               rarity: pokemon.rarity,
//               attacks: pokemon.attacks
//             } )
//           } )
//       } );
//     return this.pokemons
//   };
// }
//
