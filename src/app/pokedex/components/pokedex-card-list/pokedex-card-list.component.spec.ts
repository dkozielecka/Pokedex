import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexCardListComponent } from './pokedex-card-list.component';

describe('CardsListComponent', () => {
  let component: PokedexCardListComponent;
  let fixture: ComponentFixture<PokedexCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
