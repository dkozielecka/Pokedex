import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import { SelectedPokemonComponent } from './containers/selected-pokemon/selected-pokemon.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
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
  ]
})
export class PokedexModule { }
