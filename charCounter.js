function XO(str) {
  let xCount = 0;
  let oCount = 0;
  let newStr = str.toLowerCase();
  
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] == 'o') {
      oCount += 1;
    }
    if (newStr[i] == 'x') {
      xCount += 1;
    }
    
    
  }
  return oCount == xCount;
}