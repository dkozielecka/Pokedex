import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './pokemons/services/api.service';
import { PokemonsModule } from './pokemons/pokemons.module';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonsModule
  ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
