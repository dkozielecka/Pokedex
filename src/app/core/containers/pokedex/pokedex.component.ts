import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  private apitest;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.apitest = this.api.getPokemons();
    console.log( this.apitest );
  }

}
