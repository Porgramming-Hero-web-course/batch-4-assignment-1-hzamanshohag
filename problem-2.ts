type num2 = number[];
const removeDuplicates = (num2:num2):number[] =>{
    return [...new Set(num2)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,6,8,8,9,9]));