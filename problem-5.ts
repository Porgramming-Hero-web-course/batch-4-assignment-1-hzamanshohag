const getProperty = <P, K extends keyof P>(data: P, key: K) => {
  return data[key];
};
// const person = { name: "Shohag", age: 25 };
// console.log(getProperty(person, "age"));
