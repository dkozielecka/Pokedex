import {
  Component,
  OnInit
} from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component( {
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: [ './pokedex.component.scss' ]
} )
export class PokedexComponent
  implements OnInit {

  constructor( private pokemonApi: ApiService ) {

  }

  ngOnInit() {
  }

  get pokemons$() {
    return this.pokemonApi.getAll()
  }

}
