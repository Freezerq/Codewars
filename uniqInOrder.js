var uniqueInOrder=function(iterable){
  let arr = []
  for (let i = 0; i < iterable.length; i++) {
    console.log(iterable[i], iterable[i + 1])
    if (iterable[i] != iterable[i + 1]) {
      arr.push(iterable[i])
    }
  }
  return arr;
}