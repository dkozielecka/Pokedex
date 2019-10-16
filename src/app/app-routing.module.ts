import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import { CardComponent } from './components/card/card.component';

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
    component: CardComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
