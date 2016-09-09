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

right();
if (getColor() == "blue") {
  repeatDown(3);
} else {
  repeatUp(3);
}
if (getColor() == "blue") {
  right();
  up();
  down();
} else {
  left();
  down();
 up();
}
