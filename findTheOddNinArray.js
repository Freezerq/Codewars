function findOdd(A) {
  for (let n of A) {
    let counter = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] == n) {
        counter += 1;
      }
    }
    if (counter % 2 == 1) {
      return n
    }
  }
}