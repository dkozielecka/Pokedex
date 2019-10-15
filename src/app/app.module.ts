import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './core/containers/pokedex/pokedex.component';
import { CardComponent } from './core/containers/card/card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ApiService } from './core/services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    CardComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
