function AND(A,B){

	if(A == true && B == true){
		return true
	} else {
		return false
	}

}


function OR(A,B){

	if(A == true | B == true ){
		return true
	} else {
		return false
	}

}


function N(A){

	if(A == true){
		return false
	} else {
		return true;
	}

}


function XOR(A,B){

	if(A == true && B == false){
		return true
	} else if(A == false && B == true){
		return true
	} else {
		return false
	}

}



//====================================================================
//					VARIANTES CON RESPUESTA:
function sAND(A,B){

	if(A == true && B == true){
		console.log("true")
		return true
	} else {
		console.log("false")
		return false
	}

}


function sOR(A,B){

	if(A == true | B == true ){
		console.log("true")
		return true
	} else {
		console.log("false")
		return false
	}

}


function sN(A){

	if(A == true){
		console.log("false")
		return false
	} else {
		console.log("true")
		return true;
	}

}


function sXOR(A,B){

	if(A == true && B == false){
		console.log("true")
		return true
	} else if(A == false && B == true){
		console.log("true")
		return true
	} else {
		console.log("false")
		return false
	}

}



var cantVars=0

function obtenerTabla(argumentos){

	//Se verifica si el usuario cambio el valor de "cantVars" antes de la llamada
	// si no lo iso, se cambia a tres. Si sí lo iso, se deja tal cual.
	//CantVars es la Cantidad de variables en la operacion
	if(cantVars==0){
		cantVars = 3
	} else {
		//do nothing
	}

	//"2", porque 2 es la 'base' de un numero booleano
	var posibilidades = Math.pow(2,cantVars)

	//Se le agrega el string "s", porque al principio de las llamadas, se necesita que la primera funcion invocada
	// tenga una respuesta en la consola. Estas funciones son copias a las originales, excepto que tienen una s minuscula
	// al principio
	argumentos = "s" + argumentos

	//Se hace una copia de los argumentos preParseado para poder
	// restaurarlo y re-parsearlo en las siguientes iteraciones
	var argumentosPreParseado
	argumentosPreParseado = argumentos

	if(cantVars==2){

		for(var i=0;i<=1;i++){
			for(var j=0;j<=1;j++){

				argumentos = argumentosPreParseado;
				argumentos = argumentos.replace(/vA/g,i);
				argumentos = argumentos.replace(/vB/g,j);
				console.log("A=",i," y B=",j," f = ")
				eval(argumentos)

			}
		}

	} else if(cantVars==3){

		for(var i=0;i<=1;i++){
			for(var j=0;j<=1;j++){
				for(var k=0;k<=1;k++){

						argumentos = argumentosPreParseado;

						argumentos = argumentos.replace(/vA/g,i);
						argumentos = argumentos.replace(/vB/g,j);
						argumentos = argumentos.replace(/vC/g,k);

						//console.log("'argumentos' parsed: ",argumentos)  //DEBUGGING
						//console.log(argumentos)  //DEBUGGING
						//console.log(typeof(argumentos));  //DEBUGGING

						console.log("A=",i," y B=",j," y C=",k," f = ")
						eval(argumentos)

						//console.log("-------------------------------------------------")    //DEBUGGING

				}
			}
		}

	}

}



console.log("Bienvenido! Matematico apuesto 7u7");
console.log("Que desea hacer?: ");
console.log("OPCIONES DISPONIBLES: ");
console.log("obtenerTabla");