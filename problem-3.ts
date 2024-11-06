function countWordOccurrences(string: string, word: string): number {
  const wordCounter = string.toLowerCase().split(word.toLowerCase()).length - 1;
  return wordCounter;
}
// console.log(
//   countWordOccurrences(
//     "is great. I love typescript typescript! type-script",
//     "typescript"
//   )
// );
