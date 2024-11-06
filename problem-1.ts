type num =number[];
const sumArray = (num:num):number=>{
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    return sum;
}

let myNums = sumArray([1, 2, 3, 4, 5]);
console.log(myNums);

