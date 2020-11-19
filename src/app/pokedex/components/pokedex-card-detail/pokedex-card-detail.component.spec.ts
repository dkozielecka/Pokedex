import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexCardDetailComponent } from './pokedex-card-detail.component';

describe('CardDetailComponent', () => {
  let component: PokedexCardDetailComponent;
  let fixture: ComponentFixture<PokedexCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
