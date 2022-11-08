function stray(numbers) {
  numbers.sort((a, b) => a - b)
  console.log(numbers[numbers.length - 1])
  return (numbers[0] == numbers[1]) ? numbers[numbers.length - 1] : numbers[0]
}
console.log(stray([1, 1, 2]))