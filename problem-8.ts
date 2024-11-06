interface Valid  {
  name: string;
  age: number;
  email: string;
};

function validateKeys<X>(data: X, value: (keyof X)[]): boolean {
    const userData = data;
    const arrayValue = value;
  const result = arrayValue.every((key) => key in userData);
  return result
}



const person1:Valid = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person1, ["name","name"]));
