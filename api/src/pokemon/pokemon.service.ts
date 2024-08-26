import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class PokemonService {
  constructor(private httpService: HttpService) {}

  async findAll(limit: number, offset: number): Promise<any> {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    return firstValueFrom(this.httpService.get(apiUrl)).then(
      (response) => response.data
    );
  }

  async findOne(name: string): Promise<any> {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return firstValueFrom(
      this.httpService.get(apiUrl).pipe(
        map((response) => response.data),
        catchError((error) => {
          if (error.response.status === 404) {
            return of({ message: "No result" });
          } else {
            throw new HttpException(error.response.data, error.response.status);
          }
        })
      )
    );
  }

  /**
   * This is not ideal, it is used for this test purpose only and due
   * to the fact that the Pokedex API doesn't support search terms
   * @param name
   */
  async findByName(name: string): Promise<any> {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=5000`;
    return firstValueFrom(this.httpService.get(apiUrl)).then(
      (response) => {
        const results = response.data.results.filter(obj => obj.name.includes(name?.toLowerCase()));
        return {...response.data, results, count: results.length };
      }
    );
  }


}
