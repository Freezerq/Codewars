function highAndLow(numbers){
  let myArr = numbers.split(' ');
  let myArrNumbers = [];
  for (let i = 0; i < myArr.length; i++) {
    myArrNumbers.push(Number(myArr[i]));
  }
  let returnState = String(Math.max(...myArrNumbers)) + " " + String(Math.min(...myArrNumbers))
  return returnState;
}