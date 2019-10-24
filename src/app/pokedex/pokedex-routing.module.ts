import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { SelectedPokemonComponent } from './components/smart/selected-pokemon/selected-pokemon.component';

const routes: Routes = [
  {
    path: 'card/:id',
    component: SelectedPokemonComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ]
})
export class PokedexRoutingModule { }
