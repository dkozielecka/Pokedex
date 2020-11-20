import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {PokedexCard} from '../../models/classes/pokedexCard';

@Component({
  selector: 'pokedex-card-detail',
  templateUrl: './pokedex-card-detail.component.html',
  styleUrls: ['./pokedex-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokedexCardDetailComponent {
  @Input() card: PokedexCard;
}
