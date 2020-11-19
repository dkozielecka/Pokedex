import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonPayload } from '../models/interfaces/pokemon-payload';
import { Observable } from 'rxjs';
import { PokedexCard } from '../models/classes/pokedexCard';
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

  static createCard( rawData: PokemonPayload ): PokedexCard {
    return new PokedexCard( rawData );
  }

  static createCards( rawData: PokemonPayload[] ): PokedexCard[] {
    return rawData.map(
      data => new PokedexCard( data ) );
  }

  private pokemons$ = this.httpClient
    .get<PokemonPayload>( `${ this.apiURL }/cards` )
    .pipe(
      pluck( 'cards' ),
      map( ApiService.createCards ),
      delay( 500 ),
      shareReplay( 1 )
    )
  ;

  public getAll(): Observable<PokedexCard[ ]> {
    return this.pokemons$
  }

  public getById( id: string ) {
    return this.pokemons$.pipe(
      map(
        cards => cards.find(
          card => card.id === id )
      )
    )
  }
}

