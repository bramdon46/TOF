//funcion que genera los resultados para el test vocacional
const WriteResult = (text) =>{
  if (document.getElementById("tablaResultado") != null)
    document.getElementById("tablaResultado").remove();

  let ContenerdorDePreguntas = document.getElementById("preguntas");
  var resultadoHTML = document.createElement("main");
  var divResultado = document.createElement("div");
  var pResultado = document.createElement("p");

  pResultado.innerHTML = text;
  resultadoHTML.id = "tablaResultado";
  resultadoHTML.className = "container";
  divResultado.className = " jumbotron bg-white shadow p-3 mb-5 ";

  resultadoHTML.appendChild(divResultado);
  divResultado.appendChild(pResultado);
  ContenerdorDePreguntas.appendChild(resultadoHTML);
}
//variable que redirige a la pestana de universidades
var linkUniversidades = "<br><br> Para mayor información visita nuestro apartado de <a href='universidades.php'>universidades</a> donde podrás ver los detalles de estas carreras";
