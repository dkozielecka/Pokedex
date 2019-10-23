import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokemons/containers/pokedex/pokedex.component';

import { HeaderComponent } from './pokemons/components/header/header.component';
import { ApiService } from './pokemons/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsListComponent } from './pokemons/components/cards-list/cards-list.component';
import { CardComponent } from './pokemons/components/card/card.component';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardDetailComponent } from './pokemons/components/card-detail/card-detail.component';
import { SelectedPokemonComponent } from './pokemons/containers/selected-pokemon/selected-pokemon.component';
import { SpinnerComponent } from './pokemons/components/spinner/spinner.component';
import { SafeHtmlPipe } from './pokemons/pipes/safe-html.pipe';

@NgModule( {
  declarations: [
    AppComponent,
    PokedexComponent,
    CardComponent,
    HeaderComponent,
    CardsListComponent,
    CardDetailComponent,
    SelectedPokemonComponent,
    SpinnerComponent,
    SafeHtmlPipe,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoTopButtonModule,
    BrowserAnimationsModule
  ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
