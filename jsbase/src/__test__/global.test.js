const text = "Hola Mundo";

const fruits = ["manzana", "melon", "banana"];

//strings
test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

//Arrays
test("Tenemos una banana?", () => {
  expect(fruits).toContain("banana");
});

//numbers
test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

//bool
test("Verdadero", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Probar un Callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

//PROMISE
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("probar una promesa", () => {
  return reverseString2("Hola").then((String) => {
    expect(String).toBe("aloH");
  });
});

//async and await
test("Probar async/await", async () => {
  const String = await reverseString2("hola");
  expect(String).toBe("aloh");
});

//Correr algo antes y después de nuestras pruebas
// afterEach(() => console.log("Despues de cada prueba"));
// afterAll(() => console.log("Despues de todas las pruebas"));

// beforeEach(() => console.log("Antes de cada prueba"));
// beforeAll(() => console.log("Antes de todas las pruebas"));
