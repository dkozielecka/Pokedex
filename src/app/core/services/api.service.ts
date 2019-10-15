import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/interfaces/pokemon';
import { PokemonApi } from '../models/interfaces/pokemon-api';
import { Observable } from 'rxjs';
import { Card } from '../models/classes/card';

@Injectable( {
  providedIn: 'root'
} )
export class ApiService {
  private apiURL = 'https://api.pokemontcg.io/v1';
  private pokemons = Array<Card>();

  constructor( private httpClient: HttpClient ) {
  }

  public getPokemons() {
    const res = this.httpClient.get<PokemonApi[]>( `${ this.apiURL }/cards` );
    return this.convertPokemonFromApi(res);
  }

  public getPokemonById( id: number ) {
  }

  private convertPokemonFromApi = ( apiData: Observable<PokemonApi[]> ) => {
    apiData
      .subscribe( ( response ) => {
        this.pokemons = response
          .map( ( pokemon ) => {
            return new Card( {
              id: pokemon.id,
              name: pokemon.name,
              imageUrl: pokemon.imageUrl,
              types: pokemon.types,
              rarity: pokemon.rarity,
              attacks: pokemon.attacks
            } )
          } )
      } )
  }
}
