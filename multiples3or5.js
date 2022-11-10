function solution(number){
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push(i)
    }
    if (i % 3 == 0 && arr.indexOf(i) == - 1) {
      arr.push(i)
    }

    if (i % 5 == 0 && arr.indexOf(i) == - 1) {
      arr.push(i)
    }
  }

  return arr.reduce((total, arr) => total + arr, 0)
}