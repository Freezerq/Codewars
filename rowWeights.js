function rowWeights(array){
  let team1 = [];
  let team2 = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      team1.push(array[i])
    }
    else {
      team2.push(array[i])
    }
  }

  let team1Weight = team1.reduce((total, team1) => team1 + total, 0)
  let team2Weight = team2.reduce((total, team2) => team2 + total, 0)
  return new Array (team1Weight, team2Weight)
}