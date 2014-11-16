var dibujos,canvas;


function inicio()
{
dibujo =document.getElementById("dibujo");
canvas = dibujo.getContext("2d");

dibujarGrilla(canvas);

canvas.moveTo(1,1);
canvas.lineTo(299,1);
canvas.lineTo(299,299);
canvas.lineTo(1,299);
canvas.lineTo(1,1);
canvas.strokeStyle = "#000000";
canvas.stroke();

canvas.beginPath();
canvas.strokeStyle = "#0011FD"
canvas.arc(150,150,100,(Math.PI*2),false);
canvas.closePath();
canvas.stroke();
}


function dibujarGrilla(c)
{
	var ancho = 300, alto = 300;
	var linea;
	var lineas = 10; 
	var limiteX = ancho / lineas;
	var limiteY = alto / lineas;


	for(linea = 0; linea < limiteX; linea++)
	{
		c.beginPath();
		c.strokeStyle = "#00FD2A";
		c.moveTo(linea * 10, 0);
		c.lineTo(linea * 10, 300);
		c.stroke();
		c.closePath();

	}


	for(linea = 0; linea < limiteY; linea++)
	{
		c.beginPath();
		c.strokeStyle = "#00FD2A";
		c.moveTo(0 , linea * 10);
		c.lineTo(300 , linea * 10);
		c.stroke();
		c.closePath();

	}
}

