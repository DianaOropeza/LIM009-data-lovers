const totalPokemons = POKEMON.pokemon;
const arrListaPokemones = pokemon.listaPokemons(totalPokemons);
const contenedorPokemones = document.getElementById('contenedor');
const mostrarPokemones = document.getElementById('mostrarPokemones');
const sltTiposPokemon = document.getElementById('tiposPokemon');
const sltOrdenar = document.getElementById('ordenarPokemon');
const btnlimpiar = document.getElementById('limpiar');
const promedio = document.getElementById('promedio');
const videoPokemon = document.getElementById('video');
const imagenPokemon = document.getElementById('imagenPokemon');

// Imprimir lista de pokemones
const listaDePokemones = (data) => {
  let mostrar = '';
  for (let i = 0; i < data.length; i++) {
    let caja = `
    <div>
	<img  src="${ data[i].img}" />
	<p> Nombre : ${ data[i].name}</p>
	<p> Tipo : ${ data[i].type}</p>
	<p> Caramelos: ${ data[i].candyCount}</p>
	<p> Huevo: ${data[i].egg === 'Not in Eggs' ? 'no tiene' : data[i].egg}</p>
	<p> Debilidades: ${data[i].weaknesses}</p>
	<p> Evolución: ${data[i].nextEvolution === undefined ? 'No tiene' : data[i].nextEvolution[0].name}</p>
	</div>
`;		mostrar += caja;  
  }contenedorPokemones.innerHTML = mostrar;
};

// Mostrar pokemones
mostrarPokemones.addEventListener('click', () => {
  listaDePokemones(arrListaPokemones);
  imagenPokemon.style.display = 'none';
});

// Mostrar los pokemones por orden A-Z Z-A
sltOrdenar.addEventListener('change', () => {
  const ordenandoPokemons = pokemon.ordenPokemones(totalPokemons, sltOrdenar.value);
  listaDePokemones(ordenandoPokemons);
  imagenPokemon.style.display = 'none';
});

// Filtrar pokemones por tipo
sltTiposPokemon.addEventListener('change', () => {
  const filtrandoPokemones = pokemon.filtrarPokemones(totalPokemons, sltTiposPokemon.value);
  listaDePokemones(filtrandoPokemones);
  const promedioPokemon = pokemon.computeStats(totalPokemons, filtrandoPokemones);
  promedio.innerHTML = 'El promedio de pokemones por tipo ' + sltTiposPokemon.value + ' es: ' + promedioPokemon + '%';
  imagenPokemon.style.display = 'none';
});

//  limpiar la pantalla
btnlimpiar.addEventListener('click', () => {
  contenedorPokemones.innerHTML = ' ';
  videoPokemon.style.display = 'none';
  imagenPokemon.style.display = 'block';
});
