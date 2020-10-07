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
