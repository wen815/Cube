var c=document.getElementById("c");
var cxt=c.getContext("2d");

cxt.beginPath();
cxt.strokeStyle="white";
cxt.strokeRect(10,10,30,10);
cxt.closePath();

cxt.beginPath();
cxt.strokeStyle="white";
cxt.moveTo(10,10);
cxt.lineTo(20,0);
cxt.stroke();
cxt.closePath();

cxt.beginPath();
cxt.strokeStyle="white";
cxt.moveTo(40,10);
cxt.lineTo(50,0);
cxt.stroke();
cxt.closePath();

cxt.beginPath();
cxt.strokeStyle="white";
cxt.moveTo(20,0);
cxt.lineTo(50,0);
cxt.stroke();
cxt.closePath();

cxt.beginPath();
cxt.strokeStyle="white";
cxt.moveTo(50,0);
cxt.lineTo(50,10);
cxt.stroke();
cxt.closePath();

cxt.beginPath();
cxt.strokeStyle="white";
cxt.moveTo(50,10);
cxt.lineTo(40,20);
cxt.stroke();
cxt.closePath();