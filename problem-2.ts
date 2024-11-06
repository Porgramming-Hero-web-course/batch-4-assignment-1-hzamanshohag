type num2 = number[];
const removeDuplicates = (num2: num2): number[] => {
  const newArry = num2.filter((item, index) => num2.indexOf(item) === index);
  return newArry;
};

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,6,8,8,9,91,100,100,1]));
