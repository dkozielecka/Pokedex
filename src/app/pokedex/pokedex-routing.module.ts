import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SelectedPokemonComponent} from './components/selected-pokemon/selected-pokemon.component';

const routes: Routes = [
  {
    path: 'pokedex-card/:id',
    component: SelectedPokemonComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PokedexRoutingModule {
}
