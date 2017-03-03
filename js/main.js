function validateForm(){
	//validar campos vacios
		var FormControl = document.getElementsByClassName('form-control');
		var x = 0;
		while (x < FormControl.length-2) {
			if (FormControl[x].value == ""){
				alert("El campo " + FormControl[x].id + " está vacio y es OBLIGATORIO");
				FormControl[x].focus();
			}
			x++;
		}
	//validar nombres y apellidos solo letras y la primera letra de cada palabra en mayúscula
		var nombre = document.getElementById('name');
		var apellido = document.getElementById('lastname')
		var filtroLetrasMayus=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
	//var filtroLetras=/^[A-Za-z\s]+$/;
		if (!filtroLetrasMayus.test(nombre.value)||!filtroLetrasMayus.test(apellido.value)){
			alert("Nombres y Apellidos, solo letras y como nombre propio");
		}
 //validar password mínimo 6 caracteres y diferente a password, 123456 o 098754
 		var pass = document.getElementById('input-password').value;
 		if (pass.length < 6){
 			alert("Ingrese mínimo 6 caracteres");
 		}
 		if (pass == "password"||pass == "123456"||pass == "098754" ){
 			alert("Ingrese una contraseña distinta");
 		}
//validar que el selector tenga una opcion escogida
	var bici = document.getElementById('selectBici').value;
	if(bici == "0"){
			alert("Selecciona un tipo de bici")
	}
}
