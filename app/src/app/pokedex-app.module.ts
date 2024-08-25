import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './pokedex-app-routing.module';
import { PokedexAppComponent } from './pokedex-app.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [PokemonService, provideAnimationsAsync()],
  declarations: [PokedexAppComponent, PokemonListComponent],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
