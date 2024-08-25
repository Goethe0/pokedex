import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let pokemonService: jest.Mocked<PokemonService>;
  let router: jest.Mocked<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        PokemonDetailsComponent,
      ],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            getPokemonByName: jest.fn(),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ name: 'Jitterbit' }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(
      PokemonService
    ) as jest.Mocked<PokemonService>;
    router = TestBed.inject(Router) as jest.Mocked<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Display Pokemon data', () => {
    component.isLoading = false;
    component.pokemon = {
      name: 'Jitterbit',
      sprites: { front_default: 'jitterbit.png' },
      base_experience: 20,
      height: 10,
      weight: 10,
      abilities: [{ ability: { name: 'Pass Jitterbit test'} }]
    };
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.nativeElement as HTMLElement;
      const titleElement = compiled.querySelector('mat-card-title');
      const imgElement = compiled.querySelector('img');
      expect(titleElement?.textContent?.trim()).toBe('Jitterbit');
      expect(imgElement?.getAttribute('src')).toBe('jitterbit.png');
    });
  });
});
