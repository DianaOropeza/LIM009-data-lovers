/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// Lista de pokemones y caracteristicas
const listaPokemons = (data) => {
  let arraLista = [];
  for (let i = 0; i < data.length; i++) {
    arraLista.push({
      name: data[i].name, img: data[i].img, type: data[i].type, candyCount: data[i].candy_count, egg: data[i].egg,
      weaknesses: data[i].weaknesses, nextEvolution: data[i].next_evolution
    });
  } return arraLista;
};

// funcion filtra los tipos de pokemones
const filtrarPokemones = (data, tipo) => {
  let arrayFiltrar = [];
  arrayFiltrar = data.filter((elemento) => {
    for (let i = 0; i < elemento.type.length; i++) {
      if (elemento.type[i] === tipo) {
        return 1;
      }
    }
  });
  return arrayFiltrar;
};

// Funcion ordenar pokemones asc y desc
const ordenPokemones = (data, orden) => {
  data.sort((ab, ba) => {
    if (ab.name > ba.name) {
      return 1;
    } else if (ab.name < ba.name) {
      return -1;
    } else; 
  });
  if (orden === 'ordenaz') {
    return data; 
  } else if (orden === 'ordenza') {
    return data.reverse(); 
  } 
};

const porcentajePorTipo = (data, tipo) => {
  let porcentaje = tipo.length / data.length;
  return porcentaje;
};

window.pokemon = { listaPokemons, filtrarPokemones, ordenPokemones, porcentajePorTipo };

