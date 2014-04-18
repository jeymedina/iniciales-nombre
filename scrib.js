
 window.onload = function()
 {
 	
 	
 	var dibujar = SVG('letra').size("100%", 300);

     var letraC = [[60,0],[0,0],[100,100],[100,200],[150,200],[150,100],[260,0],[200,0],[128,65],[60,0]];//LETRA "Y"
    
      var num1 = [[0,0], [0,200], [200,200],[200,0],[0,0],[50,50],[50,150],[150,150],[150,50],[50,50]]
 	var continua = dibujar.polyline(letraC).fill("none").stroke({width : 20,color:'#8A0886'});

 	var animar = false;
 	nom_div("mover").addEventListener('click', function(event)
 	{
 		if(!animar)
 		{
 			continua.animate(800).plot(num1);
 		}
 		else
 		{
 			continua.animate(1000).plot(letraC);
 		}
 		animar = !animar;
 	});


 	function nom_div(div)
 	{
 		return document.getElementById(div);
 	}
 }
