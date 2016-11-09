
function crearListas(){

	// se crea el contenedor padre
	var tableroLista = document.getElementById('tablero');

	// se crean elementos para guardar lista
	var divRow = document.createElement('div');
	var addNombre = document.createElement('div');
	var inputLista = document.createElement('input');
	var botonGuardar = document.createElement('button');
	
	// se crea textnode boton guardar
	var nombreBoton = document.createTextNode('Guardar');

	// se integran las clases y atributos
	divRow.classList.add('row');
	addNombre.classList.add('col-xs-12','col-md-3','marco');
	addNombre.setAttribute('id','nombre-lista');
	inputLista.classList.add('form-control');
	inputLista.setAttribute('type','text');
	inputLista.setAttribute('id','Ingreso-lista');
	inputLista.setAttribute('placeholder','Nombre de la lista...');
	botonGuardar.classList.add('btn','btn-success');
	botonGuardar.setAttribute('type','button');
	
	// se indican los padres de cada elemento
	botonGuardar.appendChild(nombreBoton);
	addNombre.appendChild(inputLista);
	addNombre.appendChild(botonGuardar);
	divRow.appendChild(addNombre);
	tableroLista.appendChild(divRow);

	// hacer que el boton guardar funcione
	botonGuardar.addEventListener("click", guardarLista);

	function guardarLista(){
		var nombreLista = inputLista.value;
		var nodoTextoLista = document.createTextNode(nombreLista);

		// se valida texto en nombre de la lista
		if (nombreLista == null || nombreLista.length == 0){
			alert("No has ingresado el nombre de la lista");
			return false;
		}

		// para volver a dejar vacio el input
		inputLista.value="";

		//crear elementos de la lista creada
		var addLista = document.createElement('div');
		var titulo = document.createElement('strong');
		var enlace = document.createElement('a');

		//nodo enlace añadir tarjeta -elemento "a"
		var anadirTarjeta = enlace.value;
		var nodoEnlaceTarjeta = document.createTextNode(anadirTarjeta);
		var nombreEnlace = document.createTextNode('Añadir Tarjeta');

		// se integran las clases y atributos
		addLista.classList.add('col-xs-12','col-md-3','marco');
		addLista.setAttribute('id','lista-ok');

		// se indican los padres
		enlace.appendChild(nombreEnlace)
		titulo.appendChild(nodoTextoLista);
		enlace.appendChild(nodoEnlaceTarjeta);
		addLista.appendChild(titulo);
		addLista.appendChild(enlace);
		divRow.appendChild(addLista);
		tableroLista.appendChild(divRow)

	// se hace que funcione link 
	enlace.addEventListener("click", anadirTextArea);

	function anadirTextArea(){
		var areaTexto = document.createElement('textarea');
		var btnAnadirTarjeta = document.createElement('button');

		areaTexto.classList.add('form-control');
		areaTexto.setAttribute('rows','3');
		areaTexto.setAttribute('placeholder','Nombre de la tarjeta...');
		btnAnadirTarjeta.classList.add('btn','btn-success');
		btnAnadirTarjeta.setAttribute('type','button');

		var nombreBtnAnadir = document.createTextNode('Añadir');

		btnAnadirTarjeta.appendChild(nombreBtnAnadir);
		addLista.appendChild(areaTexto);
		addLista.appendChild(btnAnadirTarjeta);

		//elimina enlace cuando se hace click y aparece boton añadir
		enlace.classList.toggle('ocultar');

	// se hace que funcione btn añadir tarjeta
	btnAnadirTarjeta.addEventListener("click", anadirTarjetaNueva);

	function anadirTarjetaNueva(){
		var divTarjeta = document.createElement('div');
		var nombreTarjeta = areaTexto.value;
		var nodoNombreTarjeta = document.createTextNode(nombreTarjeta);
		var iconoXdos = document.createElement('i');

		if (nombreTarjeta == null || nombreTarjeta.length == 0){
			alert("No has ingresado el nombre de la Tarjeta");
			return false;
		}

		// para volver a dejar vacio el input
		areaTexto.value="";

		divTarjeta.classList.add('tarjeta');
		iconoXdos.classList.add('fa','fa-times');
		iconoXdos.setAttribute('aria-hidden','true');

		divTarjeta.appendChild(nodoNombreTarjeta);
		addLista.appendChild(divTarjeta);
		divTarjeta.appendChild(iconoXdos);

		// para eliminar tarjetas
		iconoXdos.addEventListener("click", eliminarTarjeta);
		function eliminarTarjeta(){
			addLista.removeChild(divTarjeta);
		}		

	}

}

}

}



