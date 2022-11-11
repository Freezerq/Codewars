function comp(array1, array2){
  if (array1 == null || array2 == null) {
    return false
  }
  let count = 0;
  array1.sort((a, b) => a - b)
  array2.sort((a, b) => a - b)
  for (let i = 0; i < array1.length; i++) {
    console.log((array1[i] ** 2) == array2[i])
    if ((array1[i] ** 2) == array2[i]) {
      count += 1;
    };
  };
  return count == array1.length
}