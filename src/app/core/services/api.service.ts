import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonApi } from '../models/interfaces/pokemon-api';
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
    return this.httpClient.get<PokemonApi[]>( `${ this.apiURL }/cards` )
  }

  public getPokemonById( id: number ) {
  }
}

