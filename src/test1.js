// funcion que sirve para generar un recuadro con las preguntas a realizar en el test vocacional
const CreateQuestion = (TextoPregunta, respuestaText1, respuestaText2 , idRespuesta1, idRespuesta2, RadioName) => {

  let ContenerdorDePreguntas = document.getElementById("preguntas");

  var pregunta = document.createElement("main");
  var divPregunta = document.createElement("div");
  var parrafoPregunta = document.createElement("p");
  parrafoPregunta.innerHTML = TextoPregunta;

  pregunta.appendChild(divPregunta);
  divPregunta.appendChild(parrafoPregunta);
  for (var i = 0; i < 2; i++) {

    var divrespuesta = document.createElement("div");
    var div2respuesta = document.createElement("div");
    var div3respuesta = document.createElement("div");
    var inputRespuesta = document.createElement("input");
    var respuesta = document.createElement("input");

    pregunta.className = "container";
    divPregunta.className = "jumbotron colorFour align-middle shadow p-3 mb-5";
    parrafoPregunta.className = "text-white d-flex justify-content-center ";
    divrespuesta.className = "input-group w-100";
    div2respuesta.className = "input-group-prepend";
    div3respuesta.className = "input-group-text bg-white";
    inputRespuesta.type = "radio";
    inputRespuesta.name = RadioName;
    respuesta.type = "text";
    respuesta.className = "form-control bg-white text-dark";
    switch (i) {
      case 0:
        respuesta.value = respuestaText1;
        inputRespuesta.id=idRespuesta1;
        break;
      case 1:
        respuesta.value = respuestaText2;
        inputRespuesta.id=idRespuesta2;
        break;
    }

    respuesta.disabled = true;

    divPregunta.appendChild(divrespuesta);
    divrespuesta.appendChild(div2respuesta);
    div2respuesta.appendChild(div3respuesta);
    div3respuesta.appendChild(inputRespuesta);
    divrespuesta.appendChild(respuesta);
  }



  ContenerdorDePreguntas.appendChild(pregunta);

}
//funcion que genera un recuadro con las instrucciones a seguir para realizar el test
createTituloTest=(tituloText, cuerpoText)=>
{
  /*
  lo que busco en esta parte es que con el tituloText, sea el titulo del test como "test 1"
  que tenga un salto de linea para las indicaciones, en esas indicaciones seria ideal que
  pudiera poner yo saltos de lineas con esto "\n" por que en el test 2 pongo las 4 posibles
  respuestas y explicar que significa, te dejo a ti los colores que quieras usar, solo
  requiero eso para la estructura
  */
  let ContenerdorDePreguntas = document.getElementById("preguntas");

  var pregunta = document.createElement("main");
  var divPregunta = document.createElement("div");
  var parrafoPregunta = document.createElement("p");
  parrafoPregunta.innerHTML = tituloText+".\n"+cuerpoText;

  pregunta.className = "container";
  divPregunta.className = "jumbotron colorFour align-middle shadow p-3 mb-5";
  parrafoPregunta.className = "text-white d-flex justify-content-center ";

  pregunta.appendChild(divPregunta);
  divPregunta.appendChild(parrafoPregunta);
  ContenerdorDePreguntas.appendChild(pregunta);
}
//se instancia la funcion crear titulo
createTituloTest("Test Vocacional", "<br>Este inventario es útil para la comprensión de los intereses vocacionales de una persona, cuenta con 100 reactivos que puntea como resultado 20 juicios para cada área vocacional que mide. (Duración 15 minutos) <br>En este cuestionario se le pide que exprese su preferencia por diferentes ocupaciones. Las ocupaciones se presentan por pares y se le pide que las marque para indicar sus preferencias. En cada comparación, no tome en cuenta la diferencia de salario y/o prestigio.");

// arreglo que muestra todas las preguntas del test vocacional
let arrayPreguntas=["Ciencias Físicas" , "Ingeniero Civil", "Mecánico" , "Veterinario","Inventor" , "Agente de compras", "Químico" , "Comerciante de Automóviles",
"Electricidad" , "Director de museo", "Aviador" , "Abogado Defensor", "Ciencias Físicas" , "Escritor", "Astrónomo" , "Sacerdote", "Diseño de máquinas" , "Arquitecto",
"Radio Técnico" , "Maestro de Música", "Medico" , "Ciencias Físicas", "Nutrición" , "Zoólogo", "Dentista" , "Estadística", "Veterinario" , "Industrial",
"Zoólogo" , "Supervisión de Fabrica", "Bacteriólogo " , "Redactor de Publicidad", "Bacteriólogo", "Redactor de Publicidad", "Botánico", "Novelista", "Agricultor",
"Asilo de ancianos", "Cirujano", "Escultor", "Biólogo", "Trompetista", "Matemático", "Químico", "Estadística", "Botánico", "Analistas de Precios", "Especialista en Impuestos",
"Contador", "Revendedor", "Estadística de seguros", "Director de empresa", "Pagador", "Arbitro de trabajo", "Análisis de precio", "Conferencista", "Agente de Compras",
"Tribunal de menores", "Especialista en Impuestos", "Diseñador de Tejidos", "Cajero", "Director de banda", "Banquero", "Diseñador de máquinas", "Negocios",
"Nutrición", "Industrial", "Pagador", "Revendedor", "Industrial", "Agente de Inversión", "Gobernador", "Comerciante de inmuebles", "Orador político",
"Comisionista", "Licenciado en leyes", "Comerciante al por menor", "Orientador Vocacional", "Comerciante al por mayor", "Decorador", "Agente de Seguros",
"Compositor de Canciones", "Director de Empresas", "Ingeniero Civil", "Alcalde", "Biólogo", "Juez", "Contador", "Gobernador", "Comerciante al mayoreo",
"Gerente de Hotel", "Alcalde", "Oficial de Guardacostas", "Escritor de Editoriales", "Director de Hospital", "Periodista", "Director de Escuelas", "Trabajador Social",
"Capitán de Barco", "Artista Comercial", "Supervisor de fabrica", "Organista", "Abogado Defensor", "Diseñador Puentes", "Arbitro de Trabajo", "Seguridad Pública",
"Propagandista", "Cajero", "Orador Político", "Banquero", "Redactor de Publicidad", "Oficial del Ejercito", "Abogado Defensor", "Orador Político", "Vendedor",
"Catedrático Universitario", "Redactor de Publicidad", "Rehabilitación de Ciegos", "Comentarista de Radio", "Director de teatro", "Vendedor de Seguros", "Violinista",
"Periodistas", "Aviador", "Corresponsal en el extranjero", "Agricultor", "Profesor de Lenguajes", "Estadístico de Seguro", "Escritor de Periódico", "Importador",
"Escritor de Revistas", "Capitán de Barco", "Historiador", "Visitador Médico", "Editor de Periódico", "Editor de Revista", "Licenciado en Leyes", "Cruz Roja",
"Escritor", "Artista", "Conferencista", "Compositor Musical", "Bienestar Infantil", "Diseñador de Aviones", "Sacerdote", "Medico", "Orientación Vocacional", "Contador",
"Tribunal de Menores", "Prestamista", "Misionero", "Director de Escuela", "Trabajador Social", "Vendedor de Seguros", "Rehabilitación de Ciegos", "Novelista",
"Bienestar Infantil", "Banco de Sangre", "Cruz Roja", "Pintor Retratista", "Asilo de Ancianos", "Cantante", "Artista Comercial", "Mecánico", "Decorador", "Bacteriólogo",
"Artista", "Matemático", "Pintor Retratista", "Contratista", "Escultor", "Juez", "Dibujante de tiras cómicas", "Propagandista", "Arquitecto", "Historiador",
"Director de Teatro", "Misionero", "Artista Comercial", "Actor", "Diseñador de Tejidos", "Director de Orquesta", "Director de Orquesta", "Inventor", "Compositor Musical",
"Cirujano", "Saxofonista", "Cajero", "Violinista", "Comerciante de Inmuebles", "Cantante", "Director de Hospital", "Director de Coros", "Vendedor", "Compositor de Canciones",
"Corresponsal en el extranjero", "Organista", "Bienestar Infantil", "Maestro de Música", "Diseñador de Vestidos", "Pianista", "Violinista"]
var c=1;
// se crean todas las preguntas de manera dinamica
for(var i=0; i<202; i+=2)
{
  CreateQuestion("Seccion "+c, arrayPreguntas[i], arrayPreguntas[i+1], i, (i+1), "Seccion "+c);
   c++;
}

// cuando se oprime el voton evaluar
const Evaluar = () =>{ // cuando se oprime el boton de evaluar las respuestas del test

  /*
	 Ciencias Físicas=CF
	 Ciencias Biológicas=CB
   Computacional=CP
   Comercial=C
   Ejecutiva=E
   Persuasiva=P
   Lingüística=L
   Humanitaria=H
   Artística=A
   Musical=M
  El valor que selecciona el usuario lo sumare y mostrare el final, el maximo puntaje a sacar es 20 puntos
  */
  var cf=1,cb=1,cp=1,c=1,e=1,p=1,l=1,h=1,a=1,m=1;
  for(var i=0; i<=200; i+=2)
  {
    radioB=document.getElementById(i);
    if(i==2)
      radioB.checked ? cf++ : cb++;
      if(i==4)
        radioB.checked ? cf++ : cp++;
      if(i==6)
        radioB.checked ? cf++ : c++;
      if(i==8)
        radioB.checked ? cf++ : e++;
      if(i==10)
        radioB.checked ? cf++ : p++;
      if(i==12)
        radioB.checked ? cf++ : l++;
      if(i==14)
        radioB.checked ? cf++ : h++;
      if(i==16)
        radioB.checked ? cf++ : a++;
      if(i==18)
        radioB.checked ? cf++ : m++;


      if(i==20)
        radioB.checked ? cb++ : cf++;
      if(i==24)
        radioB.checked ? cb++ : cp++;
      if(i==26)
        radioB.checked ? cb++ : c++;
      if(i==28)
        radioB.checked ? cb++ : e++;
      if(i==30)
        radioB.checked ? cb++ : p++;
      if(i==32)
        radioB.checked ? cb++ : l++;
      if(i==34)
        radioB.checked ? cb++ : h++;
      if(i==36)
        radioB.checked ? cb++ : a++;
      if(i==38)
        radioB.checked ? cb++ : m++;


      if(i==40)
        radioB.checked ? cp++ : cf++;
      if(i==42)
        radioB.checked ? cp++ : cb++;
      if(i==46)
        radioB.checked ? cp++ : c++;
      if(i==48)
        radioB.checked ? cp++ : e++;
      if(i==50)
        radioB.checked ? cp++ : p++;
      if(i==52)
        radioB.checked ? cp++ : l++;
      if(i==54)
        radioB.checked ? cp++ : h++;
      if(i==56)
        radioB.checked ? cp++ : a++;
      if(i==58)
        radioB.checked ? cp++ : m++;


      if(i==60)
        radioB.checked ? c++ : cf++;
      if(i==62)
        radioB.checked ? c++ : cb++;
      if(i==64)
        radioB.checked ? c++ : cp++;
      if(i==68)
        radioB.checked ? c++ : e++;
      if(i==70)
        radioB.checked ? c++ : p++;
      if(i==72)
        radioB.checked ? c++ : l++;
      if(i==74)
        radioB.checked ? c++ : h++;
      if(i==76)
        radioB.checked ? c++ : a++;
      if(i==78)
        radioB.checked ? c++ : m++;


      if(i==80)
        radioB.checked ? e++ : cf++;
      if(i==82)
        radioB.checked ? e++ : cb++;
      if(i==84)
        radioB.checked ? e++ : cp++;
      if(i==86)
        radioB.checked ? e++ : c++;
      if(i==90)
        radioB.checked ? e++ : p++;
      if(i==92)
        radioB.checked ? e++ : l++;
      if(i==94)
        radioB.checked ? e++ : h++;
      if(i==96)
        radioB.checked ? e++ : a++;
      if(i==98)
        radioB.checked ? e++ : m++;


      if(i==100)
        radioB.checked ? p++ : cf++;
      if(i==102)
        radioB.checked ? p++ : cb++;
      if(i==104)
        radioB.checked ? p++ : cp++;
      if(i==106)
        radioB.checked ? p++ : c++;
      if(i==108)
        radioB.checked ? p++ : e++;
      if(i==112)
        radioB.checked ? p++ : l++;
      if(i==114)
        radioB.checked ? p++ : h++;
      if(i==116)
        radioB.checked ? p++ : a++;
      if(i==118)
        radioB.checked ? p++ : m++;


      if(i==120)
        radioB.checked ? l++ : cf++;
      if(i==122)
        radioB.checked ? l++ : cb++;
      if(i==124)
        radioB.checked ? l++ : cp++;
      if(i==126)
        radioB.checked ? l++ : c++;
      if(i==128)
        radioB.checked ? l++ : e++;
      if(i==132)
        radioB.checked ? l++ : p++;
      if(i==136)
        radioB.checked ? l++ : h++;
      if(i==138)
        radioB.checked ? l++ : a++;
      if(i==140)
        radioB.checked ? l++ : m++;


      if(i==142)
        radioB.checked ? h++ : cf++;
      if(i==144)
        radioB.checked ? h++ : cb++;
      if(i==146)
        radioB.checked ? h++ : cp++;
      if(i==148)
        radioB.checked ? h++ : c++;
      if(i==150)
        radioB.checked ? h++ : e++;
      if(i==154)
        radioB.checked ? h++ : p++;
      if(i==156)
        radioB.checked ? h++ : l++;
      if(i==160)
        radioB.checked ? h++ : a++;
      if(i==162)
        radioB.checked ? h++ : m++;


      if(i==164)
        radioB.checked ? a++ : cf++;
      if(i==166)
        radioB.checked ? a++ : cb++;
      if(i==168)
        radioB.checked ? a++ : cp++;
      if(i==170)
        radioB.checked ? a++ : c++;
      if(i==172)
        radioB.checked ? a++ : e++;
      if(i==174)
        radioB.checked ? a++ : p++;
      if(i==176)
        radioB.checked ? a++ : l++;
      if(i==178)
        radioB.checked ? a++ : h++;
      if(i==182)
        radioB.checked ? a++ : m++;


      if(i==184)
        radioB.checked ? m++ : cf++;
      if(i==186)
        radioB.checked ? m++ : cb++;
      if(i==188)
        radioB.checked ? m++ : cp++
      if(i==190)
        radioB.checked ? m++ : c++;
      if(i==192)
        radioB.checked ? m++ : e++;
      if(i==194)
        radioB.checked ? m++ : p++;
      if(i==196)
        radioB.checked ? m++ : l++;
      if(i==198)
        radioB.checked ? m++ : h++;
      if(i==200)
        radioB.checked ? m++ : a++;
  }

  var resul=[cf, cb, cp, c, e, p, l, h, a, m];
  resul.sort(compareNumbers);
  var totalCarreras = "";
  let linkUniversidades = "<br><br> Para mayor información visita nuestro apartado de <a href='universidades.php'>universidades</a> donde podrás ver los detalles de estas carreras";
  switch (resul[9])
  {
    case cf:
      for (var i = 0; i < carrerasCF.length; i++) {
        totalCarreras += carrerasCF[i];
      }
      WriteResult("Tu vocacion podria ser en las Ciencias Fisicas Te recomendamos:" + totalCarreras + linkUniversidades);
      break;
    case cb:
      for (var i = 0; i < carrerasCB.length; i++) {
        totalCarreras += carrerasCB[i];
      }
      WriteResult("Tu vocacion podria ser en las Ciencias Biologicas" + totalCarreras + linkUniversidades);
      break;
    case cp:
      for (var i = 0; i < carrerasCP.length; i++) {
        totalCarreras += carrerasCP[i];
      }
      WriteResult("Tu vocacion podria ser en la Computación" + totalCarreras + linkUniversidades);
      break;
    case c:
      for (var i = 0; i < carrerasC.length; i++) {
        totalCarreras += carrerasC[i];
      }
      WriteResult("Tu vocacion podria ser en lo Comercial" + totalCarreras + linkUniversidades);
      break;
    case e:
      for (var i = 0; i < carrerasE.length; i++) {
        totalCarreras += carrerasE[i];
      }
      WriteResult("Tu vocacion podria ser en lo Ejecutivo" + totalCarreras + linkUniversidades);
      break;
    case p:
      for (var i = 0; i < carrerasP.length; i++) {
        totalCarreras += carrerasP[i];
      }
      WriteResult("Tu vocacion podria ser en lo Persuasivo" + totalCarreras + linkUniversidades);
      break;
    case l:
      for (var i = 0; i < carrerasL.length; i++) {
        totalCarreras += carrerasL[i];
      }
      WriteResult("Tu vocacion podria ser en las Lenguas" + totalCarreras + linkUniversidades);
      break;
    case h:
      for (var i = 0; i < carrerasH.length; i++) {
        totalCarreras += carrerasH[i];
      }
      WriteResult("Tu vocacion podria ser en las Humanitarias" + totalCarreras + linkUniversidades);
      break;
    case a:
      for (var i = 0; i < carrerasA.length; i++) {
        totalCarreras += carrerasA[i];
      }
      WriteResult("Tu vocacion podria ser en lo Artistico" + totalCarreras + linkUniversidades);
      break;
    case m:
      for (var i = 0; i < carrerasM.length; i++) {
        totalCarreras += carrerasM[i];
      }
      WriteResult("Tu vocacion podria ser en la Musica" + totalCarreras + linkUniversidades);
      break;
  }
}
// funcion que sirve como auxiliar para ordenar los resultados
function compareNumbers(a, b) {
  return a - b;
}
