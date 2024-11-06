type UserProfile = {
  name: string;
  age: number;
  email: string;
};
const updateProfile = <P, K>(data: P, update: Partial<K>) => {
  return { ...data, ...update };
};
const myProfile: UserProfile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
console.log(updateProfile(myProfile, { age: 35 }));
