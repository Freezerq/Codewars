function filter_list(l) {
  let itog = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      itog.push(l[i]);
    }
  }
  return itog;
}