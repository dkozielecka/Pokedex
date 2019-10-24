import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PokedexComponent } from './pokedex.component';
import { SelectedPokemonComponent } from './components/smart/selected-pokemon/selected-pokemon.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CardComponent } from './components/dumb/card/card.component';
import { CardsListComponent } from './components/dumb/cards-list/cards-list.component';
import { CardDetailComponent } from './components/dumb/card-detail/card-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';
import { PokedexRoutingModule } from './pokedex-routing.module';

@NgModule( {
  declarations: [
    PokedexComponent,
    CardComponent,
    CardsListComponent,
    CardDetailComponent,
    SelectedPokemonComponent,
    SafeHtmlPipe
  ],
  exports: [
    PokedexComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoTopButtonModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    SharedModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
