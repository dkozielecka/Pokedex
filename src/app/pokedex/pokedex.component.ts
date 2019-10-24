import {
  Component,
} from '@angular/core';
import { ApiService } from './services/api.service';


@Component( {
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: [ './pokedex.component.scss' ]
} )
export class PokedexComponent
   {

  constructor( private pokemonApi: ApiService ) {

  }

  get pokemons$() {
    return this.pokemonApi.getAll()
  }

}
