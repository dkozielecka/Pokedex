import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { SelectedPokemonComponent } from './containers/selected-pokemon/selected-pokemon.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule( {
  declarations: [
    PokedexComponent,
    CardComponent,
    HeaderComponent,
    CardsListComponent,
    CardDetailComponent,
    SelectedPokemonComponent,
    SafeHtmlPipe,
    SafeHtmlPipe,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoTopButtonModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatToolbarModule

  ],
  providers: [ ApiService ],
  bootstrap: []
} )
export class PokemonsModule {
}
