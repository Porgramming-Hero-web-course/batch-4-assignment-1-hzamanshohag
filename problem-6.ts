interface UserProfile {
  name: string;
  age: number;
  email: string;
}
function updateProfile(
  data: UserProfile,
  update: Partial<UserProfile>
): UserProfile {
  return { ...data, ...update };
}
// const myProfile = {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com",
// };
// console.log(
//   updateProfile(myProfile, {
//     name: "Shohag",
//     age: 25,
//     email: "sk@example.com",
//   })
// );
