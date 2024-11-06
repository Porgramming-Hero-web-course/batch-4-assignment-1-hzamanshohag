interface Valid {
  name: string;
  age: number;
  email: string;
}

function validateKeys<X extends Valid>(data: X, value: (keyof X)[]): boolean {
  const userData = data;
  const userValue = value;
  const result = userValue.every((key) => key in userData);
  return result;
}

// const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person1, ["age"]));
