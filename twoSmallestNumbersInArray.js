function sumTwoSmallestNumbers(numbers) {  
  let myArr = numbers;
  let minFirst = Math.min(...myArr);
  myArr.splice(myArr.indexOf(Math.min(...myArr)), 1)
  let minSecond = Math.min(...myArr);
  return minFirst + minSecond;
}