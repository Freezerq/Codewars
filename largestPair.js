function largestPairSum (numbers) {
  let max1 = numbers.splice(numbers.indexOf(Math.max(...numbers)), 1)
  return max1[0] + Math.max(...numbers)
  
}