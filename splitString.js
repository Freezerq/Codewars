function solution(str){
  let arr = [];
  if (str.length % 2 == 0) {
    console.log(str)
    for (let i = 0; i < str.length; i=i + 2) {
      let strr = str[i] + str[i + 1]
      arr.push(strr)
  }
  }
  else {
    for (let i = 0; i < str.length - 1; i=i + 2) {
      let strr = str[i] + str[i + 1]
      arr.push(strr)
     
  }
  arr.push(str[str.length - 1] + '_') 
  }
  
  return arr
}