function isSameLanguage(list) {
  let arr = [];
  for (let key of list) {
    if (arr.indexOf(key['language']) == -1) {
      arr.push(key['language'])
    }
  }
  console.log(arr)
  return arr.length == 1
}