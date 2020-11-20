import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {routes} from './app.routes';
import {PokemonApiService} from './pokedex/services/pokemon-api.service';
import {PokedexModule} from './pokedex/pokedex.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PokedexModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  providers: [PokemonApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
