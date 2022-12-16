import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { map } from 'rxjs';

@Injectable()
export class Problema2Service {
  constructor(private http: HttpService) { }
  multiplicar(x: number, y: number) {
    return `El resultado de ${x} * ${y} = ${Math.imul(x, y)}`;
  }

  PokeTypeSum(type: string) {
    try {
      const url = `https://pokeapi.co/api/v2/type/${type}`;
      const apiUrl = this.http.get(url).pipe(
        map((response) => response.data),
        map((x) => {
          const list = {
            type: type,
            types_of_pokemons: x.pokemon.length,
          };
          return list;
        }),
      );
      return apiUrl;
    } catch (error) {
      if (error.status === 404) {
        return (error.message = 'Pokemon not found');
      }
    }
  }

  getPokeApiByName(name: string) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const apiUrl = this.http.get(url).pipe(
        map((response) => response.data),
        map((x) => {
          const poke = {
            id: x.id,
          };
          return poke;
        }),
      );
      return apiUrl;
    } catch (error) {
      if (error.status === 404) {
        return (error.message = 'Pokemon not found');
      }
    }
  }
  getPokeApiById(id: number) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const apiUrl = this.http.get(url).pipe(
        map((response) => response.data),
        map((x) => {
          const poke = {
            id: x.id,
            name: x.name,
            hp: x.stats[0].base_stat,
            attack: x.stats[1].base_stat,
            Sp_attack: x.stats[3].base_stat,
            defense: x.stats[2].base_stat,
            Sp_defense: x.stats[4].base_stat,
            speed: x.stats[5].base_stat,
            height: x.height,
            weight: x.weight,
            types: x.types.map((t) => t.type.name),
            img: x.sprites.other['home'].front_default,
          };
          return poke;
        }),
      );
      return apiUrl;
    } catch (error) {
      if (error.status === 404) {
        return (error.message = 'Pokemon not found');
      }
    }
  }
  pokeMatchByType(id: number, type: string) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const apiUrl = this.http.get(url).pipe(
        map((response) => response.data),
        map((x) => {
          const poke = {
            id: x.id,
            name: x.name,
            hp: x.stats[0].base_stat,
            attack: x.stats[1].base_stat,
            Sp_attack: x.stats[3].base_stat,
            defense: x.stats[2].base_stat,
            Sp_defense: x.stats[4].base_stat,
            speed: x.stats[5].base_stat,
            height: x.height,
            weight: x.weight,
            types: x.types.map((t) => t.type.name),
            img: x.sprites.other['home'].front_default,
          };
          return poke.types.some((x) => x === type);
        }),
      );
      return apiUrl;
    } catch (error) {
      if (error.status === 404) {
        return (error.message = 'Pokemon not found');
      }
    }
  }

  getOrderedPoke(lista: number[]) {
    const pokelist = [];
    console.log(lista);
    console.log(lista.length);
    try {
      lista.forEach((i) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const apiUrl = this.http.get(url).pipe(
          map((response) => response.data),
          map((x) => {
            const poke = {
              id: x.id,
              name: x.name,
              hp: x.stats[0].base_stat,
              attack: x.stats[1].base_stat,
              Sp_attack: x.stats[3].base_stat,
              defense: x.stats[2].base_stat,
              Sp_defense: x.stats[4].base_stat,
              speed: x.stats[5].base_stat,
              height: x.height,
              weight: x.weight,
              types: x.types.map((t) => t.type.name),
              img: x.sprites.other['home'].front_default,
            };
            console.log(poke);
            return poke;
          }),
        );
        pokelist.push(apiUrl);
      });
      console.log(pokelist);
      return pokelist;
    } catch (error) {
      if (error.status === 404) {
        return (error.message = 'Pokemon not found');
      }
    }
  }
}
