for (let i = 1; i <= 1; i++) {
  i = prompt("Ingrese un número para saber si es par o impar");
  if (i % 2 === 0) {
    console.log("El número es par");
  } else if (i % 2 === 1) {
    console.log("El número es impar");
  } else if (i === 0) {
    console.log("Ingrese un número diferente a 0");
  }
}
