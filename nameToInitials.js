function abbrevName(name){
  var myArray = name.split(' ');
  
    // code away
  return myArray[0][0].toUpperCase() + "." + myArray[1][0].toUpperCase();
}