function loadResult() {
	query  = "https://buscador.plataformadetransparencia.org.mx/web/guest/buscadornacional?buscador="

	cadena = document.getElementById("cadenaBusqueda").value;
	fetch("/nlp-module?cadena="+cadena)
	.then(response => response.json())
	.then(data =>{
		console.log(data.data)
    	//window.open(query+data+"&coleccion=5")
	})
}