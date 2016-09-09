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

repeatDown(2);
var color = getColor();
repeatDown(3);
repeatRight(2);
setColor(color);
repeatRight(2);
up();
      
