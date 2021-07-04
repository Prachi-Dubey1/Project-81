var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var color="pink";

circle(200,200);
function circle(x,y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(x,y,40,0,360);
ctx.stroke();
}
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    //addition activity ends
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}