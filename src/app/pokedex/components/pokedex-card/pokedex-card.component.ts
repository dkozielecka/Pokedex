import {Component, Input} from '@angular/core';

import {PokedexCard} from '../../models/classes/pokedexCard';

@Component({
  selector: 'pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss']
})
export class PokedexCardComponent {
  @Input() card: PokedexCard;
}
