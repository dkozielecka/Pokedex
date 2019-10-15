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

  constructor( pokemonApi: ApiService ) {

  }

  ngOnInit() {
    this.api.getPokemons().subscribe(e => console.log(e) )
  }

  private getPokemonFromData() {

  }

}
