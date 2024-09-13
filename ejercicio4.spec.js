//4. Calcular el Siglo
//FUNCION
function calcularSiglo(año) {
  let siglo = Math.ceil(año / 100);
  return siglo;
}

//TEST
//1
test("siglo 20", () => {
  expect(calcularSiglo(2000)).toBe(20);
});

//2
test("siglo 15", () => {
  expect(calcularSiglo(1456)).toBe(15);
});

//3
test("siglo 21", () => {
  expect(calcularSiglo(2024)).toBe(21);
});

//4
test("siglo 19", () => {
  expect(calcularSiglo(1899)).toBe(19);
});

//5
test("siglo 10", () => {
  expect(calcularSiglo(950)).toBe(10);
});
