
    var bg_color = 'rgb(x,y,z)';
   
        
    document.getElementById('button').onmouseover = function(){
        
        document.getElementById('button').style.border = bg_color;
        
    }
    
    var x, y, z, new_color;

    document.getElementById('button').onmouseover = function(){
        
    x = Math.round(Math.random()*256);
    y = Math.round(Math.random()*256);
    z = Math.round(Math.random()*256);
    
    new_color = 'rgb(' + x + "," + y + "," + z +')';
    
    document.getElementById('button').style.color = new_color;
    document.getElementById('button').style.backgroundColor = new_color;
    }
    



    



                  
    


    
      

