import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

import {PokedexCard} from '../../models/classes/pokedexCard';

@Component({
  selector: 'pokedex-card-detail',
  templateUrl: './pokedex-pokedex-card-detail.html',
  styleUrls: ['./pokedex-pokedex-card-detail.scss']
})
export class PokedexCardDetailComponent {
  @Input() card: PokedexCard;

  constructor(private sanitizer: DomSanitizer) {

  }

  private get imgContent(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.card.imageUrlHiRes);
  }
}
