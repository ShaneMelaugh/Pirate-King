// // console.log("beeeans");
// // var canvas = document.getElementById("myCanvas"),
// //     ctx = canvas.getContext("2d");
// //
// // canvas.width = 4602;
// // canvas.height = 2737;
// //
// // var background = new Image();
// // background.src = "src/images/map.svg";
// //
// // background.onload = function(){
// //     ctx.drawImage(background,0,0);
// //     drawShape();
// //     addEventListener("keypress", onPressFunc);
// // };
// //
// // function drawShape (){
// // // begin custom shape
// // ctx.beginPath();
// // ctx.moveTo(170, 80);
// // ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
// // ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
// // ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
// // ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
// // ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
// // ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
// //
// // // complete custom shape
// // ctx.closePath();
// // ctx.lineWidth = 10;
// // ctx.strokeStyle = 'blue';
// // ctx.stroke();
// // }
//
//
// var rectX =50;
// var rectY=200;
//
// var myLoop;
//
// var canvas = document.getElementById("myCanvas"),
//     ctx = canvas.getContext("2d");
//
// canvas.width = 4602;
// canvas.height = 2737;
//
// window.onload = function () {
//     render();
//
//     addEventListener("keypress", onPressFunc);
// }
//
// function onPressFunc(e){
//     if(String.fromCharCode(e.charCode) == "w"){
//         rectY = rectY-100;
//     }else if(String.fromCharCode(e.charCode) == "s"){
//         rectY = rectY+100;
//     }else if(String.fromCharCode(e.charCode) == "d"){
//         rectX = rectX+100;
//     }else if(String.fromCharCode(e.charCode) == "a"){
//         rectX = rectX-100;
//     }
//
//     render();
// }
//
// var background = new Image();
// background.src = "src/images/map.svg";
//
//
// function render() {
//     ctx.drawImage(background,0,0);
//
//    ctx.fillStyle= "red";
//    ctx.fillRect(0,0,250,2737);
//
//     ctx.fillStyle= "yellow";
//     ctx.fillRect(rectX,rectY,150,150);
//
// }