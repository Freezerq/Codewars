function duplicateEncode(word){
  let str = '';
  word = word.toLowerCase()
  function count(char) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
      if (char == word[i]) {
        counter += 1;
      }
    }
    return counter;
  }

  for (let c of word) {
    if (count(c) == 1) {
      str += '('
    }
    else {
      str += ')'
    }
  }

  return str;
}