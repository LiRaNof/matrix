window.onload=function(){
var s = window.screen;
var width = q.width = s.width;
var height = q.height =s.height;
var letters = Array(256);
q.addEventListener("mousemove", function(e){
 
    //座標を取得する
    var mX = e.pageX;  //X座標
    var mY = e.pageY;  //Y座標
 
   
  var index=mX/10| 0;
  var ypos=mY/10| 0;
   letters[index]=mY;
  });
var draw = function () {
  q.getContext('2d').fillStyle='rgba(0,0,0,.09)';
  q.getContext('2d').fillRect(0,0,width,height);
  q.getContext('2d').fillStyle='#0F0';
  letters.map(function(y_pos, index){
    text = String.fromCharCode(65296+Math.random()*10);
    x_pos = index * 10;
    q.getContext('2d').fillText(text, x_pos, y_pos);
    letters[index] = (y_pos > 758 ) ? 760 : y_pos + 10;
  });
};
setInterval(draw, 33);
}
