import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonApi } from '../models/interfaces/pokemon-api';
import { Observable } from 'rxjs';
import { Card } from '../models/classes/card';
import {
  delay,
  map,
  pluck,
  shareReplay
} from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ApiService {
  private apiURL = 'https://api.pokemontcg.io/v1';

  constructor( private httpClient: HttpClient ) {
  }

  static createCard( rawData: PokemonApi ): Card {
    return new Card( rawData );
  }

  static createCards( rawData: PokemonApi[] ): Card[] {
    return rawData.map(
      data => new Card( data ) );
  }

  private pokemons$ = this.httpClient
    .get<PokemonApi>( `${ this.apiURL }/cards` )
    .pipe(
      pluck( 'cards' ),
      map( ApiService.createCards ),
      delay(1500),
      shareReplay( 1 )
    );

  public getAll(): Observable<Card[ ]> {
    return this.pokemons$
  }

  public getById( id: number ) {
    return this.pokemons$.pipe(
      map(
        cards => cards.find(
          card => +card.id === id ) )
    )
  }
}

