import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './containers/pokedex/pokedex.component';

import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardComponent } from './components/card/card.component';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { SelectedPokemonComponent } from './containers/selected-pokemon/selected-pokemon.component';

@NgModule( {
  declarations: [
    AppComponent,
    PokedexComponent,
    CardComponent,
    HeaderComponent,
    CardsListComponent,
    CardDetailComponent,
    SelectedPokemonComponent
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
