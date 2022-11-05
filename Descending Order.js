function descendingOrder(n){
  let myArr = String(n).split('');

  let myArrNumbers = [];

  for (let i = 0; i < myArr.length; i++) {
    myArrNumbers.push(Number(myArr[i]));
  }
  
  myArrNumbers.sort();
  
  myArrNumbers.reverse();
  let sttt = Number(myArrNumbers.join(''));
  
  return sttt;
}