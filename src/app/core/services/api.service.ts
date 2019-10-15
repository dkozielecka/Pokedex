import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonApi } from '../models/interfaces/pokemon-api';
import { Card } from '../models/classes/card';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ApiService {
  private apiURL = 'https://api.pokemontcg.io/v1';

  constructor( private httpClient: HttpClient ) {
  }

  public getPokemons(): Observable<PokemonApi[]> {
    return this.httpClient.get( `${ this.apiURL }/cards` )
      .map( ( res ) => res.json() );
  }

  // public getPokemonById( id: number ) {
  // }
}

// private convertPokemonFromApi = ( apiData: Observable<PokemonApi[]> ) => {
//   apiData
//     .subscribe( ( response ) => {
//       this.pokemons = response
//         .map( ( pokemon ) => {
//           return new Card( {
//             id: pokemon.id,
//             name: pokemon.name,
//             imageUrl: pokemon.imageUrl,
//             types: pokemon.types,
//             rarity: pokemon.rarity,
//             attacks: pokemon.attacks
//           } )
//         } )
//     } )
// }
