import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAbilityInfoComponent } from './pokemon-ability-info.component';

describe('PokemonAbilityInfoComponent', () => {
  let component: PokemonAbilityInfoComponent;
  let fixture: ComponentFixture<PokemonAbilityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonAbilityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAbilityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
