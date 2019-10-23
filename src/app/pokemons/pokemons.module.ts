import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { SelectedPokemonComponent } from './containers/selected-pokemon/selected-pokemon.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';

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
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoTopButtonModule,
    BrowserAnimationsModule
  ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]
} )
export class PokemonsModule {
}
