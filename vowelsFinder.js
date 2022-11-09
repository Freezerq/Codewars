function vowelIndices(word){
  let arr = [];
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  
  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i].toLowerCase()) != -1) {
      arr.push(i + 1)
    }
  }
  return arr;
}
