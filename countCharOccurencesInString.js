function nbDig(n, d) {
  let myarr = [];
  for (let i = 0; i <= n; i++) {
    myarr.push(String(i ** 2))
  }
  
  let count = 0;

  myarr.forEach(element => {
    count += element.split(String(d)).length - 1;
  });

  return count;
  
  
}