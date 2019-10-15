import {
  Component,
  OnInit
} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { PokemonApi } from '../../models/interfaces/pokemon-api';

@Component( {
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: [ './pokedex.component.scss' ]
} )
export class PokedexComponent
  implements OnInit {
  private pokemons: Observable<PokemonApi[]>;

  constructor( private pokemonApi: ApiService ) {

  }

  ngOnInit() {
    this.pokemons = this.pokemonApi.getPokemons();
    this.pokemons.subscribe(evt => console.log(evt))
  }

  private getPokemonFromData() {

  }

}
