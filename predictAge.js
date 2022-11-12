function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
  let arrMultiple = arr.map(a => a * a).reduce((arrr, total) => arrr + total, 0);
  return Math.floor((arrMultiple ** 0.5) / 2)
}
