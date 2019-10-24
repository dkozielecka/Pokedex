import {
  Component,
  Input
} from '@angular/core';
import { Card } from '../../../models/classes/card';

@Component( {
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: [ './cards-list.component.scss' ]
} )
export class CardsListComponent {
  @Input() cards: Card[];
}
