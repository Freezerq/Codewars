let count = 0;

function cc(card) {
  switch (card) {
  case 2:
    count += 1;
    break;
  case 3:
    count += 1;
    break;
  case 4:
    count += 1;
    break;
  case 5:
    count += 1;
    break;
  case 6:
    count += 1;
    break;
  case 7:
    break;
  case 8:
    break;
  case 9:
    break;
  case 10:
    count -= 1;
    break;
  case "J":
    count -= 1;
    break;
  case "Q":
    count -= 1;
    break;
  case "K":
    count -= 1;
    break;
  case "A":
    count -= 1;
    break;
  }
  
  if(count > 0) {
    return String(count) + " Bet";
  }
  else {
    return String(count) + " Hold";
  }


  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');