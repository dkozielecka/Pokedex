import {
  Component,
} from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-selected-pokemon',
  templateUrl: './selected-pokemon.component.html',
  styleUrls: [ './selected-pokemon.component.scss' ]
} )
export class SelectedPokemonComponent {
  constructor(
    private pokemonApi: ApiService,
    private route: ActivatedRoute ) {
  }

  get pokemon$() {
    return this.pokemonApi.getById( this.route.snapshot.params.id )
  }
}
