//1.Validar código PIN
//FUNCION
function validarPIN(pin) {
  const regex = /^(\d{4}|\d{6})$/;
  return regex.test(pin);
}

//TEST
//1
test("7 digitos", () => {
  expect(validarPIN("12354")).toBe(false);
});
//2
test("6 digitos", () => {
  expect(validarPIN(368941)).toBe(true);
});
//3
test("4 digitos", () => {
  expect(validarPIN("2356")).toBe(true);
});
//4
test("letras en el pin", () => {
  expect(validarPIN("s562")).toBe(false);
});
//5
test("4 letras", () => {
  expect(validarPIN("asdr")).toBe(false);
});
