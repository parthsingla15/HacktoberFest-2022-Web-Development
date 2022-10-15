const container = document.getElementById("container");
const countryName = document.getElementById("countryName");
const image = document.getElementById("image");
const population = document.getElementById("population");
const input = document.getElementById("value");
const button = document.getElementById("btn");

input.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    populationFunction();
  }
});
const populationFunction = () => {
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((res) => res.json())
    .then((res) => {
      const [data] = res;
      console.log(data);
      image.src = `${data.flags.png}`;
      countryName.innerHTML = `${data.name.common}`;
      population.innerHTML = `Population: ${data.population}`;
      input.value = "";
    });
};
const defaultFunction = () => {
  fetch(`https://restcountries.com/v3.1/name/India`)
    .then((res) => res.json())
    .then((res) => {
      const [data] = res;
      console.log(data);
      image.src = `${data.flags.png}`;
      countryName.innerHTML = `${data.name.common}`;
      population.innerHTML = `Population: ${data.population}`;
      input.value = "";
    });
};
button.addEventListener("click", populationFunction);
defaultFunction();
