
function convertir() {
  const entrada = document.getElementById("celsius").value;
  const tempCelsius = parseFloat(entrada);

  if (isNaN(tempCelsius)) {
    console.error("❌ Por favor, ingrese un número válido.");
    return;
  }

  const tempFahrenheit = (tempCelsius * 1.8) + 32;
  const tempKelvin = tempCelsius + 273.15;

  console.log(`${tempCelsius} °C = ${tempFahrenheit} °F`);
  console.log(`${tempCelsius} °C = ${tempKelvin} K`);

  resultadoF.textContent = `${tempCelsius} °C = ${tempFahrenheit} °F`;
  resultadoK.textContent = `${tempCelsius} °C = ${tempKelvin} K`;
}
