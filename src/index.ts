for (let i = 1; i <= 1; i++) {
  i = prompt("Ingrese un número para saber si es par o impar");
  if (i == 0) {
    console.log("Ingrese un número diferente a 0");
    break;
  } else if (i % 2 == 1) {
    console.log("El número es impar");
    break;
  } else if (i % 2 == 0) {
    console.log("El número es par");
    break;
  }
}
