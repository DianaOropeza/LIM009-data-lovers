global.window = global;
require('../src/data');
require('./data.spec.js');


describe(pokemon.listaPokemons, () => {  
  it('es una función', () => {
    expect(typeof window.pokemon.listaPokemons).toBe('function');
  });

  it('debería retornar una lista', () => {
    expect(window.pokemon.listaPokemons(data)).not.toBe(data);
  });
});


const data = [{'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'], 'candy_count': 25, 'egg': '2 km', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'], 'next_evolution': {'name': 'Ivysaur'}},
  {'name': 'Charmander', 'img': 'http://www.serebii.net/pokemongo/pokemon/004.png', 'type': 'Fire', 'candy_count': 25, 'egg': '2 km', 'weaknesses': [ 'Wate', 'Ground', 'Rock'], 'next_evolution': {'name': 'Charmeleon'}}];

describe(window.pokemon.filtrarPokemones, () => {  
  it('es una función', () => {
    expect(typeof window.pokemon.filtrarPokemones).toBe('function');
  });
  
  it('debería retornar un pokemon tipo Grass', () => {
    expect(window.pokemon.filtrarPokemones(data, tipo)).toEqual(filtrar);
  });
});

const tipo = 'Grass';
const filtrar = [{'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'], 'candy_count': 25, 'egg': '2 km', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'], 'next_evolution': {'name': 'Ivysaur'}}];

describe(window.pokemon.ordenPokemones, () => {  
  it('es una función', () => {
    expect(typeof window.pokemon.ordenPokemones).toBe('function');
  });
  
  it('debería retornar orden de AZ', () => {
    expect(window.pokemon.ordenPokemones(dataOrdenar, ordenAZ)).toEqual(ordenadoAZ);
  });
  it('debería retornar orden de ZA', () => {
    expect(window.pokemon.ordenPokemones(dataOrdenar, ordenZA)).toEqual(ordenadoZA);
  });
});

const dataOrdenar = [{'name': 'Paras'}, {'name': 'Zubat'}, {'name': 'Bulbasaur'}, {'name': 'Ivysaur'}, {'name': 'Venusaur'}];
const ordenAZ = 'ordenaz';
const ordenZA = 'ordenza';
const ordenadoAZ = [{'name': 'Bulbasaur'}, {'name': 'Ivysaur'}, {'name': 'Paras'}, {'name': 'Venusaur'}, {'name': 'Zubat'}];
const ordenadoZA = [{'name': 'Zubat'}, {'name': 'Venusaur'}, {'name': 'Paras'}, {'name': 'Ivysaur'}, {'name': 'Bulbasaur'}];

describe(window.pokemon.computeStats, () => {  
  it('es una función', () => {
    expect(typeof window.pokemon.computeStats).toBe('function');
  });
  
  it('debería retornar porcentaje de pokemones por tipo', () => {
    expect(window.pokemon.computeStats(data, tipo)).toEqual(porcentaje);
  });
});

const porcentaje = (tipo.length / data.length) ;

