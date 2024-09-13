//2.Volúmen de un Tanque de Agua
//FUNCION

function volumenTanque(diametro, unidadD, altura, unidadH) {
  if (unidadD == "cm") {
    diametro = diametro / 100;
  }
  if (unidadH == "cm") {
    altura = altura / 100;
  }

  let volumenM = Math.PI * (diametro / 2) ** 2 * altura;
  let volumenLitros = volumenM * 1000;
  volumenLitros = Math.round(volumenLitros * 10) / 10;

  return volumenLitros;
}

//TEST
//1
test("2m y 3m ", () => {
  expect(volumenTanque(2, "m", 3, "m")).toBe(9424.8);
});
//2
test("2m y 500cm ", () => {
  expect(volumenTanque(2, "m", 500, "cm")).toBe(15708);
});

//3
test("2m y 5m ", () => {
  expect(volumenTanque(2, "m", 5, "m")).toBe(15708);
});

//4
test("200cm y 5m ", () => {
  expect(volumenTanque(200, "cm", 5, "m")).toBe(15708);
});

//5
test("200cm y 500cm ", () => {
  expect(volumenTanque(200, "cm", 500, "cm")).toBe(15708);
});
