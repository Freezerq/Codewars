function adjacentElementsProduct(array) {
  let minNumber = array[0] * array[1];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] * array[i + 1] > minNumber){
      minNumber = array[i] * array[i + 1];
    } 
  }
  return minNumber
}