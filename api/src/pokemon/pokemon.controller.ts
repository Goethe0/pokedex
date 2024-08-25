import { Controller, Get, Query, Param } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";

@Controller("pokemon")
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  findAll(
    @Query("limit") limit: number = 10,
    @Query("offset") offset: number = 0
  ) {
    return this.pokemonService.findAll(limit, offset);
  }

  @Get(":name")
  findOne(@Param("name") name: string) {
    return this.pokemonService.findOne(name);
  }

  @Get("/search/:name")
  findByName(@Param("name") name: string) {
    return this.pokemonService.findByName(name);
  }
}
