function repeatDown(total){
  var count = 0;
  while (count < total) {
    down();
    count=count+1;
  }
}
function repeatRight(total){
  var count = 0;
  while (count < total) {
    right();
    count=count+1;
  }
}
function repeatUp(total){
  var count = 0;
  while (count < total) {
    up();
    count=count+1;
  }
}

repeatRight(2);
if (getColor() == "blue") {
  down();
} else {
  up();
} 
repeatRight(2);
if (getColor() == "blue") {
  down();
} else {
  up();
} 
repeatRight(2);
if (getColor() == "blue") {
  down();
} else {
  up();
} 
repeatRight(4);
