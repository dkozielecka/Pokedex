import {
  Component,
  Input
} from '@angular/core';
import { PokedexCard } from '../../models/classes/pokedexCard';

@Component( {
  selector: 'pokedex-card-list',
  templateUrl: './pokedex-card-list.component.html',
  styleUrls: [ './pokedex-card-list.component.scss' ]
} )
export class PokedexCardListComponent {
  @Input() cards: PokedexCard[];
}
