import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import { CardComponent } from './components/card/card.component';
import { SelectedPokemonComponent } from './containers/selected-pokemon/selected-pokemon.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cards',
    pathMatch: 'full'
  },
  {
    path: 'cards',
    component: PokedexComponent,
    pathMatch: 'full',
  },
  {
    path: 'card/:id',
    component: SelectedPokemonComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
