$(document).ready(function (){
    var getImage = document.getElementsByClassName();
    
    
    var stacked_canvas = document.getElementById("stacked");
    var ctx = stacked_canvas.getContext ("2d");
    var img = document.getElementById("#"); 
        //get image from upload
    var stacked_ptn = ctx.createPattern(img, "repeat");
    
    ctx.rect(0,0,800,800);
    ctx.fillStyle = stacked_ptn;
    ctx.fill();
    
    
    
}