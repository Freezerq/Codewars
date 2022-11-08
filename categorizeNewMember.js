function openOrSenior(data) {
  let newArr = data.map(elem => {
    if (elem[0] >= 55 && elem[1] > 7) {
      return "Senior"
    }
    else {
      return 'Open'
    }
  })
  return newArr;
}