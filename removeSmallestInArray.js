function removeSmallest(numbers) {
  let myArr = JSON.parse(JSON.stringify(numbers));
  myArr.splice(myArr.indexOf(Math.min(...myArr)), 1)
  return myArr;
}