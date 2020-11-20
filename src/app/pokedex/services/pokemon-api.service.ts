import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map, pluck, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {PokedexCard} from '../models/classes/pokedexCard';
import {Pokemon} from '../models/interfaces/pokemon';
import {PokedexState} from '../models/interfaces/pokedex-state';
import {LoadingType} from '../models/interfaces/loading-type.enum';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PokemonApiService {
  private apiURL = 'https://api.pokemontcg.io/v1';
  private state: PokedexState;

  constructor(private http: HttpClient) {
  }

  public getPokemons(type?: string): PokedexCard[] {
    if (!type) {
      this.getFilteredPokemons();
    }

    if (type === LoadingType.Next) {
      this.state.offSet = this.state.offSet + 4;
      return this.getFilteredPokemons();
    } else {
      this.state.offSet = (this.state.offSet - 4) >= 0 ? (this.state.offSet - 4) : 0;
      return this.getFilteredPokemons();
    }
  }

  public initState(): Observable<void> {
    return new Observable(observer => {
      this.getAllPokemons().subscribe(pokemons => {
        this.state = {
          pokemons, offSet: 0
        };
        observer.next();
        observer.complete();
      });
    });
  }

  private getFilteredPokemons(): PokedexCard[] {
    return this.state.pokemons.filter((pokemon, index) => index >= this.state.offSet && index < this.state.offSet + 4);
  }

  private getAllPokemons(): Observable<PokedexCard[]> {
    return this.http.get<{ cards: Pokemon[] }>(`${this.apiURL}/cards`).pipe(
      pluck('cards'),
      map(pokemons => pokemons.map(pokemon => new PokedexCard(pokemon))),
      shareReplay(1));
  }

  //
  // public getPokemonById(id: string) {
  //   return this.pokemons$.pipe(
  //     map(cards => cards.find(card => card.id === id))
  //   );
  // }
}

