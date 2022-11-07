function DNAStrand(dna){
  let str = '';
  dna.toUpperCase().split('').forEach(element => {
    switch(element) {
      case 'A':
        str += "T";
        break;
      case 'T':
        str += "A";
        break;
      case 'C':
        str += "G";
        break;
      case 'G':
        str += "C";   
        break;
    }
  });
  return str;
}

console.log(DNAStrand("ATTGC"))