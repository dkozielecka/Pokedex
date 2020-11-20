import {Component, OnInit} from '@angular/core';

import {PokemonApiService} from '../../services/pokemon-api.service';
import {PokedexCard} from '../../models/classes/pokedexCard';
import {LoadingType} from '../../models/interfaces/loading-type.enum';


@Component({
  selector: 'pokedex-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  public pokemons: PokedexCard[];
  public selectedPokemon: PokedexCard;

  constructor(private pokemonApi: PokemonApiService) {
  }

  public ngOnInit(): void {
    this.pokemonApi.initState().subscribe(() => {
      console.log('poszedł complete');
      this.pokemons = this.pokemonApi.getPokemons();
    });
  }

  public loadPokemons(type: string) {
    this.pokemons = this.pokemonApi.getPokemons(type);
  }
}
