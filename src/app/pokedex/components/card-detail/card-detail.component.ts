import {
  Component,
  Input
} from '@angular/core';
import { Card } from '../../models/classes/card';
import {
  DomSanitizer,
  SafeUrl
} from '@angular/platform-browser';

@Component( {
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: [ './card-detail.component.scss' ]
} )
export class CardDetailComponent {
  @Input() card: Card;

  constructor( private sanitizer: DomSanitizer ) {

  }

  private get imgContent(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl( this.card.imageUrlHiRes );
  }
}
