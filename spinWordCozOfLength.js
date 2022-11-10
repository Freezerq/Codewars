function spinWords(string){
  let emparr = [];
  let arr = string.split(' ')
  arr.forEach(element => {
    if (element.length > 4) {
      emparr.push(element.split('').reverse().join(''))
    }
    else {
      emparr.push(element)
    }
  });
  return emparr.join(' ');
}