import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/interfaces/pokemon';
import { PokemonApi } from '../models/interfaces/pokemon-api';

@Injectable( {
  providedIn: 'root'
} )
export class ApiService {
  private apiURL = 'https://api.pokemontcg.io/v1';

  constructor( private httpClient: HttpClient ) {
  }

  public getPokemons() {
    return this.httpClient.get<PokemonApi[]>( `${ this.apiURL }/cards` );
  }

  public getPokemonById( id: number ) {
  }

}
