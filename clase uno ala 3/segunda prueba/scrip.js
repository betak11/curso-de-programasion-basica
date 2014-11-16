//codigo de edad
//alert("Hola como estan bienbenidos a mi practica.");
//var edad;
/*edad= prompt("Por fovor asegurese de tener 18 años.");
alert("El usario tiene"+" "+edad+" "+"años.");
if(edad>=18){
	alert("bienbenido tienes edad suficiente para entrar a esta pagina.");
}else{
	alert("si no tienes la edad por favor salga de esta pagina.");
}
*/
//CODIGO MARTE

//var pesoDelUsuario;
//pesoDelUsuario= prompt("quieres saber tu peso en marte(kg)?");
	//var masa;
		//masa= Number(pesoDelUsuario)/9.8*3.71;
		//masa= Math.floor(masa);
		//alert("tu peso en marte es "+masa+" kg");
		

//codigo de juego
	function patito(minimo, maximo){
		var numero= Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
			return numero;
	
	}

var opciones = ["piedra","papel","tijeras","spock","lizard"]
var eleccionDelaMaquina=patito(1,5);
var eleccionDelUsuario;
eleccionDelUsuario= prompt("elige una opsion piedra: 1 papel: 2 tijeras: 3 spock: 4 lizard: 5");
				alert("elegistes "+opciones[eleccionDelUsuario-1]);
				alert("juan escojio "+opciones[eleccionDelaMaquina-1]);
if(eleccionDelUsuario==1){
	
	if(eleccionDelaMaquina==1){
	 alert("enpate");
	}
	else if(eleccionDelaMaquina==2||eleccionDelaMaquina==4){
		alert("perdistes");
	}	
	else if(eleccionDelaMaquina==3||eleccionDelaMaquina==5){
		alert("ganastes");
	}

}	
else if(eleccionDelUsuario==2){

		
	if(eleccionDelaMaquina==1||eleccionDelaMaquina==4){
	 alert("ganastes");
	}
	else if(eleccionDelaMaquina==2){
		alert("enpate");
	}	
	else if(eleccionDelaMaquina==3||eleccionDelaMaquina==5){
		alert("perdistes");
	}
}
else if (eleccionDelUsuario==3){
			
	if(eleccionDelaMaquina==1||eleccionDelaMaquina==4){
	 alert("perdistes");
	}
	else if(eleccionDelaMaquina==2||eleccionDelaMaquina==5){
		alert("ganastes");
	}	
	else if(eleccionDelaMaquina==3){
		alert("enpate");
	}
}


else if (eleccionDelUsuario==4){

	if(eleccionDelaMaquina==1||eleccionDelaMaquina==3){
	 alert("ganastes");
	}
	else if(eleccionDelaMaquina==2||eleccionDelaMaquina==5){
		alert("perdistes");
	}	
	else if(eleccionDelaMaquina==4){
		alert("enpate");
	}
}

else if (eleccionDelUsuario==5){

	if(eleccionDelaMaquina==1||eleccionDelaMaquina==3){
	 alert("perdistes");
	}
	else if(eleccionDelaMaquina==2||eleccionDelaMaquina==4){
		alert("ganastes");
	}	
	else if(eleccionDelaMaquina==5){
		alert("enpate");
	}
}

else {
alert("you suck")
}
