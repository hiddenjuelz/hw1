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
repeatDown(4);
var color = getColor();
down();
setColor(color);
repeatRight(2);
up();
right();
var color = getColor();
down();
setColor(color);
repeatRight(2);
