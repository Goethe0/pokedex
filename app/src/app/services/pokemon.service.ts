import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'http://localhost:3000/api/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  searchPokemonByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/${name}`);
  }
}
