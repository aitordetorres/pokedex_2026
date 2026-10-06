import * as pokeApi from "./pokeApi/api.js";

window.addEventListener("load", function () {

    let form1 = document.getElementById("form1");

    form1.addEventListener("submit", async function ($e) {

        $e.preventDefault();

        let formData = new FormData(this);

        let pokemonNumber = formData.get("pokedex-number");

        let pokemonData = await pokeApi.getPokemonById(pokemonNumber);

        let pokemonHeight = pokemonData.height / 10;


        let pokemonWeight = pokemonData.weight / 10;
       
        /*traducir de ingles a español se busca en la api pokemonType y luego typeTranslations */
        let pokemonType = pokemonData.types[0].type.name;

        let typeTranslations = {
            normal: "normal",
            fire: "fuego",
            water: "agua",
            electric: "eléctrico",
            grass: "planta",
            ice: "hielo",
            fighting: "lucha",
            poison: "veneno",
            ground: "tierra",
            flying: "volador",
            psychic: "psíquico",
            bug: "bicho",
            rock: "roca",
            ghost: "fantasma",
            dragon: "dragón",
            dark: "siniestro",
            steel: "acero",
            fairy: "hada"
        };

        pokemonType = typeTranslations[pokemonType];
        /*cambiar de palabra elctric ingles a electrico español*/

        /*TARJETA POKEMON */
        let pokemonContainer = document.getElementById("pokemon-container");

        pokemonContainer.innerHTML = `
            <div class="pokemon-card">

                <p class="pokemon-number">#${pokemonData.id}</p>

                <h2>${pokemonData.name}</h2>

                <img 
                    src="${pokemonData.sprites.front_default}" 
                    alt="${pokemonData.name}"
                    class="pokemon-image"
                >

                <div class="pokemon-info">

                    <div class="pokemon-type">
                        ${pokemonType}
                    </div>

                    <div class="pokemon-measurements">

                        <div>
                            <span>Altura</span>
                            <strong>${pokemonHeight} m</strong>
                        </div>

                        <div>
                            <span>Peso</span>
                            <strong>${pokemonWeight} kg</strong>
                        </div>

                    </div>

                </div>

            </div>
        `;

    });

});