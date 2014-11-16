var palabra="tamarindo"
var hombre, l;

var Ahorcado = function(con)
{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;

	this.dibujar();
}
Ahorcado.prototype.dibujar = function ()
{
	var dibujo = this.contexto;

	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineTo(370,350)
	dibujo.lineTo(430,350)
	dibujo.strokeStyle = "black"
	dibujo.lineWidth = 10
	dibujo.stroke();
	dibujo.closePath();

	if(this.intentos > 0)
	{
			//cabesa
		dibujo.beginPath();
		dibujo.arc(150,140,40,0,Math.PI * 2, false);
		dibujo.strokeStyle = "blue";
		dibujo.lineWidth = 7;
		dibujo.stroke();
		dibujo.closePath();

		if(this.intentos > 1)
		{
				//cuerpo
			dibujo.beginPath();
			dibujo.moveTo(150,180);
			dibujo.lineTo(150,250);
			dibujo.strokeStyle = "blue";
			dibujo.lineWidth = 7;
			dibujo.stroke();
			dibujo.closePath();

			if(this.intentos > 2)
			{
					//brasos
				dibujo.beginPath();
				dibujo.moveTo(120,220);
				dibujo.lineTo(150,180);
				dibujo.lineTo(180,220);
				dibujo.strokeStyle = "blue";
				dibujo.lineWidth = 7;
				dibujo.stroke();
				dibujo.closePath();

				if(this.intentos > 3)
				{
						//pies
					dibujo.beginPath();
					dibujo.moveTo(120,290);
					dibujo.lineTo(150,250);
					dibujo.lineTo(180,290);
					dibujo.strokeStyle = "blue";
					dibujo.lineWidth = 7;
					dibujo.stroke();
					dibujo.closePath();

					if(this.intentos > 3)
					{
						//ojos
						dibujo.beginPath();
						
						dibujo.moveTo(125,120);
						dibujo.lineTo(145,145);
						dibujo.moveTo(145,120);
						dibujo.lineTo(125,145);

						dibujo.moveTo(155,120);
						dibujo.lineTo(175,145);
						dibujo.moveTo(175,120);
						dibujo.lineTo(155,145);

						dibujo.strokeStyle = "black";
						dibujo.lineWidth = 4;
						dibujo.stroke();
						dibujo.closePath();
					}
				}
			}
		}
	}
}
Ahorcado.prototype.trazar = function ()
{
	this.intentos++
	if(this.intentos >= this.maximo)
	{
		this.vivo = false
	}
	this.dibujar();
}

function iniciar()
{

	l = document.getElementById("letra")
	var b = document.getElementById("boton")
	var canvas = document.getElementById("c")
	canvas.width = 500
	canvas.height = 400
	var contexto = canvas.getContext("2d")
	hombre = new Ahorcado(contexto);
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();
	b.addEventListener("click",agregarLetra);
}
function agregarLetra()
{

 var letra = l.value;
 	letra = letra.toUpperCase();
	hombre.trazar();
	alert(hombre.vivo)

}
alert("hola como estas")