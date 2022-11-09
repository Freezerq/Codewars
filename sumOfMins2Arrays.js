function sumOfMinimums(arr) {
  let minn = 0;
  arr.forEach(element => minn += Math.min(...element));
  return minn;
}