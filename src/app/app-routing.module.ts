import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { PokedexComponent } from './pokedex/containers/pokedex/pokedex.component';
import { SelectedPokemonComponent } from './pokedex/containers/selected-pokemon/selected-pokemon.component';

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
