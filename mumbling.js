function accum(s) {
	let str = '';
  s.toLowerCase().split('').forEach(function(el, index) {
    str += el.toUpperCase() + el.repeat(index) + '-';
  });
  return str.slice(0, str.length - 1);
}
