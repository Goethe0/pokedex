import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from '../../services/pokemon.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule
      ],
      providers: [PokemonService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadMore on init', () => {
    const loadMoreSpy = jest.spyOn(component, 'loadMore');
    component.ngOnInit();
    expect(loadMoreSpy).toHaveBeenCalled();
  });

});
