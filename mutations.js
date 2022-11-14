function mutation(arr) {
  let arr1 = arr[0].toLowerCase()
  let arr2 = arr[1].toLowerCase()
  console.log(arr2)
  let counter = 0;
  for (let char of arr2) {
    if (arr1.indexOf(char) > -1) {
      counter += 1;
    }
  }
  return counter == arr2.length;
}
