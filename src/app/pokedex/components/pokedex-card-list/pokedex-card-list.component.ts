import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PokedexCard} from '../../models/classes/pokedexCard';
import {LoadingType} from '../../models/interfaces/loading-type.enum';

@Component({
  selector: 'pokedex-card-list',
  templateUrl: './pokedex-card-list.component.html',
  styleUrls: ['./pokedex-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokedexCardListComponent {
  @Input() cards: PokedexCard[];

  @Output() loadPokemons = new EventEmitter<string>();

  public loadingType = LoadingType;

  public load(type: LoadingType) {
    this.loadPokemons.emit(type);
  }
}
