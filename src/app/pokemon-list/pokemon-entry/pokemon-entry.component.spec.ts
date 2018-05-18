import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEntryComponent } from './pokemon-entry.component';

describe('PokemonEntryComponent', () => {
  let component: PokemonEntryComponent;
  let fixture: ComponentFixture<PokemonEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
