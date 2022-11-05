var isSquare = function(n){
  
  if (Math.pow(n, 0.5) == Math.round(Math.pow(n, 0.5))) {
    
    return true;
  }
  else {
    return false
  }
  
}